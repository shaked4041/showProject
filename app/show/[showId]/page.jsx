import { getShowById } from '@/server/events/show.service'
import styles from './style.module.scss'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import moment from 'moment';
import { LuDot } from "react-icons/lu";


export default async function page({ params }) {
  const showId = params.showId
  const show = await getShowById(showId)
  const pic = show.picture_of_artist
  const date = show.date
  const formatedFullDate = moment(date).format('MMM D, YYYY h:mm A');
  const partDate = moment(date).format('MMM D, YYYY');

  return (
    <div className={styles.showContainer}>
      <div className={styles.innerCont}>
        <div >
          <img src={pic} className={styles.picture} />
        </div>
        <div className={styles.info}>
          <div className={styles.innerInfo}>

            <h1>{show.title}</h1>

            <div className={styles.detailedInfo}>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quia nisi laboriosam tempora saepe, eligendi cupiditate praesentium ullam vitae debitis numquam? Excepturi eum consectetur quod, soluta minus natus quasi dignissimos unde cupiditate non quas vel necessitatibus est. Omnis, eos autem.</div>

              <span className={styles.des}>
                {show.description}
              </span>

              <div className={styles.artistCont}>
                <span>{show.production}</span>
                <LuDot />
                <Link href={`/artist/${show.artist}`} className={styles.artistName}>
                  <span >{show.artist}</span>
                </Link>
              </div>

              <div className={styles.locationCont}>
                <IoLocationSharp />
                <span>{show.location}</span>
              </div>

              <div className={styles.dateCont}>
                <FaRegCalendarCheck />
                <span>{formatedFullDate}</span>
              </div>

            <ul className={styles.extraInfo}>
              <li>
                {partDate}
              </li>
              <li>
                {show.production}
              </li>
            </ul>

            <div className={styles.whatsupDits}>
              <div>
                Table Reservations:
              </div>
              WhatsApp:
              <div>
                +1 (718) 614-2563
              </div>
              Email: info@tcepresents.com
            </div>

            </div>
          </div>
          <Link className={styles.getTicket} href={`/show/${show._id}/purchase`}>
            ORDER TICKETS
          </Link>
        </div>
      </div>
    </div>
  )
}
