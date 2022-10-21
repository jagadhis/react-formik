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
     
    </form>
    
  )
}

export default Signup