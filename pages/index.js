import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styles from "../styles/Home.module.css"
import Widget from '../components/Widget'
import FeaturedChart from '../components/Featured'
import Chart from '../components/Chart'
import Table from '../components/Table'




export default function Home() {
  return (
    <>
      <Head>
        <title>Admin dashboard</title>
        <meta name="description" content="This is an admin dashboard for managing websites"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <Sidebar/>
        <div className={styles.homeContainer}>
          <Navbar/>
          <div className={styles.widgets}>
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>

          <div className={styles.charts}>
            <FeaturedChart/>
            <Chart aspect={2/1} title="Last 6 months revenue"/>
          </div>

          <div className={styles.listContainer}>
            <div className={styles.listTitle}>Latest Transactions</div>
            <Table/>
          </div>
         
          

          
        </div>
        
      </div>
    </>
  )
}
