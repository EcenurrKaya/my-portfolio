"use client"
import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const form = useRef();

    const sendEmail=(e)=>{
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return; 
    }

    
    emailjs.sendForm('service_seygjyf', 'template_zihkyhs', form.current,{
        publicKey: '1WSECrOFYkZRLxYwo', 
    }).then(
        ()=>{
            alert("Mesajınız iletildi!");
            console.log("SUCCESS");
        },
        (error)=>{
            console.log("FAILED", error.text)
        },
    );
    form.current.reset();
};
  return (
    <div>
        <div className='rounded-3xl'>
            <p className='mt-4'>Contact me</p>
             <form className='flex items-start flex-col' ref={form} onSubmit={sendEmail}>
                    <input className='dark:placeholder:text-stone-700' type='text' placeholder='Name' name="from_name"/>
                    <input className='dark:placeholder:text-stone-700' type='email' placeholder='Email' name='user_email'/>
                    <textarea className='dark:placeholder:text-stone-700' placeholder='Your Message' style={{height:"200px"}} name='message'/>
                    <input className='hover:border-y-lime-800' type='submit' value="Send" />
            </form>
        </div>
    </div>
  )
}

export default ContactForm