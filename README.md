# Photographer Appointment

A simple frontend application for managing photography appointment schedules.

## 📦 Setup Instructions

#### Clone the repository

```bash
   git clone https://github.com/Abyansyah/photographer-appointment
   cd photographer-appointment
```

#### Install dependencies

- Using Yarn:

```bash
  yarn install
```

- Or using npm:

```bash
  npm install
```

#### Run the development server

```bash
  yarn dev
```

#### Environment Variables

```bash
  cp .env.example .env
```

#### You can configure your API base URL and other secrets in the .env file:

```bash
VITE_API_BASE_URL=https://be-placement-test.vercel.app/api/v1
```

#### Account Login

- **Username**: `user@gmail.com`
- **Password**: `rahasia123`

## 💡 Assumptions Made

- The backend API is publicly deployed and built using Express.js, with Supabase as the database.

- All necessary backend endpoints (e.g., login, register, schedule management) are available and correctly integrated with the frontend.

- Users are assumed to be authenticated before accessing protected features; a login flow is implemented.

- Node.js and a package manager (Yarn or npm) are installed on the developer's machine.

## ⚠️ Known Limitations or Future Improvements

#### 🛑 Known Limitations

- Limited unit testing has been implemented so far.

- The application currently supports only one user role (regular user).

- SEO optimization is not yet implemented (e.g., meta tags, titles, Open Graph, etc.).

#### ✨ Future Improvements

- Add user registration feature.

- Integrate real-time capabilities using technologies like Socket.IO or Supabase Realtime.

- Implement proper testing using Vitest or Cypress.

- Improve UI design for better modern look and responsiveness.

- Add admin role support with separate access and controls.
- Implement SEO best practices for better discoverability and social sharing.

## 🚀 Live Demo

You can try the deployed version here:  
[https://photographer-appointment.vercel.app/](https://photographer-appointment.vercel.app/)

## 🔐 Demo Credentials

You can use the following credentials to log in:

- **Username**: `user@gmail.com`
- **Password**: `rahasia123`

##

![Screenshot 2025-04-19 112125](https://github.com/user-attachments/assets/c09000c9-ab9f-49dc-b814-731b7204207e)
