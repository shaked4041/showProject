import styles from './style.module.scss'
import NavLink from '../NavLink'
import { categoriesList } from '@/utils/category'
import { IoMdClose } from 'react-icons/io'


export default function index({ isOpen, setIsOpen }) {

  const handleColse = () => {
setIsOpen(!isOpen)
  }
  // ${isOpen ? styles.open : ''}
  return (
    <div className={`${styles.navMain}`}>
      <IoMdClose onClick={handleColse} />

      <div className={styles.navContainer}>
        <NavLink href='/'>Home</NavLink>
        {categoriesList.map((category, index) => (
          <li key={index}>
            <NavLink href={`/category/${category}`}>
              <div>{category}</div>
            </NavLink>
          </li>
        ))}
      </div>
    </div>

  )
}
