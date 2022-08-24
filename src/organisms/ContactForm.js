import React, {useState} from 'react'
import SubmitBtn from '../atoms/SubmitBtn';
import './ContactForm.css'
import FormInput from '../molecules/FormInput'


const ContactForm = () => {

  const [values, setValues ] = useState({
    name: '',
    lastname: '',
    email: '',
    confirmEmail: '',
    message: ''
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      required: true,
      pattern: '^[a-zA-Z]+$',
      errorMessage: 'Only letters are allowed '
    },
    {
      id: 2,
      name: 'lastname',
      type: 'text',
      placeholder: 'Last Name',
      required: true,
      pattern: '^[a-zA-Z]+$',
      errorMessage: 'Only letters are allowed '
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      required: true,
      errorMessage: 'Invalid email'
    },
    {
      id: 4,
      name: 'confirmEmail',
      type: 'email',
      placeholder: 'Confirm Email',
      required: true,
      pattern: values.email,
      errorMessage: 'Emails don´t match'

    },
    {
      id: 5,
      name: 'message',
      type: 'text',
      placeholder: 'Message',
      required: true,
      errorMessage: 'This field cannot be empty'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello world');
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value}); 
  }




  console.log(values);
  

  return (
    <form className='contactForm' onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput 
        key={input.id} 
        {...input} 
        value={values[input.name]} 
        onChange={onChange}
        />
      ))}
      <SubmitBtn/>
      
      
    </form>
  )
}

export default ContactForm