/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';

function Signup() {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      company: '',
      phone: '',
      website: '',
      visitors: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 10));
    },
  });

  return (

    <form onSubmit={formik.handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
          <input type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="" value={formik.values.first_name} onChange={formik.handleChange} />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
          <input type="text" id="last_name" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="" value={formik.values.last_name} onChange={formik.handleChange} />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
          <input type="text" id="company" name="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required="" value={formik.values.company} onChange={formik.handleChange} />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
          <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required="" value={formik.values.first_name} onChange={formik.handleChange} />
        </div>
        <div>
          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
          <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required="" value={formik.values.first_name} onChange={formik.handleChange} />
        </div>
        <div>
          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
          <input type="number" id="visitors" name="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" value={formik.values.first_name} onChange={formik.handleChange} />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="" value={formik.values.first_name} onChange={formik.handleChange} />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" value={formik.values.first_name} onChange={formik.handleChange} />
      </div>
      <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
        <input type="password" id="confirm_password" name="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" value={formik.values.first_name} onChange={formik.handleChange} />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

  );
}

export default Signup;
