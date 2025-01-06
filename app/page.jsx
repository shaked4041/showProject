import { connectToMongo } from '@/server/connectToMongo'
import { getAllShows } from '@/server/shows/show.service';
import styles from './page.module.scss'
import Link from 'next/link'
import  ShowModel  from '@/server/shows/show.model';

export default async function Home() {

  await connectToMongo()

  async function createShow({
    artist,
    artistId,
    creatorName,
    creatorId,
    category,
    location,
    price_per_ticket,
    date,
    amount_of_tickets,
    picture_of_artist,
    title,
    description
  }) {
    try {

      const newShow = new ShowModel({
        artist,
        artistId,
        creatorName,
        creatorId,
        category,
        location,
        price_per_ticket,
        date,
        amount_of_tickets,
        picture_of_artist,
        title,
        description
      });

      const savedShow = await newShow.save();
      console.log('Show created successfully:', savedShow);
      return savedShow;
    } catch (error) {
      console.error('Error creating show:', error);
      throw error;
    }
  }

  const shows = await getAllShows()
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

