import nodemailer from 'nodemailer';





const nizMail = 'nizardjassim@gmail.com';
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (!email || !pass) {
    throw new Error('Email and password must be defined in environment variables');
}

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
});

export const mailOptions: nodemailer.SendMailOptions = {
    from: email,
    to: `${nizMail},${email}`, // Comma-separated string
    subject: 'test',
    text: 'test',
    html: 'test'
};
