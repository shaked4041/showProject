import styles from './style.module.scss'
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation'


export default function index() {

  const router = useRouter()

  const handleSearch = (e) =>{
    e.preventDefault()
    router.push('/result?search=' + e.target.search.value)
  }


  return (
    <div className={styles.search}>
      <form onSubmit={handleSearch}>
         <input className={styles.inputSearch} type="text" name="search" placeholder="search"/>
         <button type='submit' className={styles.searchButton}><IoSearchSharp className={styles.searchIcon}/></button>
      </form>
    </div>
  )
}
