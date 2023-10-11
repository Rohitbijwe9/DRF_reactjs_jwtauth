import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Add() {
    const{register,handleSubmit}=useForm()

    const redirect=useNavigate()

    function save(data)
    {
        axios.post('http://127.0.0.1:8000/v1/students/',data)
        redirect('/show')

        



    }

    

  return (
    <>
    <form onSubmit={handleSubmit(save)}>
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
