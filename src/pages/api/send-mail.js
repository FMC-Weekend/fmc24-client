import nodemailer from 'nodemailer';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export default async function handler(req, res) {
    const { EMAIL1, PASS1, SLACK_TOKEN } = publicRuntimeConfig;
    if (req.method !== 'POST') {
        return res.status(405).end();
    }
    const { name, email, message } = req.body;
    console.log(name, email, message)
    const messs = `New Contact Us Request\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL1,
            pass: PASS1,
        },
    });

    const mailOptions = {
        from: 'FMC WEEKEND',
        to: email,
        subject: 'FMC WEEKEND',
        html: `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>dmc weekend - India's Premier Digital Art Fest</title>
<style>
  
    body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .header {
        text-align: center;
        margin-bottom: 20px;
    }

    .header h1 {
        font-size: 28px;
        color: #6d49fc;
    }

    .header p {
        font-size: 18px;
        color: #444;
    }

    .fest-details {
        margin-top: 20px;
        text-align: center;
    }

    .fest-details h2 {
        font-size: 24px;
        color: #6d49fc;
    }

    .fest-details p {
        font-size: 18px;
        color: #444;
    }

    .fest-details a {
        text-decoration: none;
        color: #6d49fc;
        font-weight: bold;
    }

    .fest-details a:hover {
        color: #55cc55;
    }

    .celebrities {
        margin-top: 30px;
        text-align: center;
    }

    .celebrities h2 {
        font-size: 24px;
        color: #6d49fc;
    }

    .celebrities p {
        font-size: 18px;
        color: #444;
    }

    .footer {
        text-align: center;
        margin-top: 30px;
    }

    .footer p {
        font-size: 16px;
        color: #888;
    }
</style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Thanks ${name} for contacting FMC weekend!</h1>
        <p>India's Premier Digital Art Fest</p>
    </div>
    <div class="fest-details">
        <h2>Event Details</h2>

        <p>Join us for an incredible celebration of digital art and creativity. Explore cutting-edge art, participate in workshops, and more. Visit our website for event details: <a href="https://www.fmcweekend.in/" target="_blank">FMC WEEKEND Website</a></p>
    </div>
    <div class="celebrities">
        <h2>Special Guests</h2>
        <p>We're thrilled to announce that many celebrities will be gracing our event. Stay tuned for updates on our star-studded lineup!</p>
    </div>
    <div class="footer">
        <p>&copy; 2023 FMC WEEKEND - Organized by IIT BHU</p>
    </div>
</div>
</body>
</html>

    `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Email not sent' });
        } else {
            res.status(200).json({ message: 'Email Sent' });
        }
    });
}
