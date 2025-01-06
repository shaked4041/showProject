import { connectToMongo } from "@/server/connectToMongo";
import { OrderModel } from "@/server/orders/order.model";
import { sendOrderConfirmationEmail } from "@/utils/sendEmail";

export default async function handler(req, res) {
    await connectToMongo();

    if (req.method === 'POST') {
        return handleCreateOrder(req, res);
    } else if (req.method === 'PUT') {
        return handleUpdateOrder(req, res);
    } else {
        res.setHeader('Allow', ['POST', 'PUT']);
        res.status(405).json({ message: 'Method not allowed' });
    }
}
async function handleCreateOrder(req, res) {
    try {
        const { showId, count, price, userDetails } = req.body; 

        const userId = '664e09b1959c493a8d50894e'; 

        const newOrder = new OrderModel({
            userId,
            showId,
            amountOfTickets: count,
            finalPrice: price * count,
            type: 'draft',
            purchaseDate: new Date(),
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({ success: true, order: savedOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}
async function handleUpdateOrder(req, res) {
    try {
        const { orderId, userDetails } = req.body; 

          const updatedOrder = await OrderModel.findByIdAndUpdate(
            orderId,
            { 
                type: 'payed',
                userDetails
            },
            { new: true }
        );

        
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        
        const { email } = updatedOrder.userDetails;
        if (!email) {
            return res.status(500).json({ success: false, message: 'Email not found in user details' });
        }
        
        await sendOrderConfirmationEmail(email, updatedOrder);


        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

