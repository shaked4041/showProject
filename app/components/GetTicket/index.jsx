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
        <div>
            <button onClick={handlePlus}>
                +
            </button>
            <span>{amnt}</span>
            <button onClick={handleMinus}>
                -
            </button>
        </div>
    )
}
