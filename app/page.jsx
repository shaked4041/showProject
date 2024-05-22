import { connectToMongo } from '@/server/connectToMongo'
import { getAllShows } from '@/server/events/show.service';
import styles from './page.module.scss'
import Link from 'next/link'

export default async function Home() {

  await connectToMongo()
  
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



      
      // const shows = [
        //   {
          //     "artist": "Taylor Swift",
      //     "category": "Music",
      //     "location": "Madison Square Garden, NY",
      //     "price_per_ticket": "$150",
      //     "production": "Live Nation",
      //     "date": "2024-06-15",
      //     "amount_of_tickets": 20000,
      //     "picture_of_artist": "https://example.com/taylor_swift.jpg",
      //     "title": "Taylor Swift - The Eras Tour",
      //     "description": "Join Taylor Swift on her sensational 'The Eras Tour' as she performs hits from all her albums."
      //   },
      //   {
      //     "artist": "Chris Rock",
      //     "category": "Comedy",
      //     "location": "Beacon Theatre, NY",
      //     "price_per_ticket": "$80",
      //     "production": "Comedy Central",
      //     "date": "2024-07-20",
      //     "amount_of_tickets": 1500,
      //     "picture_of_artist": "https://example.com/chris_rock.jpg",
      //     "title": "Chris Rock - Live",
      //     "description": "Don't miss Chris Rock's hilarious stand-up comedy performance live at the Beacon Theatre."
      //   },
      //   {
      //     "artist": "Beyoncé",
      //     "category": "Music",
      //     "location": "Staples Center, LA",
      //     "price_per_ticket": "$200",
      //     "production": "Parkwood Entertainment",
      //     "date": "2024-08-05",
      //     "amount_of_tickets": 18000,
      //     "picture_of_artist": "https://example.com/beyonce.jpg",
      //     "title": "Beyoncé - Renaissance Tour",
      //     "description": "Experience the magic of Beyoncé's 'Renaissance Tour' with breathtaking performances and visuals."
      //   },
      //   {
      //     "artist": "Hamilton",
      //     "category": "Theater",
      //     "location": "Richard Rodgers Theatre, NY",
      //     "price_per_ticket": "$120",
      //     "production": "Lin-Manuel Miranda",
      //     "date": "2024-09-10",
      //     "amount_of_tickets": 1400,
      //     "picture_of_artist": "https://example.com/hamilton.jpg",
      //     "title": "Hamilton",
      //     "description": "Watch the critically acclaimed musical 'Hamilton' live on Broadway, depicting the life of Alexander Hamilton."
      //   },
      //   {
      //     "artist": "The Weeknd",
      //     "category": "Music",
      //     "location": "Rogers Centre, Toronto",
      //     "price_per_ticket": "$130",
      //     "production": "XO Records",
      //     "date": "2024-06-22",
      //     "amount_of_tickets": 50000,
      //     "picture_of_artist": "https://example.com/the_weeknd.jpg",
      //     "title": "The Weeknd - After Hours Tour",
      //     "description": "Join The Weeknd on his 'After Hours Tour' featuring songs from his latest album."
      //   },
      //   {
      //     "artist": "Cirque du Soleil",
      //     "category": "Circus",
      //     "location": "T-Mobile Arena, Las Vegas",
      //     "price_per_ticket": "$95",
      //     "production": "Cirque du Soleil",
      //     "date": "2024-07-15",
      //     "amount_of_tickets": 17000,
      //     "picture_of_artist": "https://example.com/cirque_du_soleil.jpg",
      //     "title": "Cirque du Soleil - O",
      //     "description": "Experience the wonder and amazement of 'O' by Cirque du Soleil, a water-themed circus performance."
      //   },
      //   {
      //     "artist": "Billie Eilish",
      //     "category": "Music",
      //     "location": "O2 Arena, London",
      //     "price_per_ticket": "$110",
      //     "production": "Darkroom/Interscope",
      //     "date": "2024-08-30",
      //     "amount_of_tickets": 20000,
      //     "picture_of_artist": "https://example.com/billie_eilish.jpg",
      //     "title": "Billie Eilish - Happier Than Ever Tour",
      //     "description": "Join Billie Eilish on her 'Happier Than Ever Tour' with performances of her latest hits."
      //   },
      //   {
      //     "artist": "Dave Chappelle",
      //     "category": "Comedy",
      //     "location": "Hollywood Bowl, LA",
      //     "price_per_ticket": "$100",
      //     "production": "Netflix",
      //     "date": "2024-09-20",
      //     "amount_of_tickets": 17000,
      //     "picture_of_artist": "https://example.com/dave_chappelle.jpg",
      //     "title": "Dave Chappelle - Stand-Up Special",
      //     "description": "Catch Dave Chappelle's thought-provoking and hilarious stand-up special live at the Hollywood Bowl."
      //   },
      //   {
      //     "artist": "Adele",
      //     "category": "Music",
      //     "location": "Wembley Stadium, London",
      //     "price_per_ticket": "$180",
      //     "production": "XL Recordings",
      //     "date": "2024-06-28",
      //     "amount_of_tickets": 90000,
      //     "picture_of_artist": "https://example.com/adele.jpg",
      //     "title": "Adele - 30 Tour",
      //     "description": "Enjoy Adele's soul-stirring performances as she tours in support of her album '30'."
      //   },
      //   {
      //     "artist": "Elton John",
      //     "category": "Music",
      //     "location": "Dodger Stadium, LA",
      //     "price_per_ticket": "$170",
      //     "production": "Rocket Entertainment",
      //     "date": "2024-07-05",
      //     "amount_of_tickets": 56000,
      //     "picture_of_artist": "https://example.com/elton_john.jpg",
      //     "title": "Elton John - Farewell Yellow Brick Road",
      //     "description": "Join Elton John on his farewell tour, a celebration of his illustrious career in music."
      //   },
      //   {
      //     "artist": "Mamma Mia!",
      //     "category": "Theater",
      //     "location": "Novello Theatre, London",
      //     "price_per_ticket": "$85",
      //     "production": "Littlestar",
      //     "date": "2024-08-12",
      //     "amount_of_tickets": 1200,
      //     "picture_of_artist": "https://example.com/mamma_mia.jpg",
      //     "title": "Mamma Mia! The Musical",
      //     "description": "Enjoy the timeless musical 'Mamma Mia!' featuring the songs of ABBA live at the Novello Theatre."
      //   },
      //   {
      //     "artist": "Ed Sheeran",
      //     "category": "Music",
      //     "location": "Croke Park, Dublin",
      //     "price_per_ticket": "$95",
      //     "production": "Atlantic Records",
      //     "date": "2024-09-03",
      //     "amount_of_tickets": 82000,
      //     "picture_of_artist": "https://example.com/ed_sheeran.jpg",
      //     "title": "Ed Sheeran - Mathematics Tour",
      //     "description": "Catch Ed Sheeran live on his 'Mathematics Tour', performing hits from his latest album."
      //   },
      //   {
      //     "artist": "U2",
      //     "category": "Music",
      //     "location": "MetLife Stadium, NJ",
      //     "price_per_ticket": "$160",
      //     "production": "Live Nation",
      //     "date": "2024-06-25",
      //     "amount_of_tickets": 82000,
      //     "picture_of_artist": "https://example.com/u2.jpg",
      //     "title": "U2 - The Joshua Tree Tour",
      //     "description": "Join U2 for a spectacular performance celebrating the anniversary of their iconic album 'The Joshua Tree'."
      //   },
      //   {
      //     "artist": "Wicked",
      //     "category": "Theater",
      //     "location": "Gershwin Theatre, NY",
      //     "price_per_ticket": "$100",
      //     "production": "Universal Stage Productions",
      //     "date": "2024-07-22",
      //     "amount_of_tickets": 1500,
      //     "picture_of_artist": "https://example.com/wicked.jpg",
      //     "title": "Wicked the Musical",
      //     "description": "See the untold story of the witches of Oz in the award-winning musical 'Wicked'."
      //   },
      //   {
      //     "artist": "Foo Fighters",
      //     "category": "Music",
      //     "location": "Fenway Park, Boston",
      //     "price_per_ticket": "$120",
      //     "production": "RCA Records",
      //     "date": "2024-08-18",
      //     "amount_of_tickets": 37000,
      //     "picture_of_artist": "https://example.com/foo_fighters.jpg",
      //     "title": "Foo Fighters - Stadium Tour",
      //     "description": "Rock out with the Foo Fighters as they perform live at Fenway Park on their stadium tour."
      //   },
      //   {
      //     "artist": "Harry Styles",
      //     "category": "Music",
      //     "location": "AccorHotels Arena, Paris",
      //     "price_per_ticket": "$140",
      //     "production": "Columbia Records",
      //     "date": "2024-09-15",
      //     "amount_of_tickets": 20000,
      //     "picture_of_artist": "https://example.com/harry_styles.jpg",
      //     "title": "Harry Styles - Love on Tour",
      //     "description": "Experience Harry Styles live on his 'Love on Tour', featuring tracks from his latest album."
      //   },
      //   {
      //     "artist": "Metallica",
      //     "category": "Music",
      //     "location": "Madison Square Garden, NY",
      //     "price_per_ticket": "$150",
      //     "production": "Blackened Recordings",
      //     "date": "2024-07-10",
      //     "amount_of_tickets": 20000,
      //     "picture_of_artist": "https://example.com/metallica.jpg",
      //     "title": "Metallica - WorldWired Tour",
      //     "description": "Join Metallica for a night of heavy metal as they continue their 'WorldWired Tour'."
      //   },
      //   {
      //     "artist": "Les Misérables",
      //     "category": "Theater",
      //     "location": "Queen's Theatre, London",
      //     "price_per_ticket": "$75",
      //     "production": "Cameron Mackintosh",
      //     "date": "2024-08-05",
      //     "amount_of_tickets": 1200,
      //     "picture_of_artist": "https://example.com/les_miserables.jpg",
      //     "title": "Les Misérables",
      //     "description": "Witness the epic tale of 'Les Misérables', a musical adaptation of Victor Hugo's classic novel."
      //   },
      //   {
      //     "artist": "Justin Bieber",
      //     "category": "Music",
      //     "location": "Scotiabank Arena, Toronto",
      //     "price_per_ticket": "$110",
      //     "production": "Def Jam Recordings",
      //     "date": "2024-09-02",
      //     "amount_of_tickets": 19000,
      //     "picture_of_artist": "https://example.com/justin_bieber.jpg",
      //     "title": "Justin Bieber - Justice World Tour",
      //     "description": "Join Justin Bieber on his 'Justice World Tour', performing songs from his latest album."
      //   },
      //   {
      //     "artist": "Katy Perry",
      //     "category": "Music",
      //     "location": "MGM Grand Garden Arena, Las Vegas",
      //     "price_per_ticket": "$130",
      //     "production": "Capitol Records",
      //     "date": "2024-08-25",
      //     "amount_of_tickets": 17000,
      //     "picture_of_artist": "https://example.com/katy_perry.jpg",
      //     "title": "Katy Perry - Play",
      //     "description": "Experience Katy Perry's vibrant and energetic performances live on her 'Play' tour."
      //   },
      //   {
      //     "artist": "The Phantom of the Opera",
      //     "category": "Theater",
      //     "location": "Majestic Theatre, NY",
      //     "price_per_ticket": "$110",
      //     "production": "Cameron Mackintosh",
      //     "date": "2024-07-28",
      //     "amount_of_tickets": 1500,
      //     "picture_of_artist": "https://example.com/phantom_of_the_opera.jpg",
      //     "title": "The Phantom of the Opera",
      //     "description": "Watch the timeless musical 'The Phantom of the Opera', a tale of love and obsession in Paris."
      //   }
      // ]
    
      // const a =await ShowModel.insertMany(shows)
      // console.log(a);
