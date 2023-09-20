import React from 'react'
import styles from "../styles/DataTable.module.css"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatableSource';



const DataTable = () => {
  const actionColums = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () =>{
        return (
          <div className={styles.cellActions}>
            <div className={styles.viewButton}>View</div>
            <div className={styles.deleteButton}>Delete</div>
          </div>
        )
      }
    },
    
  ]
  return (
    <div className={styles.DataTable}>
         <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColums)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
