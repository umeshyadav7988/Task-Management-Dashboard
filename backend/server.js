const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

// Application Configuration
const app = express();
const port = 3000;

// MongoDB Configuration
const mongoURI = 'mongodb://127.0.0.1:27017/cultureLinkr'; 
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));

app.use('/api/mockapi', taskRoutes);
console.log('Task routes mounted at /api/mockapi');

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('customEvent', (data) => {
    console.log('Received customEvent:', data);
    socket.emit('customResponse', { message: 'Event received!' });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = { io };
