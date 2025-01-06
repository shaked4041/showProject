import styles from './style.module.scss'
import { createNewArtist } from '../../server/actions/artist.action'
import { connectToMongo } from '@/server/connectToMongo'

connectToMongo()

export default function page() {
  return (
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <h1>Add New Artist</h1>
          <form action={createNewArtist}>

            <label className={styles.inputLabel}>
              Full Name :
              <input className={styles.inputText} name='fullName' type='text' placeholder='fullname..' />
            </label>
            <label className={styles.inputLabel}>
              Image :
              <input className={styles.inputText} name='image' type='text' placeholder='image link..' />
            </label>
            <div className={styles.desCont}>
              <label className={styles.inputLabelTextarea}>
                Description :
              </label>
              <textarea rows="4" cols="50" name='description' className={styles.inputTextarea} type='text' placeholder='description the artist' />
            </div>
            <button className={styles.createButton} type='submit'>Submit</button>
          </form>
        </div>
      </div>
  )
}
