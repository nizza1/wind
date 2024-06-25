import nodemailer from 'nodemailer';





const nizMail = 'nizardjassim@gmail.com';
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (!email || !pass) {
    throw new Error('Email and password must be defined in environment variables');
}

export const transporter = nodemailer.createTransport({
    host: process.env.HOSTINGER_SMTP,
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.HOSTINGER_CONTACT_EMAIL,
        pass: process.env.HOSTINGER_CONTACT_PASS
    }
});

export const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.HOSTINGER_CONTACT_EMAIL,
    to: `${nizMail},${email}`, // Comma-separated string
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
