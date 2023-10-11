import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const{register,handleSubmit}=useForm();

    const redirect=useNavigate()

    function add(data)
    {
        axios.post('http://127.0.0.1:8000/user/',data)
        redirect('/login')
    }
  return (
<>
<form onSubmit={handleSubmit(add)}>
    <label>ENTER USERNAME</label><br/><br/>
    <input type='text' placeholder='enter username' className='form-control'
    {...register('username')}/><br/><br/>

    <label>ENTER PASSWORD</label><br/><br/>
    <input type='password' placeholder='enter password' className='form-control'
    {...register('password')}/><br/><br/>

    <label>ENTER EMAIL</label><br/><br/>
    <input type='email' placeholder='enter email' className='form-control'
    {...register('email')}/><br/><br/>

    <label>ENTER FIRST NAME</label><br/><br/>
    <input type='text' placeholder='enter first name' className='form-control'
    {...register('first_name')}/><br/><br/>

    <label>ENTER LAST NAME</label><br/><br/>
    <input type='text' placeholder='enter last name' className='form-control'
    {...register('last_name')}/><br/><br/>

    <input type='submit' value={'SIGNUP'} className='btn btn-outline-success'/>
</form>
</>  
)
}