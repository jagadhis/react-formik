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
     <label htmlFor='firstName'>FirstName : </label>
     <input 
     id="firstName"
     name="firstName"
     type="text"
     onChange={formik.handleChange}
     value={formik.values.firstName}
     />
    </form>
    
  )
}

export default Signup