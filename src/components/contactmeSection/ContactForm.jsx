import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_5jloelx', 'template_myei7yp', form.current, {
        publicKey: 'ewbNkBPpUISWRdiKK',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Sent!!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <p className='text-darkCyan mb-2'>{success}</p>
      <form
        className='flex flex-col gap-4 text-white'
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type='text'
          name='from_name'
          placeholder='Your Name'
          required
          className='h-12 rounded-lg bg-lightBrown px-2 outline-none text-white focus:bg-lightBrown focus:text-white autofill:bg-lightBrown autofill:text-white'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          name='from_email'
          placeholder='Your Email'
          required
          className='h-12 rounded-lg bg-lightBrown px-2 outline-none'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name='message'
          placeholder='Message'
          rows='9'
          cols='50'
          required
          className='rounded-lg bg-lightBrown px-2 outline-none'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className='w-full rounded border bg-darkCyan text-zinc-300 h-12 font-bold text-xl hover:bg-cyan transition-all duration-500'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

