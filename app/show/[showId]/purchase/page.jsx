import React from 'react'
import { getShowById } from '@/server/events/show.service'
import styles from './style.module.scss'
import Link from 'next/link'
import GetTicket from '@/app/components/GetTicket'
import { IoChevronBackOutline, IoLocationSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegCalendarCheck } from 'react-icons/fa'
import moment from 'moment'

export default async function index({ params }) {
  const showId = params.showId
  const show = await getShowById(showId)
  const pic = show.picture_of_artist
  const date = show.date
  const formatedFullDate = moment(date).format('MMM D, YYYY h:mm A');
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
            <img src={pic} alt={show.artist} className={styles.picture} />
            <div className={styles.details}>
              <span>{show.title}</span>
              <span>{show.artist}</span>
              <div className={styles.locationCont}>
                <IoLocationSharp />
                <span>{show.location}</span>
              </div>

              <div className={styles.dateCont}>
                <FaRegCalendarCheck />
                <span>{formatedFullDate}</span>
              </div>
            </div>
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
