"use client";

import { useRef, useState } from 'react';
import styles from './style.module.scss';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function PickSBirthDate() {
    const [startDate, setStartDate] = useState(null); 
    const dateTimeRef = useRef(null);

    const handleDateChange = (date) => {
        setStartDate(date);
        if (dateTimeRef.current) {
            dateTimeRef.current.value = date ? date.toISOString() : '';
        }
    };

    return (
        <div className={styles.dateContainer}>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                className={styles.datePickerContainer}
                placeholderText="Select a date and time"
            />
            <input type="hidden" name="dateTime" ref={dateTimeRef} value={startDate ? startDate.toISOString() : ''} />
        </div>
    );
}
