import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import {url} from "../../../config/url.js"


 


function Graph() {

  const [taskList,setTaskList]=useState([])
  
useEffect(()=>{
  fetch(url+"api/user/taskList")
  .then(res=>res.json())
  .then(data=>setTaskList(data.data))
},[])



  return (
    <>
     <NavBarAfterLogin/>
      <h1 className="chart-heading">Task chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={taskList} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" interval={'preserveStartEnd'} tickFormatter={(value) => value + ""} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />

          <Line type="monotone" dataKey="incomplete" stroke="red" activeDot={{ r: 8 }} />

          <Line type="monotone" dataKey="complete" stroke="green" activeDot={{ r: 8 }} />

        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Graph;
