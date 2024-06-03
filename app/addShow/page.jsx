import { ArtistModel } from '@/server/artists/artist.model';
import { connectToMongo } from '@/server/connectToMongo';
import React from 'react'
import { getArtists } from '@/server/artists/artist.service';
import styles from './style.module.scss'
import { createNewShow } from '@/server/actions/show.action';
import Link from 'next/link'

export default async function page() {

  connectToMongo()


  async function fetchArtists() {
    let artists = await getArtists()
    return artists.map(artist => ({
      id: artist._id.toString(),
      fullName: artist.fullName
    }))
  }

  const artists = await fetchArtists()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h1>Add New Show</h1>
        <form action={createNewShow}>
          <label>
            choose artist :
            <select
              id='options'
              className={styles.artistOptions}
              defaultValue=''
              name='artist'
            >
              <option value='' disabled>
                choose
              </option>
              {artists.map((option, index) => (
                <option
                  className={styles.artistSingle}
                  key={index}
                  value={option.id}
                >
                  {option.fullName}
                </option>
              ))}
            </select>
          </label>
           <Link href={`/addNewArtist`} ><button className={styles.addArtistButton}>Create New Artist</button></Link>

          <label className={styles.inputLabel}>
            Category :
            <input className={styles.inputText} name='category' type='text' placeholder='Category..' />
          </label>
          <label className={styles.inputLabel}>
            Location :
            <input className={styles.inputText} name='location' type='text' placeholder='Location..' />
          </label>
          <label className={styles.inputLabel}>
            Price per ticket :
            <input className={styles.inputText} name='price_per_ticket' type='text' placeholder='Price per ticket' />
          </label>
          <label className={styles.inputLabel}>
            Date :
            <input className={styles.inputText} name='date' type='text' placeholder='Date..' />
          </label>
          <label className={styles.inputLabel}>
            Title :
            <input className={styles.inputText} name='title' type='text' placeholder='Title..' />
          </label>
          <div className={styles.desCont}>
            <label className={styles.inputLabelTextarea}>
              Description :
            </label>
            <textarea rows="4" cols="50" name='description' className={styles.inputTextarea} type='text' placeholder='Description..' />
          </div>
          <button className={styles.createButton} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
