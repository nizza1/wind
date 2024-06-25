
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

    return NextResponse.json({ ok: true }, { statusText: 'Email sent successfully' })
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false }, { statusText: 'internal server error' })
  }
}



