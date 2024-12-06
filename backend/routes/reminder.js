// routes/reminder.js

const express = require('express');
const { sendEmail } = require('../utils/emailService');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Task 1', description: 'First task', dueDate: '2024-11-20', priority: 'high', status: 'pending', email: 'user@example.com' },
  { id: 2, title: 'Task 2', description: 'Second task', dueDate: '2024-11-21', priority: 'medium', status: 'completed', email: 'user@example.com' },
];

const checkAndSendReminders = () => {
  const now = new Date();
  const oneDayLater = new Date(now);
  oneDayLater.setDate(now.getDate() + 1);

  tasks.forEach(task => {
    const taskDueDate = new Date(task.dueDate);
    if (taskDueDate > now && taskDueDate <= oneDayLater) {
        
      const subject = `Reminder: Upcoming Task - ${task.title}`;
      const text = `Hello,\n\nThis is a reminder that your task "${task.title}" is due on ${task.dueDate}.\n\nDescription: ${task.description}\n\nPlease ensure to complete it on time.\n\nBest regards,\nTask Dashboard Team`;

      sendEmail(task.email, subject, text)
        .then(info => console.log(`Email sent: ${info.response}`))
        .catch(err => console.error(`Error sending email: ${err}`));
    }
  });
};

router.get('/send-reminders', (req, res) => {
  checkAndSendReminders();
  res.status(200).send('Reminders checked and sent!');
});

setInterval(checkAndSendReminders, 60 * 60 * 1000);

module.exports = router;
