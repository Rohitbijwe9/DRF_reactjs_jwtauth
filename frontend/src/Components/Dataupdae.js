import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';


export default function Dataupdae() {
    const{pk} = useParams();

    const redirect = useNavigate();

    const{register,handleSubmit,setValue} = useForm({});

    async function fetchdata()
    {
        const result = await axios.get(`http://127.0.0.1:8000/v1/students/${pk}/`);
        setValue('roll', result.data.roll)
        setValue('sname', result.data.sname)
        setValue('num', result.data.num)
        setValue('mail', result.data.mail)
        setValue('dob', result.data.dob)
    }

    function saveupdated(data)
    {
        axios.put(`http://127.0.0.1:8000/v1/students/${pk}/`,data)
        redirect('/show');

    }

    useEffect(()=>{fetchdata()},[])
  return (
    <>
    <form onSubmit={handleSubmit(saveupdated)}>
        <label>ENTER ROLL</label><br></br>
        <input type='number' placeholder='enter roll' className='form-control'
        {...register('roll')}/><br/><br/>

        <label>ENTER STUDENT NAME</label><br></br>
        <input type='text' placeholder='enter sname' className='form-control'
        {...register('sname')}/><br/><br/>

        <label>ENTER CONTACT NUMBER</label><br></br>
        <input type='number' placeholder='enter number' className='form-control'
        {...register('num')}/><br/><br/>

        <label>ENTER MAIL</label><br></br>
        <input type='email' placeholder='enter mail' className='form-control'
        {...register('mail')}/><br/><br/>

        <label>ENTER DOB</label><br></br>
        <input type='date' placeholder='enter dob' className='form-control'
        {...register('dob')}/><br/><br/>
        <input type='submit' value={'REGISTER'} className='btn btn-outline-success'/>
    </form>
    </>
  )
}
