# Udemy Clone Project - README

## Overview

This Udemy Clone Project is a web application that replicates some of the key features of the popular e-learning platform Udemy. The project focuses on building essential functionalities, such as adding courses to the cart, user authentication (login and signup), cart management (remove from cart), and pagination for course listings. The application uses Firebase for both the database and authentication.

## Table of Contents

-  [Overview](#overview)
-  [Technologies Used](#technologies-used)
-  [Features](#features)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Project Structure](#project-structure)
-  [Contributing](#contributing)
-  [License](#license)

## Technologies Used

-  **Front-end**:

   -  React: A popular JavaScript library for building user interfaces.
   -  React Router: For handling navigation and routing within the application.
   -  Axios: A library to make HTTP requests to the backend server.

-  **Back-end**:

   -  Firebase: A cloud-based platform for authentication and NoSQL database (Firestore).

-  **Authentication**:
   -  Firebase Authentication: For secure user authentication and management.

## Features

1. **User Authentication**:

   -  Users can create an account (signup) and login securely using Firebase Authentication.
   -  User sessions are managed by Firebase, providing a seamless login experience.

2. **Course Listing and Pagination**:

   -  Courses are displayed in a paginated manner, ensuring a smooth user experience.
   -  Users can navigate through different pages to browse the course catalog.

3. **Add to Cart**:

   -  Users can add courses to their shopping cart for future purchase.
   -  The cart stores the selected courses even after the user logs out.

4. **Remove from Cart**:
   -  Users can remove courses from the cart if they change their minds.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/udemy-clone.git
cd udemy-clone
```

2. Install dependencies for the client (front-end):

```bash
cd client
npm install
```

3. Configure Firebase:

   -  Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   -  Obtain the Firebase configuration (apiKey, authDomain, projectId, etc.).
   -  Replace the placeholder values in the `client/src/firebase.js` file with your Firebase configuration.

4. Start the development server:

```bash
npm start
```

## Usage

1. Open the application in your browser at `http://localhost:3000`.

2. Signup for a new account or login with your existing credentials.

3. Browse the available courses and use pagination to navigate through different pages.

4. Add courses to the cart by clicking the "Add to Cart" button.

5. Visit the cart page to view the added courses. You can remove any course from the cart if needed.

6. Logout to end your session.

## Project Structure

```
react-lms-udemy/
  ├── public/
      ├── images/
      ├── favicon.ico
      ├── index.html
      ├── index1.html
      ├── style.css
      ├── style1.css
  ├── src/
  │   ├── components/
  │       ├── pages/
  │   ├── css/
  │   ├── firebase.js         # Firebase configuration
  │   └── index.js
  └── ...
├── package-lock.json
├── package.json
├── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
