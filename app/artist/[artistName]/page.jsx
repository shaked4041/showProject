// import { connectToMongo } from '@/server/connectToMongo'
import { getShowsByArtist } from '@/server/events/show.service'
import styles from './style.module.scss'
import Link from 'next/link'

export default async function page({params}) {

  const artistName = params.artistName
  const shows = await getShowsByArtist(artistName)
// console.log(shows);
  // await connectToMongo()

  return (
    <div className={styles.homeContainer}>
    <div className={styles.home}>
      {shows.map(show => {
        return <li key={show._id}>
          <Link href={`/show/${show._id}`} className={styles.showCard}>
          <img className={styles.showImg} width={330} height={320} src={show.picture_of_artist} alt={show.title} />
           <h3>
            {show.title}
            </h3> 
          </Link>
        </li>
      })}
    </div>
      </div>
  )
}
