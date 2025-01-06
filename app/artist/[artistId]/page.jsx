import { connectToMongo } from '@/server/connectToMongo'
import { getShowsByArtist } from '@/server/shows/show.service'
import styles from './style.module.scss'
import Link from 'next/link'
import { getArtistById } from '@/server/artists/artist.service'

export default async function page({ params }) {

  await connectToMongo()
  const artistId = params.artistId
  const artist = await getArtistById(artistId)
  console.log(artist);
  const shows = await getShowsByArtist(artistId)

  return (
    <div className={styles.homeContainer}>
      <div className={styles.artistName}>{artist.fullName}</div>
      <div className={styles.bodyContainer}>
        <div className={styles.left}>
          <div className={styles.about}>About</div>
          <div>{artist.description}</div>
        </div>
        <div className={styles.right} ></div>
      </div>
      <div>{artist.shows.length}</div>
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
