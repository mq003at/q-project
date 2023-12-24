import { Box, TextareaAutosize } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvoepleo')
  if (state.succeeded) {
    return <p>Yor form has been sent. Thank you for contacting.</p>
  }
  return (
    <Box className='form wrapper'>
      <Box className='form intro'>
        I am always happy to meet and collaborate with new people. If you want to discuss more about partnership or career
        opportunity, feel free to send me an email using the links above, or with the form below.
      </Box>
      <form className='form content' onSubmit={handleSubmit}>
        <input id='name' type='name' name='name' placeholder='Full Name' required={true} />
        <input id='email' type='email' name='email' placeholder='Email' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <TextareaAutosize id='message' name='message' placeholder='Message' minRows={3} />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <ValidationError errors={state.errors} />
        <button type='submit' disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Box>
  )
}

export default ContactForm
