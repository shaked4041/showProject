"use client"
import { useState } from 'react'
import styles from './style.module.scss'

export default function index() {
    const [amnt, setAmnt] = useState(0)

    const handlePlus = () => {
        setAmnt(amnt + 1)
    }

    const handleMinus = () => {
        if (amnt > 0) {
            setAmnt(amnt - 1)
        }
    }
    return (
        <div className={styles.getTicket}>
            <button className={styles.btn} onClick={handlePlus} >
                +
            </button>
            <span className={styles.num}>{amnt}</span>
            <button className={styles.btn} onClick={handleMinus}>
                -
            </button>
        </div>
    )
}
