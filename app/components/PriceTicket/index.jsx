import React from 'react'
import styles from './style.module.scss'
import GetTicket from '@/app/components/GetTicket'
export default function index({ title, subTitel, price }) {
   console.log({ title, subTitel, price });
   return (
      <div className={styles.priceTicket}>
         <div className={styles.titels} >
            <span className={styles.titel} >{title}</span>
            <span className={styles.subTitel}>{subTitel}</span>
         </div>

         <div className={styles.titelss} >
         <span className={styles.price}>{price}</span>
         <GetTicket/>
         </div>

      </div>
   )
}
