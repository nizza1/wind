import nodemailer from 'nodemailer';


const nizMail = 'nizardjassim@gmail.com';


const smtpHost = process.env.HOSTINGER_SMTP || 'smtp.hostinger.com';
const smtpPort = process.env.HOSTINGER_PORT || 465;
const emailUser = process.env.HOSTINGER_CONTACT_EMAIL;
const emailPass = process.env.HOSTINGER_CONTACT_PASS;
if (!emailUser || !emailPass) {
    throw new Error('Email and password must be defined in environment variables');
}
/*
? add host, port prop in case of using SMTP  * */

export const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort as number,
    secure: true, // Use secure connection
    secureConnection: false, // Hostinger specific
    requireTLS: true, // Require TLS
    auth: {
        user: emailUser,
        pass: emailPass,
    },
    tls: {
        ciphers: "SSLv3", // Hostinger specific cipher requirement
        rejectUnauthorized: false,
    },
    debug: true, // Enable debug logging
    connectionTimeout: 10000, // 10 second timeout
} as nodemailer.TransportOptions);

export const mailOptions: nodemailer.SendMailOptions = {
    from: emailUser,
    to: [emailUser, nizMail], // Comma-separated string
    subject: 'test',
    text: 'test',
    html: 'test'
};



