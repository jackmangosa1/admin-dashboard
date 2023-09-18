import React from 'react'
import styles from "../styles/Widget.module.css"
import { UilAngleUp, UilUser, UilShoppingCart ,UilDollarSignAlt, UilMoneyInsert} from '@iconscout/react-unicons'

const Widget = ({ type }) => {

  const amount = 100;
  const diff = 20;
  let data;
  switch(type){
    case "user": 
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: <UilUser className={styles.icon}
        size="30"
        style={{
          color: "crimson",
          backgroundColor: "rgba(225, 0, 0, 0.2)"
        }}
        />
      }
      break;
      case "order": 
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "see all orders",
        icon: <UilShoppingCart className={styles.icon}
        size="30"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)"
        }}
        />
      }
      break;
      case "earning": 
      data = {
        title: "EARNING",
        isMoney: true,
        link: "see net earning",
        icon: <UilMoneyInsert className={styles.icon}
        size="30"
        style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)"
        }}
        />
      }
      break;
      case "balance": 
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        icon: <UilDollarSignAlt className={styles.icon}
        size="30"
        style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)"
        }}
        />
      }
    default: 
      break;
  }
  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.counter}>{data.isMoney && "$"} {amount}</div>
        <div className={styles.link}>{data.link}</div>
      </div>

      <div className={styles.right}>
        <div className={styles.percentage}>
            <UilAngleUp/>
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
