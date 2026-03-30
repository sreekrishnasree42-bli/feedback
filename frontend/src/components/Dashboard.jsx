import react, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const [data , setData] = useState ([]);

useEffect (() => {
    axios.get("http://localhost:3000/api/feedback"
        .then ((res) => { setData(res.data) })
    )
})




const Dashboard =() =>{
    return(
        <div>
            <h1>Dashboard</h1>
            <table border ="1">
                <thead>
                    <tr>CouseID</tr>
                    <tr>CourseName</tr>
                    <tr>Duration</tr>
                    <tr>rating</tr>
                </thead>
                <tbody>
                    {data.map ((item) => {
                        <tr key = {item._id}>
                        <td>{item.CourseId}</td>
                        <td>{item.CourseName}</td>
                        <td>{item.Duration}</td>
                        <td>{item.rating}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>

    )
}

export default Dashboard;