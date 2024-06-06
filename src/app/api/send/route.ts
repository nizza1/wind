
import { NextRequest, NextResponse, } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";


export async function POST(req: NextRequest) {
  const data = await req.json();


  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.tel,
      text: 'Enable HTML mail to see the email',
      html: `<h3>E-Mail : ${data.email}</h3> 
              <h4>Name : ${data.name}</h4>
              <h3> message :<br>  <br> ${data.message}</h3>`
    })
    console.log('Email sent successfully');
    return NextResponse.json({ ok: true }, { statusText: 'Email sent successfully' })
  } catch (err) {

    return NextResponse.json({ ok: false }, { statusText: 'internal server error' })
  }
}






/*
*! send from client to server withe post method

export const sendContactForm = async (data) => 
fetch ('api/contact', {
    method: 'POST',
    body : JSON.stringify(data),
    headers: {
        'content-type': 'application/json',
        accept: 'application/json',
    }
})
*/

/**
 * ? API Routes 
import { mailOptions, transporter } from "@config/nodemailer";

// sollte SMTP stattdessen Port 587 nutzen  

  const handler = async(req, res) => {

    if (req.method === 'POST'){
      const data = req.body;

      if (!data.theName ) {
        return res.status(400).json({message:'Bitte geben Sie Ihren Namen an'})
      }
      if (!data.email) {
        return res.status(400).json({ message: 'Bitte geben Sie Ihre E-Mail-Adresse an' });
      }

      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: data.subject,
          text: 'this is a test string',
          html: `<h3>E-Mail : ${data.email}</h3> 
          <h4>Name : ${data.theName}</h4>
          <h3> message :<br>  <br> ${data.message}</h3>`
        })

        return res.status(200).json({ message: 'Ihre Nachricht wurde gesendet' });
       

      } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message});
      }
    }
  
     return res.status(405).json({ message: 'Method not allowed' });
  };
   export default handler */