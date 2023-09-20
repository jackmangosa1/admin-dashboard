import React, { PureComponent } from 'react'
import styles from "../styles/Chart.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect, title}) => {
  const data = [
  {name: "January", total: 1200},
  {name: "February", total: 2100},
  {name: "March", total: 800},
  {name: "April", total: 1600},
  {name: "May", total: 900},
  {name: "June", total: 1700},
];

  return (
    <div className={styles.chart}>
      <div className={styles.title}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className={styles.chartGrid}/>
          <XAxis dataKey="name" stoke="gray"/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
