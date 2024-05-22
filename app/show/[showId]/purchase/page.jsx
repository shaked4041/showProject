import React from 'react'
import { getShowById } from '@/server/events/show.service'
import styles from './style.module.scss'
import Link from 'next/link'
import GetTicket from '@/app/components/GetTicket'
import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default async function index({ params }) {
  const showId = params.showId
  const show = await getShowById(showId)
  const pic = show.picture_of_artist
  return (
    <div className={styles.purchContainer}>
      <div className={styles.bodyCont}>
        <div className={styles.pageHeader}>
          <Link href={`/show/${show._id}`} className={styles.headerLeft}>
            <IoChevronBackOutline className={styles.backIcon} />
            <span className={styles.headerTitle}>Select tickets</span>
          </Link>
          <Link href={`/`} className={styles.closeIcon}>
            <IoMdClose />
          </Link>
        </div>


        <div className={styles.pageBody}>
          <div className={styles.bodyLeft}>
            <h1 className={styles.artist}>{show.artist}</h1>
          </div>
          <div className={styles.bodyRight}>
            <h2>
              {show.title}
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}
