import axios from 'axios';
import { useState, useEffect } from 'react';

export default function FetchData(){

const[days, setDays] = useState([]);
const[interviewers, setInterviewers] = useState([]);

useEffect(() => {
    // axios.get("http://localhost:8001/api/days")
    // .then((res) => {
    //     console.log(res.data);
    //     setDays(res.data)
    // });

    // 
    
    const baseUrl = "http://localhost:8001/api"
    const getDays = axios.get(`${baseUrl}/days`);
    const getInterviewers = axios.get(`${baseUrl}/interviewers`);

    Promise.all([getDays, getInterviewers])
    .then((res) => {
        console.log(res);
        setDays(res[0].data);
        setInterviewers(res[1].data);
    })

}, []);

const parsedDays = days.map((day) => { return <p key={day.id}>Day name is {day.name} and it has {day.spots} spots.</p>})

return(
    <div>
    <label>These are days:</label>
    <section>{parsedDays}</section>
    </div>
);



}