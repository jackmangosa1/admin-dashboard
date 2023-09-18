import React from 'react'
import styles from "../styles/Featured.module.css"
import { UilEllipsisV, UilAngleUp, UilAngleDown } from '@iconscout/react-unicons'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const FeaturedChart = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h3 className={styles.title}>Total revenu</h3>
        <UilEllipsisV/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className={styles.chartTitle}>Total sales made today</p>
        <p className={styles.amount}>$ 420</p>
        <p className={styles.description}>Previous transactions processing. Last payment may be included </p>

        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={styles.itemResult}>
              <UilAngleDown/>
              <div className={styles.resultAmount}>$12k</div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <UilAngleUp/>
              <div className={styles.resultAmount}>$12k</div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={`${styles.itemResult} ${styles.negative}`}>
              <UilAngleDown/>
              <div className={styles.resultAmount}>$12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart
