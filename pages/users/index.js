import styles from "../../styles/List.module.css"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"

import React from 'react'
import DataTable from "../../components/DataTable"

const list = () => {
  return (
    <div className={styles.list}>
        <Sidebar/>
      <div className={styles.listContainer}>
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default list
