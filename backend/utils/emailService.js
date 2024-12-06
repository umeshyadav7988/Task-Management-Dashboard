const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'umeshyadav7988@gmail.com', 
  auth: {
    user: 'umeshyadav7988@gmail.com', 
    pass: 'UMESH##7988', 
  },
});

/**
 * Sends an email.
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Email body
 */
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'umeshyadav7988@gmail.com',
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
