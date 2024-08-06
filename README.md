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


Install Dependencies:

bash Copy code
npm install
Run the Application:

bash
Copy code
npm start
Open the Application:
Navigate to http://localhost:3000 in your web browser.

Usage
Sidebar Navigation
Today: View and manage tasks due today.
Upcoming: See tasks that are scheduled for future dates.
Calendar: A comprehensive view of tasks based on selected dates.
Search Functionality
Search Bar: Located in the "Today" section. Enter keywords to search through your tasks.
Debouncing: The search input is debounced to improve performance and reduce unnecessary re-renders.
Task Management
Add Todo: Click the "Add Todo" button to open the modal and add a new task.
Edit Todo: Click on a task to view details and make edits.
Delete Todo: Remove tasks from the list as needed.
Folder Structure
src/
components/
Sidebar.jsx: Sidebar component with navigation links.
TodoSection.jsx: Component for managing today's tasks.
Upcoming.jsx: Component for managing upcoming tasks.
TaskSection.jsx: Component for viewing and editing task details.
TodoModal.jsx: Modal for adding and editing todos.
TodoList.jsx: Displays a list of todos.
Slices/
TodoSlice.js: Redux slice for todo state management.
App.jsx: Main application component with routing.
main.jsx: Entry point for the React application.
Redux Setup
TodoSlice.js: Manages todos state, including actions for adding, editing, and deleting todos. Includes a search reducer for filtering todos.
Custom Features
Custom Debounce: Implemented to improve search performance.
Date and Category Filtering: Allows viewing todos based on specific criteria.
