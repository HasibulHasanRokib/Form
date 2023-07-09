
import { useState } from 'react'
import './Form.css'
import { useFormik } from 'formik'

import * as yup from 'yup';


const Form = () => {

const [show,setShow]=useState(false)
const formik=useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",

  },
  validationSchema :yup.object({
   name:yup.string().min(2,"must have 2 character").required(),
   email:yup.string().email().required(),
   password:yup.string().min(6).required(),
  }),
  onSubmit:(values)=>{
    alert("Welcome "+ values.name)
    formik.resetForm({name:"",email:"",password:""})

  }
})

  return (
    <div>
      <h1>React Form </h1>
      <form onSubmit={formik.handleSubmit}>
    
       <label htmlFor="name">Name:</label>
       <input type="text" id='name' onChange={formik.handleChange} placeholder='Enter Your Name:' value={formik.values.name} />
      {formik.errors.name &&  <samp style={{color:"red"}}>{formik.errors.name}*</samp>}
       
       <label htmlFor="email">Email:</label>
       <input type="email" id='email' onChange={formik.handleChange} placeholder='Enter Your Email:' value={formik.values.email}  />
      {formik.errors.email &&  <samp style={{color:"red"}}>{formik.errors.email}*</samp>}
       
       <label htmlFor="password">Password:</label>
       <input type={show===true?"text":"password"} id='password' placeholder='Password' onChange={formik.handleChange} value={formik.values.password} required />
      
       <a href='#'
       onClick={()=>{setShow(!show)}}
       className='btn-password'>{show===true?<i className="fa-solid fa-eye-slash"></i>:<i className="fa-solid fa-eye"></i>}</a>
        {formik.errors.password &&  <samp style={{color:"red"}}>{formik.errors.password}*</samp>}
       <button type="submit" className='btn-submit'>Submit</button>

      </form>
    </div>
  )
}

export default Form
