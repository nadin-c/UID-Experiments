import React from 'react';
import './Projects.css'; // Import CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <ul>
        <li>
          <h2>Herbs Management System</h2>
          <p>
            An online herbs shopping website built with AngularJS. This project involved creating a user-friendly platform for customers to browse and purchase various herbs. Key features include:
          </p>
          <ul>
            <li><strong>Product Catalog:</strong> A searchable and filterable catalog of herbs with detailed descriptions and images.</li>
            <li><strong>Shopping Cart:</strong> An interactive shopping cart that allows users to add, remove, and modify items before checkout.</li>
            <li><strong>Order Management:</strong> Backend integration with MongoDB for managing orders, tracking inventory, and processing transactions.</li>
            <li><strong>User Accounts:</strong> User authentication and profile management for personalized experiences and order history.</li>
          </ul>
          <p>
            Technologies used include AngularJS for the frontend, Node.js for server-side operations, and MongoDB for the database. Challenges included integrating the frontend with the backend and ensuring a responsive design across different devices.
          </p>
        </li>
        <li>
          <h2>Calculator Website</h2>
          <p>
            A simple calculator built using HTML, CSS, and JavaScript. This project focused on creating a functional and visually appealing calculator that performs basic arithmetic operations. Key features include:
          </p>
          <ul>
            <li><strong>Real-time Calculation:</strong> Displays the result immediately as users input numbers and operators.</li>
            <li><strong>Responsive Design:</strong> A design that adapts to different screen sizes for usability on both desktop and mobile devices.</li>
            <li><strong>Clear and Memory Functions:</strong> Includes functions to clear the display and store results temporarily.</li>
          </ul>
          <p>
            Technologies used include HTML for the structure, CSS for styling, and JavaScript for functionality. Challenges included implementing a user-friendly interface and handling different edge cases in arithmetic operations.
          </p>
        </li>
        <li>
          <h2>To-Do List App</h2>
          <p>
            A dynamic To-Do List app created using HTML, CSS, and JavaScript. This project is designed to help users manage tasks effectively with an interactive and user-friendly interface. Key features include:
          </p>
          <ul>
            <li><strong>Task Management:</strong> Add, complete, and delete tasks with a simple and intuitive interface.</li>
            <li><strong>Visual Feedback:</strong> Uncompleted tasks are displayed in red, while completed tasks are shown in green, providing clear visual feedback.</li>
            <li><strong>Responsive Design:</strong> The app is designed to work seamlessly across different devices, ensuring usability on both desktop and mobile platforms.</li>
            <li><strong>Modern Styling:</strong> Includes a gradient background, smooth animations, and a clean, modern look.</li>
          </ul>
          <p>
            Technologies used include HTML for the structure, CSS for styling, and JavaScript for functionality. Challenges included implementing the task status indicators and ensuring the design was both functional and visually appealing.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
