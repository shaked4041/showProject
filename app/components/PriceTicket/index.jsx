"use client"
import React, { useState } from 'react'
import styles from './style.module.scss'
import { useStoreCount } from '@/utils/store'

export default function PriceTicket({ title, subTitel, price }) {
  
   const count = useStoreCount(state=> state.count)
   const increaseCount = useStoreCount(state=> state.increaseCount)
   const decreaseCount = useStoreCount(state=> state.decreaseCount)
   return (
      <div className={styles.priceTicket}>
         <div className={styles.titels} >
            <span className={styles.titel} >{title}</span>
            <span className={styles.subTitel}>{subTitel}</span>
         </div>

         <div className={styles.titelss} >
            <span className={styles.price}>{price}$</span>
            <div className={styles.getTicket}>
               <button className={styles.btn} onClick={increaseCount} >
                  +
               </button>
               <span className={styles.num}>{count}</span>
               <button className={styles.btn} onClick={decreaseCount}>
                  -
               </button>
            </div>
         </div>

      </div>
   )
}
