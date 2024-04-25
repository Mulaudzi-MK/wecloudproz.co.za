const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Change * to your client's origin if possible for better security
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
    const { name, email, subject, message } = req.body;

    //nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'mvelinjadu@gmail.com',
            pass: 'mveli211106'
        }
    });

    // Email content
    const mailOptions = {
        from: 'njadusandiso@gmail.com',
        to: 'sandisodev@gmail.com', 
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        // Respond to the client
        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while submitting the form');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
