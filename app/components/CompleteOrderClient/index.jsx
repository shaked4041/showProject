"use client"; // Ensures this component is client-side

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import styles from './style.module.scss';
import Link from 'next/link';
import { IoChevronBackOutline, IoLocationSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegCalendarCheck } from 'react-icons/fa';
import OrderSummary from '@/app/components/OrderSummary';

export default function CompleteOrderClient({ order, pic, partDate, price }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
    gender: '',
  });

  const router = useRouter(); // This should work correctly now

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/order', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: order._id,
          userDetails: formData, // Include user details
        }),
      });

      if (response.ok) {
        router.push(`/order/${order._id}/completeOrder`); // Correct use of router.push
      } else {
        console.error('Failed to submit order');
        // You might want to display an error message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // You might want to display an error message to the user
    }
  };

  return (
    <div className={styles.purchContainer}>
      <div className={styles.bodyCont}>
        <div className={styles.pageHeader}>
          <Link href={`/show/${order.showId._id}`} className={styles.headerLeft}>
            <IoChevronBackOutline className={styles.backIcon} />
            <span className={styles.headerTitle}>Select tickets</span>
          </Link>
          <Link href={`/`} className={styles.closeIcon}>
            <IoMdClose />
          </Link>
        </div>

        <div className={styles.pageBody}>
          <div className={styles.leftContainer}>
            <div className={styles.bodyLeft}>
              <img src={pic} alt={'show.artist'} className={styles.picture} />
              <div className={styles.details}>
                <span className={styles.artist}>{order.showId.artist}</span>
                <div className={styles.locationCont}>
                  <IoLocationSharp />
                  <span>{order.showId.location}</span>
                </div>
                <div className={styles.dateCont}>
                  <FaRegCalendarCheck />
                  <span>{partDate}</span>
                </div>
              </div>
            </div>
            <OrderSummary finalPrice={order.finalPrice} price={price} amount={order.amountOfTickets} />
          </div>

          <div className={styles.bodyRight}>
            <h2>{order.showId.title}</h2>
            <form onSubmit={handleSubmit} className={styles.priceTicket}>
              <label className={styles.inputLabel}>
                Full name*
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.inputType}
                  placeholder="Full name"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Phone number*
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={styles.inputType}
                  placeholder="Phone number"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Email*
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputType}
                  placeholder="Email"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Birth date*
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className={`${styles.inputType} ${styles.dateInput}`}
                  required
                />
              </label>
              <div className={styles.genderContainer}>
                <label className={styles.inputLabel}>Gender*</label>
                <div className={styles.gender}>
                  <div className={styles.genderOption}>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className={styles.genderOption}>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className={styles.genderOption}>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      checked={formData.gender === 'other'}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
              <div className={styles.buyTicketContainer}>
                <button type="submit" className={styles.buyTicket}>
                  PURCHASE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
