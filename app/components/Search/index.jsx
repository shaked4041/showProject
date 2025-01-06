"use client"
import styles from './style.module.scss'
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import { IoMdClose } from 'react-icons/io';


export default function index() {

  const router = useRouter()
  const handleSearch = (e) => {
    e.preventDefault()
    router.push('/result?search=' + e.target.search.value)
  }


  return (
    <>
      <div className={`${styles.search}`}>
        <form onSubmit={handleSearch}>
          <div className={styles.saerchInnerCont}>
            <div className={styles.searchHeader}>
                <IoSearchSharp className={styles.searchIconNotMobile} />
              <input className={styles.inputSearch} id='s' type="text" name="search" placeholder="search" />
              <label type="button" className={styles.searchButton}>
                <IoSearchSharp className={styles.searchIcon} />
                <IoMdClose className={styles.closeButton} />
                <input type="checkbox" id='search' hidden />
              </label>
            </div>
          </div>
        </form>
        <div className={styles.searchBody}>
        </div>
      </div>
    </>
  )
}
