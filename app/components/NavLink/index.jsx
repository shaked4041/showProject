"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './style.module.scss'

const NavLink = ({ href, children }) => {
   const path = usePathname()
   const isActive = path === href;
   return (
      <Link className={`${styles.navLink} ${isActive ? styles.active : ''}`} href={href} >
         {children}
      </Link>
   )
}

export default NavLink