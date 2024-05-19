"use client"
import styles from './style.module.scss'
import { FaUser } from "react-icons/fa";
import Search from '@/app/components/Search'

export default function index() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.titleHeader}>SHOWS FOR U</h1>
            {/* <div > */}
                <Search className={styles.searchComp}/>
            {/* </div> */}
            <div className={styles.signIn}>
                <FaUser className={styles.icon} />
                <span>Sign In/Register</span>
            </div>




        </div>
    )
}
