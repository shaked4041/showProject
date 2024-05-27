import { ArtistModel } from '@/server/artists/artist.model';
import { connectToMongo } from '@/server/connectToMongo';
import React from 'react'
import { getArtists } from '@/server/artists/artist.service';
import styles from './style.module.scss'

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
  // const handleeSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('submitted');
  // }

  return (
    <div className={styles.formContainer}>
      <h1>Add New Show</h1>
      <form >
        <label>
          choose artist : 
        <select  id='options' className={styles.artistOptions}>
          <option disabled selected value>choose</option>
          {artists.map((option, index) => {
            return <option className={styles.artistSingle} key={index} value={option}>{option.fullName}</option>
          })}
        </select>
          </label>

    
        <label className={styles.inputLabel}>
          Category :
          <input className={styles.inputText} type='text' placeholder='Category..' />
        </label>
        <label className={styles.inputLabel}>
          Location :
          <input className={styles.inputText} type='text' placeholder='Location..' />
        </label>
        <label className={styles.inputLabel}>
          Price per ticket :
          <input className={styles.inputText} type='text' placeholder='Price per ticket' />
        </label>
        <label className={styles.inputLabel}>
          Date :
          <input className={styles.inputText} type='text' placeholder='Date..' />
        </label>
        <label className={styles.inputLabel}>
          Title :
          <input className={styles.inputText} type='text' placeholder='Title..' />
        </label>
        <div className={styles.desCont}>
          <label className={styles.inputLabelTextarea}>
            Description :
          </label>
          <textarea rows="4" cols="50" className={styles.inputTextarea} type='text' placeholder='Description..' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
