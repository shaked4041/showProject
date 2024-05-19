"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './style.module.scss'

const NavLink = ({ href, children }) => {
   const path = usePathname()

   return (
      <Link href={href} style={{ color: path === href ? 'red' : 'white' }}>
         {children}
      </Link>
   )
}

export default NavLink