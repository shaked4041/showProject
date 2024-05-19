"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import NavLink from '../NavLink/index'
import styles from './style.module.scss'

export default function Nav() {
  const path = usePathname()
  console.log(path);
  return (
    <div>
      <NavLink href='/'>Home</NavLink>
      {/* <NavLink href='/Stays'>Stays</NavLink>
      <NavLink href='/Experiences'>Experiences</NavLink> */}
    </div>
  )
}
