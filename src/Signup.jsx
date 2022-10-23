import React from 'react';
import { useFormik } from 'formik';

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <div className="grid grid-cols-3 gap-6">
        <div className="xs:col-span-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4 flex flex-col sm:mt-4">
              <label htmlFor="firstName">
                FirstName :
                <input
                  aria-label="firstName"
                  className="border border-gray-400"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </label>
              <label htmlFor="lastName">
                lastName :
                <input
                  className="border border-gray-400"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </label>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" color="primary" type="submit"> Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Signup;
