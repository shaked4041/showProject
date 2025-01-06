import styles from './style.module.scss'
import Link from 'next/link'
import { IoChevronBackOutline, IoLocationSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegCalendarCheck } from 'react-icons/fa'
import PriceTicket from '@/app/components/PriceTicket'
import { connectToMongo } from '@/server/connectToMongo';
import ContinueButton from '@/app/components/ContinueButton';
import moment from 'moment';
import { getFullShowById } from '@/server/shows/show.service';

export default async function page({ params }) {
  await connectToMongo()
  const showId = params.showId
  const show = await getFullShowById(showId)

  const serializedShow = {
    id: show._id.toString(),
    artist: show.artist.fullName,
    picture: show.picture_of_artist,
    location: show.location,
    date: show.date,
    title: show.title,
    price: show.price_per_ticket
  };
  

  const partDate = moment(serializedShow.date).format('MMM D, YYYY');
  const subTitel = "General admission entry into the event"
  
  return (
    <div className={styles.purchContainer}>
      <div className={styles.bodyCont}>

        <div className={styles.pageHeader}>
          <Link href={`/show/${serializedShow.id}`} className={styles.headerLeft}>
            <IoChevronBackOutline className={styles.backIcon} />
            <span className={styles.headerTitle}>Select tickets</span>
          </Link>
          <Link href={`/`} className={styles.closeIcon}>
            <IoMdClose />
          </Link>
        </div>

        <div className={styles.pageBody}>
          <div className={styles.bodyLeft}>
            <img src={serializedShow.picture} alt={'show.artist'} className={styles.picture} />
            <div className={styles.details}>
              <span className={styles.artist} >{serializedShow.artist}</span>
              <div className={styles.locationCont}>
                <IoLocationSharp />
                <span>{serializedShow.location}</span>
              </div>

              <div className={styles.dateCont}>
                <FaRegCalendarCheck />
                <span>{partDate}</span>
              </div>
            </div>
          </div>
          <div className={styles.bodyRight}>
            <h2>
              {serializedShow.title}
            </h2>
            <div className={styles.priceTicket}>
              <PriceTicket title={serializedShow.title} subTitel={subTitel} price={serializedShow.price} />
            </div>
            <ContinueButton showId={serializedShow.id} price={serializedShow.price}/>
          </div>
        </div>
      </div>
    </div>
  )
}
