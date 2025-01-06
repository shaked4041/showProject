// utils/sendEmail.js

import nodemailer from 'nodemailer';
import ShowModel from '../server/shows/show.model'; // Adjust path as needed

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

export async function sendOrderConfirmationEmail(to, order) {
    try {
        if (!to) {
            throw new Error('No recipient email address provided');
        }
        
        // Fetch the show details
        const show = await ShowModel.findById(order.showId);
        if (!show) {
            throw new Error('Show not found');
        }

        const { fullName, phoneNumber, email, birthDate, gender } = order.userDetails;
        const { title, artist, location, date } = show;
        const finalPrice = order.finalPrice;
        const amountOfTickets = order.amountOfTickets;

        // Log email details for debugging
        console.log('Sending email to:', to);
        console.log('Email details:', {
            fullName,
            phoneNumber,
            email,
            birthDate,
            gender,
            title,
            artist,
            location,
            date,
            finalPrice,
            amountOfTickets
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: to,
            subject: 'Your Order Confirmation',
            html: `
                <h1>Hello ${fullName},</h1>
                <p>Thank you for your purchase!</p>
                <h2>Order Details:</h2>
                <ul>
                    <li><strong>Event:</strong> ${title}</li>
                    <li><strong>Artist:</strong> ${artist}</li>
                    <li><strong>Location:</strong> ${location}</li>
                    <li><strong>Date:</strong> ${date}</li>
                    <li><strong>Number of Tickets:</strong> ${amountOfTickets}</li>
                    <li><strong>Total Price:</strong> ${finalPrice}</li>
                </ul>
                <h2>Your details:</h2>
                <ul>
                    <li><strong>Phone Number:</strong> ${phoneNumber}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Birth Date:</strong> ${birthDate}</li>
                    <li><strong>Gender:</strong> ${gender}</li>
                </ul>
                <p>We look forward to seeing you at the event!</p>
                <p>Best regards,<br>The Event Team</p>
            `
        };
        
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
