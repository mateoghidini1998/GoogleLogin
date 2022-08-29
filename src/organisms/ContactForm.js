import React, {useState} from 'react'
import SubmitBtn from '../atoms/SubmitBtn';
import './ContactForm.css'
import './Modal.css'
import FormInput from '../molecules/FormInput'
import Modal from './Modal';


const ContactForm = () => {
  const [ isOpen, setIsOpen ] = useState(false)
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
    const formData = new FormData(e.currentTarget)
    e.preventDefault();
    for( let [key, value] of formData.entries()){
      console.log(key,value)
    }
    setIsOpen(true)
    
  }

  const handleClose = () =>{
    setIsOpen(false)
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value}); 
  }  

  return (
    <div className='container'>
      <Modal 
      open={isOpen} 
      handleClose={handleClose} 
      handleSubmit={handleSubmit}     
      />

      <form className='contactForm' onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}
          />
        ))}
        <SubmitBtn handleSubmit={handleSubmit} />    
      </form>
    </div>
  )
}

export default ContactForm