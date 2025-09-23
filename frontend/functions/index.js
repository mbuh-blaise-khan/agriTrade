const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

// Set your SendGrid API Key from the environment config
sgMail.setApiKey(functions.config().sendgrid.key);

// Cloud Function triggered on new document creation in 'contact-form-submissions'
exports.sendContactMessage = functions.firestore
    .document('contact-form-submissions/{docId}')
    .onCreate(async (snap, context) => { // <-- ADD 'async' HERE
        const data = snap.data();
        const msg = {
            to: 'ebaneckkeziah@gmail.com', // Change this to your recipient email
            from: 'contact-form@agritrade.com', // A verified sender email in SendGrid
            subject: `New Contact Form Submission: ${data.subject}`,
            html: `
                <p><b>Name:</b> ${data.name}</p>
                <p><b>Email:</b> ${data.email}</p>
                <p><b>Message:</b> ${data.message}</p>
            `,
        };

        try {
            await sgMail.send(msg);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error.toString());
            if (error.response) {
                console.error(error.response.body);
            }
        }
        return null;
    });