import React, { useState } from 'react';
import {useFormik} from 'formik';

function Signup() {


  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
    },
    onSubmit:values => {
      alert(JSON.stringify(values,null,2));
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className='mt-4 flex flex-col'>
     <label htmlFor='firstName'>FirstName : </label>
     <input 
     id="firstName"
     name="firstName"
     type="text"
     onChange={formik.handleChange}
     value={formik.values.firstName}
     />
      <label htmlFor='lastName'>lastName : </label>
     <input 
     id="lastName"
     name="lastName"
     type="text"
     onChange={formik.handleChange}
     value={formik.values.lastName}
     />

     <button type="submit"> Submit Form</button>
     </div>
    </form>
    
  )
}

export default Signup