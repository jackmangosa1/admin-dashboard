import React from 'react'
import styles from "../styles/Sidebar.module.css"
import { UilCreateDashboard, UilUser, UilStore, UilCreditCard, UilTruck, UilAnalytics, UilBell, UilServer, UilShieldCheck, UilSetting, UilUserCircle, UilSignout } from '@iconscout/react-unicons'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>Logo</span>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.center}>
      <p className={styles.title}>MAIN</p>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <UilCreateDashboard />
                <span>Dashboard</span>
            </li>
            <li className={styles.listItem}>
                <UilUser/>
                <span>Users</span>
            </li>
            <li className={styles.listItem}>
                <UilStore/>
                <span>Products</span>
            </li>
            <li className={styles.listItem}>
                <UilCreditCard/>
                <span>Orders</span>
            </li>
            <p className={styles.title}>LIST</p>
            <li className={styles.listItem}> 
                <UilTruck/>
                <span>Delivery</span>
            </li>
            <p className={styles.title}>USEFUL</p>
            <li className={styles.listItem}>
                <UilAnalytics/>
                <span>Stats</span>
            </li>
            <li className={styles.listItem}>
                <UilBell/>
                <span>Notifications</span>
            </li>
            <p className={styles.title}>SERVIES</p>
            <li className={styles.listItem}>
                <UilServer/>
                <span>System Health</span>
            </li>
            <li className={styles.listItem}>
                <UilShieldCheck/>
                <span>Logs</span>
            </li>
            <li className={styles.listItem}>
              <UilSetting/>
                <span>Settings</span>
            </li>
            <p className={styles.title}>USER</p>
            <li className={styles.listItem}>
                <UilUserCircle/>
                <span>Profile</span>
            </li>
            <li className={styles.listItem}>
                <UilSignout/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div>
      </div>
    </div>
  )
}

export default Sidebar
