import { categoriesList } from '@/utils/category'
import NavLink from '../NavLink'
import styles from './style.module.scss'

export default function index() {

  return (
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
  )
}
