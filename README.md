# Task Management Dashboard

This is a Task Management Dashboard built with Vue.js that allows users to manage tasks with CRUD operations and various features like dynamic categorization, sorting, filtering, and real-time updates. The application uses a custom API endpoint to store and manage tasks.

## Features

- **User Authentication**:
  - Users can register and log in using their username and password.
  - Routes for login, sign-up, and dashboard are managed using Vue Router.

- **Task CRUD Operations**:
  - Users can Create, Read, Update, and Delete tasks.
  - Tasks include details such as title, description, due date, priority level, and completion status.

- **Dynamic Dashboard**:
  - Display tasks in different categories:
    - Today's Tasks
    - Upcoming Tasks
    - Overdue Tasks
    - Completed Tasks
  - Use Vue's computed properties to dynamically filter and display tasks based on the due date.

- **Task Sorting & Filtering**:
  - Tasks can be sorted by priority, due date, or status.
  - Filter options for status (e.g., completed, pending) and due date are available.

- **Drag-and-Drop**:
  - Tasks can be moved between categories using Vue Draggable (e.g., moving a task from "In Progress" to "Completed").

- **Real-time Data Storage**:
  - Tasks are stored in a backend API that supports CRUD operations.
  - Users can sync their tasks across multiple devices in real-time using the API.

## Tech Stack
- **Frontend**: Vue.js, Vue Router, Vue Draggable
- **Backend**: Custom API endpoint (Mock API)
- **State Management**: Vuex 
- **Styling**: CSS, Scoped Styling, Flexbox

## Project Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 12.x.x)
- npm (>= 6.x.x)
- Vue CLI

### Clone the repository

```bash
git clone https://github.com/umeshyadav7988/Task-Management-Dashboard.git
cd Task-Management-Dashboard
```

### Install dependencies

Inside the project directory, install the necessary dependencies for both frontend and backend:

```bash
npm install
```

### Run the frontend

```bash
npm run serve
```

This will start the Vue.js development server on `http://localhost:8080/`.

### Run the backend (if applicable)

If you are using a mock API or custom backend, you can start it by running:

```bash
npm run start-backend
```

The backend server will be running on a specified port (e.g., `http://localhost:3000/`).

## Usage

1. **Register/Login**:
   - Navigate to the login page.
   - Register a new account or log in using existing credentials.

2. **Managing Tasks**:
   - Once logged in, you'll be redirected to the dashboard.
   - Create new tasks, view, edit, and delete existing tasks.
   - Sort tasks by priority, due date, or status.
   - Filter tasks by status (completed, pending) and due date.
   - Tasks are automatically categorized into "Today's Tasks", "Upcoming", "Overdue", and "Completed" based on due dates.

3. **Drag-and-Drop**:
   - You can move tasks between different categories (e.g., from "In Progress" to "Completed") using drag-and-drop functionality.

## API Endpoints

Here are the available API endpoints used in this project:

### Task Management Endpoints

- `GET /api/tasks`: Fetch all tasks
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id`: Update an existing task
- `DELETE /api/tasks/:id`: Delete a task

### User Authentication Endpoints

- `POST /api/register`: Register a new user
- `POST /api/login`: Log in with existing credentials


## Contact

If you have any questions or suggestions, feel free to reach out to me via [GitHub](https://github.com/umeshyadav7988).

 to reach out if they have any questions.

Feel free to modify or add any more details according to your needs!
