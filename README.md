# Full Stack User Management Application

## Project Description

This project is a **User Management Application** built using **React** for the frontend and **Node.js with Express** for the backend. It interacts with a **MongoDB** database for storing and managing user information. The application allows you to perform basic CRUD (Create, Read, Update, Delete) operations on user data through a clean user interface.

### Key Features
- **Add New Users:** Fill out a form to add a new user with a name, email, and age.
- **View All Users:** Display all users stored in the MongoDB database in a card format.
- **Edit User Information:** Modify user details (Name, Email, Age).
- **Delete Users:** Remove users from the database with a single click.
- **Success/Error Notifications:** Display success or error messages after actions like adding or deleting a user.
- **Responsive Design:** The frontend is designed to be mobile-friendly and adapt to different screen sizes.

## Technologies Used

### Frontend:
- **React** (with Vite as the build tool)
- **React Router Dom** (for client-side routing)
- **Bootstrap** (for styling)

### Backend:
- **Node.js**
- **Express.js** (for handling server requests)
- **MongoDB** (as the database)
- **Mongoose** (for MongoDB object modeling)

### Additional Tools:
- **Git** (for version control)
- **npm** (for dependency management)
- **ESLint** (for linting and code quality)

## Project Setup

### Prerequisites
Ensure that you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation Instructions

1. **Clone the Repository**:
   ```
   git clone https://github.com/akmroyal/user-handler-fullstack-project.git
   cd user-handler-fullstack-project

2. **Install Dependencies for Backend**:
Navigate to the backend directory and install the necessary dependencies:

```
cd backend
npm install 
```
3. Install Dependencies for Frontend:
Navigate to the frontend directory and install the necessary dependencies:


```
cd frontend
npm install 
```


4. **Configure Environment Variables**:
Create a .env file in the backend directory to store environment variables:

```
MONGO_URI=<your-mongodb-connection-string>
PORT=8000
```
Ensure that MongoDB is running locally or on a cloud provider, and add your connection string to MONGO_URI.

5. **Run Backend Server**:
In the backend directory, start the server:

```
npm start
```

6. **Run Frontend**:
Navigate to the frontend directory and start the Vite development server:

```
npm run dev
API Endpoints
Endpoint	Method	Description
/api/user	GET	Fetch all users
/api/user/:id	GET	Fetch user by ID
/api/user	POST	Create a new user
/api/user/:id	PUT	Update user by ID
/api/user/:id	DELETE	Delete user by ID
```

### Frontend Pages 

**Home Page** : Displays a welcome message and the overall description of the app.
Add User Page: A form that allows the user to create new user records.
View Users Page: Shows a list of all users in the database with options to edit or delete.


**Screenshots**
1. Add New User

2. View All Users

3. Edit User

### Folder Structure


```
├── backend
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── server.js
│   └── .env
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Create.jsx
│   │   │   └── Read.jsx
│   │   └── App.jsx
│   └── vite.config.js
├── README.md
└── package.json
```

## Future Enhancements

**User Authentication** : Implement user login/signup with authentication using JWT.

**Search & Filter Functionality** : Add the ability to search for users and filter results.
Pagination: Handle large data sets by implementing pagination in the UI.

**Profile Picture Upload** : Allow users to upload profile pictures when creating accounts.

**Improve UI** : Enhance the overall UI/UX using more advanced styling libraries or custom components.
Contribution Guidelines
Feel free to contribute to this project by creating pull requests or submitting issues. 

## Make sure to:

#### Fork the repository.
#### Create a new branch with a descriptive name.
#### Make the necessary changes.
#### Submit a pull request explaining the changes.


#### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Ashutohs Maurya 
--- Thank You ---






