"use client"

import styles from './style.module.scss'
import { FaUser } from "react-icons/fa";
import Search from '@/app/components/Search'
import Nav from '../Nav';
import NavLink from '../NavLink';
import NavMobile from '../NavMobile/index';
import { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleNav = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={`${styles.headerContainer} ${isOpen ? styles.openContainer : ''}`}>
            <CgDetailsMore className={styles.navIcon} onClick={handleNav} />

            <div className={`${styles.navMobile} ${isOpen ? styles.open : ''}`}>
                <NavMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>

            <NavLink href='/'><div className={styles.titleHeader}>TicketsForU</div></NavLink>
            <div className={styles.nav}>
                <Nav />
            </div>
            <Search className={styles.searchComp} />
            <div className={styles.signIn}>
                <FaUser className={styles.icon} />
                <span className={styles.signText}>Sign In/Register</span>
            </div>
        </div>
    )
}
