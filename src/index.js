import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import './styles.css';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input 
        id="email" 
        type="email" 
        name="email" 
        onChange={formik.handleChange} 
        value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    )
};

function App(){
  return <SignUpForm />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement);