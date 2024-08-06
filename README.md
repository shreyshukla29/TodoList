# Todo Application

A React-based Todo application with features including search functionality with debouncing, filtering by date, and category, and task management with a clean UI. The app uses Redux Toolkit for state management and includes a sidebar for navigation.

## Features

- **Add, Edit, and Delete Todos**: Manage your tasks easily.
- **Search with Debouncing**: Efficiently search through your todos with real-time feedback.
- **Filter Todos**: View todos by today, upcoming, and date-wise.
- **Responsive Design**: The application is designed to work well on various screen sizes.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app


2. Install Dependencies:

   ```bash
     npm install

3. Run the Application:

    ```bash
     npm start


4. Open the Application:
    Navigate to http://localhost:3000 in your web browser.

## Usage

### Sidebar Navigation

- **Today**: Manage tasks due today.
- **Upcoming**: View tasks scheduled for future dates.
- **Calendar**: View tasks based on selected dates.

### Search Functionality

- **Search Bar**: Located in the "Today" section for finding tasks by title.
- **Debouncing**: Custom debounce implementation improves search performance.

### Task Management

- **Add Todo**: Click "Add Todo" to open the modal and add a new task.
- **Edit Todo**: Click on a task to view and edit details.
- **Delete Todo**: Remove tasks from the list as needed.


## Folder Structure

The project follows a structured file organization to maintain clarity and manageability. Below is the file structure with brief descriptions:

/src
│
├── /components
│ ├── TodoList.jsx # Component to display the list of todos
│ ├── TodoModal.jsx # Modal for adding and editing todos
│ ├── TodoSection.jsx # Section to display today's todos
│ ├── Upcoming.jsx # Section to display upcoming todos
│ └── TaskSection.jsx # Section for detailed view and editing of a selected task
│
├── /redux
│ └── TodoSlice.js # Redux slice managing todos, including actions and reducers
│
├── /utils
│ └── debounce.js # Custom debounce function for search optimization
│
├── App.jsx # Main application component with routing setup
├── index.jsx # Entry point for the React application
├── main.jsx # Entry point for rendering the application with BrowserRouter
└── App.css # Global styles for the application
