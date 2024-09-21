"use server"

interface formDataProps {
    name:string,
    email:string,
    message:string
}

import {Resend} from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const SendEmail = async (formData:formDataProps) => {

    console.log(formData);
    
    resend.emails.send({
      from:'Contact Form <onboarding@resend.dev>',
      to:'saxenaadarsh35@gmail.com',
      subject:'contact',
      reply_to:formData.email,
    //   text:formData.message
      react:<EmailTemplate name={formData.name} message={formData.message} email={formData.email} />
    })

}
export default SendEmail;
