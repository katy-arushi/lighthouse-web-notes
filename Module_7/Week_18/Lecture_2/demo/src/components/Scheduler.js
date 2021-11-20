import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import useData from '../hooks/useData'

// const api = "http://localhost:8001/api"

const Scheduler = () => {

  const {state, setstate} = useData()
    // const [state, setState] = useState({
    //     day: "Monday",
    //     days: [],
    //     appointments: {},
    //     interviewers:{}
    // });

    // useEffect(()=>{
    //     Promise.all([
    //       axios.get(`${api}/days`),
    //       axios.get(`${api}/appointments`),
    //       axios.get(`${api}/interviewers`),
    //     ])
    //     .then((res)=>{
    //       console.log(`res:${JSON.stringify(res[1].data)}`)
    //       setState(prev => ({...prev, days:res[0].data, appointments:res[1].data, interviewers:res[2].data}))
    //     })
    //   },[])

    return(
        <>
        <ul>
            {state.days.map(d => <li key={d.id}>{d.name}</li>)}
        </ul>
        </>
    )

}

export default Scheduler