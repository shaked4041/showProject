"use client";

import { useStoreCount } from '@/utils/store';
import styles from './style.module.scss';
import React from 'react';

export default function ContinueButton({ showId, price }) {
  const count = useStoreCount(state => state.count);

  const handlePurchase = async () => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          showId,
          count,
          price
        }),
      });

      const result = await response.json();

      if (result.success) {
        window.location.href = `/order/${result.order._id}`; 
      } else {
        console.error('Order creation failed:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {count > 0 && (
        <div className={styles.buyTicketContainer} onClick={handlePurchase}>
          <div className={styles.buyTicket}>
            <span className={styles.continue}>Continue</span>
            <div className={styles.textTicket}>
              <div>
                {count === 1 ? (
                  `${count} ticket`
                ) : `${count} tickets`}
              </div>
              <div>
                {price * count}$
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
