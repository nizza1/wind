import nodemailer from 'nodemailer';


const nizMail = 'nizardjassim@gmail.com';
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (!email || !pass) {
    throw new Error('Email and password must be defined in environment variables');
}
/*
? add host, port prop in case of using SMTP  * */

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: email,
        pass: pass
    }
});

export const mailOptions: nodemailer.SendMailOptions = {
    from: email,
    to: [email, nizMail], // Comma-separated string
    subject: 'test',
    text: 'test',
    html: 'test'
};



/*
? here are all the data related to HOSTINGER SMTP 
! HOSTINGER_SMTP="smtp.hostinger.com"
! HOSTINGER_PORT=465
! HOSTINGER_CONTACT_PASS="Contact.7921007"
*/
