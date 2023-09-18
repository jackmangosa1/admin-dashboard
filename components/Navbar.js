import React from 'react'
import styles from "../styles/Navbar.module.css"
import { UilSearch,  UilGlobe, UilMoon, UilExpandArrowsAlt, UilBell, UilCommentAlt, UilListUl } from '@iconscout/react-unicons'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.search}>
          <input type='text' placeholder='Search...'/>
          <UilSearch size="18"/>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <UilGlobe/>
            Language
          </div>
          <div className={styles.item}>
            <UilMoon/>
          </div>
          <div className={styles.item}>
            <UilExpandArrowsAlt/>
          </div>
          <div className={styles.item}>
            <UilBell/>
            <div className={styles.counter}>5</div>
          </div>
          <div className={styles.item}>
            <UilCommentAlt/>
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <UilListUl/>
          </div>
          <div className={styles.item}>
            <Image src="/avatar.jpg" height={33} width={33} alt="profile" className={styles.avatar}/>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Navbar
