import { connectToMongo } from '@/server/connectToMongo'
import { getAllShows } from '@/server/shows/show.service';
import styles from './page.module.scss'
import Link from 'next/link'
import { UserModel } from '@/server/users/user.model';
import { createUser } from '@/server/users/user.service';
import { createArtist } from '@/server/artists/artist.service';
import { ArtistModel } from '@/server/artists/artist.model';
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

  // createShow({
  //   artist: 'Taylor Swift',
  //   artistId: '664e0c1b0e1d0ad12a33c7dc', // Example ObjectId
  //   creatorName: 'John Dow',
  //   creatorId: '664e09b1959c493a8d50894e', // Example ObjectId (admin user)
  //   category: 'Music',
  //   location: 'New York',
  //   price_per_ticket: '50',
  //   date: new Date('2024-06-01T19:00:00'),
  //   amount_of_tickets: 100,
  //   picture_of_artist: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png',
  //   title: 'Concert Title',
  //   description: 'Concert description'
  // });

  // const createArtists = async () => {
  //   try {
  //       const insertedArtists = await ArtistModel.insertMany(artists);
  //       console.log("Artists inserted:", insertedArtists);
  //   } catch (error) {
  //       console.error("Error inserting artists:", error);
  //   }
  // };
  // createArtists();


  // const createUser = async () =>{
  //   try {
  //     const user = await UserModel.create({
  //       name: 'shaked',
  //       email: 'shaked4041@gmail.com',
  //       password: '1234',
  //       type: 'admin'
  //     })
  //         //  console.log("ודקר ברקשאקג:", insertedArtists);

  //   } catch (error) {

  //   }
  // }

  // createUser()

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

