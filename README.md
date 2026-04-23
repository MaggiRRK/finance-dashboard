# Finance Dashboard with Landing Page

This project is a web application built using React and Tailwind CSS, featuring a finance dashboard, authentication system, and a landing page. The goal of the project was to practice building a structured frontend application while integrating a real authentication system.

 deployment link : https://finance-dashboard-dusky-mu-39.vercel.app/
---

## Overview

The application consists of three main parts:

* A login and registration system
* A protected dashboard interface
* A landing page with a modern UI layout

Users can create an account, log in, and access the dashboard where basic financial UI components are displayed.

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* Supabase (authentication and database)
* React Router

---

## Features

* User authentication (sign up and login)
* Protected routing for dashboard access
* Dashboard layout with cards, stats, and transaction sections
* Landing page with responsive design
* Logout functionality
* Basic user profile integration (displaying user name)

---

## Project Structure

```
src/
  components/
    Sidebar.jsx
    Header.jsx
    Cards.jsx
    Stats.jsx
    Transactions.jsx
    ProtectedRoute.jsx
  pages/
    Login.jsx
    Dashboard.jsx
    Home.jsx
  supabase.js
  App.jsx
  main.jsx
```

---

## Authentication

Authentication is implemented using Supabase.
User credentials are handled through Supabase Auth, while additional user information (such as first and last name) is stored in a separate `users` table linked by user ID.

---

## Setup Instructions

1. Clone the repository:

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies:

```
npm install
```

3. Configure Supabase:
   Create a `supabase.js` file inside `src/` and add your project URL and public API key.

4. Run the development server:

```
npm run dev
```

---

## Development Notes

Most of the application, including layout design, component structure, and UI implementation, was developed independently.

AI assistance was used selectively for:

* Setting up and understanding Supabase authentication
* Minor guidance in structuring certain UI elements (such as layered shapes)

---

## Future Improvements

* Improve UI consistency and spacing
* Replace placeholder icons with proper assets
* Add profile management features
* Enhance responsiveness across more screen sizes
* Deploy the application

---

## Purpose

This project was developed as part of learning and improving skills in frontend development, particularly in building structured React applications and integrating authentication systems.
