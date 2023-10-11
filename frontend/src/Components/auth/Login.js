import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';


export default function Login({setLoggedIn}) {
     const{register,handleSubmit}=useForm()
     const navigate = useNavigate()
     

     function loginpg(data)
     {
        axios.post('http://127.0.0.1:8000/v1/access/',data).then(response=>{
            
            
            setLoggedIn(response.data.access)
            navigate('/show')
        })
        
    }
  return (
   <>
   <form onSubmit={handleSubmit(loginpg)}>
    <label>ENTER USERNAME:</label><br/><br/>
    <input type='text' placeholder='enter username' className='form-control'
    {...register('username')}/><br/><br/>

    <label>ENTER PASSWORD:</label>
    <input type='password' placeholder='enter password' className='form-control'
    {...register('password')}/><br/><br/>


    <input type='submit' value={'LOGIN'} className='btn btn-success'/>

   </form>
   </>
  )
}
