import nodemailer from 'nodemailer';

/* const nizMail = 'nizardjassim@gmail.com';
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
});



export const mailOptions = {
    from: email,
    to: [nizMail, email],
    subject: 'test',
    text: 'test',
    html: 'tes'
};

const send = async () => {
    transporter.sendMail(mailOptions)
}

send()  */



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

const send = async () => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

send();