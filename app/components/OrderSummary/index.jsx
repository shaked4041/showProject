"use client"
import { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import styles from './style.module.scss'

export default function OrderSummary({  finalPrice: propFinalPrice, price, amount }) {

    const [isOpen, setIsOpen] = useState(false)
    const [isInputEnabled, setIsInputEnabled] = useState(false)
    const inputRef = useRef(null)
    const [iaApplied, setIsApplied] = useState(false)
    const [currentFinalPrice, setFinalPrice] = useState(propFinalPrice);

    let discount = 0.1; 
    const handleButtonClick = () => {
        setFinalPrice(currentFinalPrice * discount);
    }

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.topContainer}>
                <div className={styles.summary}>Order Summary</div>
                <div className={styles.topLine}></div>
                <div className={styles.arrow} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>
            <div className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}>
                <div className={`${styles.spansContainer} ${styles.biggerSpans} ${styles.topSpan}`}><span>{amount} * GA - Tier 1</span><span>${price}</span></div>
                <div className={`${styles.spansContainer} ${styles.biggerSpans}`}><span>total fees and taxes:</span><span>$19.00</span></div>
                <div className={`${styles.spansContainer} ${styles.smallerSpans}`}><span>Purchase fee</span><span>$9.00</span></div>
                <div className={`${styles.spansContainer} ${styles.smallerSpans}`}><span>Service fee</span><span>$10.00</span></div>
            </div>
            <div className={styles.totalContainer}><span>TOTAL:</span><span>${currentFinalPrice}</span></div>
            <div className={styles.cuponContainer}>
                <input
                    onClick={() => focus()}
                    ref={inputRef}
                    placeholder="Coupon code"
                    className={styles.cuponInput}
                />
                <button onClick={handleButtonClick} className={styles.applyButton}>
                    APPLY
                </button>
            </div>
        </div>
    )
}
