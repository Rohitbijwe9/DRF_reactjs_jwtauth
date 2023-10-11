import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


export default function Show() {
    const[user,setuser]=useState([]);

    const redirect=useNavigate()

    async function fetch()
    {
        const result=await axios.get('http://127.0.0.1:8000/v1/students/')
        setuser(result.data)
       
    }

    useEffect(()=>{fetch()},[])
  return (
   <>
   <table className='tabel table-stiped'>
    <thead>
        <tr>
            <th>ROLL</th>
            <th>STUDENT NAME</th>
            <th>NUMBER</th>
            <th>MAIL</th>
            <th>DATE OF BIRTH</th>
            <th>ACTION</th>
        </tr>
    </thead>
    <tbody>
        {
            user.map(obj=>{return(
                <tr>
                    <td>{obj.roll}</td>
                    <td>{obj.sname}</td>
                    <td>{obj.num}</td>
                    <td>{obj.mail}</td>
                    <td>{obj.dob}</td>
                    <td>
                        <NavLink to={`/update/${obj.id}/`}><button className='btn btn-outline-warning'>UPDATE</button></NavLink>
                        <NavLink to={`/delete/${obj.id}/`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>

                    </td>
                </tr>
            )})

        }
    </tbody>
   </table>

   </>
  )
}
