# Task Manager - Indpro Assignment

> # View Live Demo at : https://indpro-assignment.vercel.app/

![Task Manager](https://res.cloudinary.com/freecodez/image/upload/v1740932435/Screenshot_2025-03-02_at_9.49.32_PM_rudltl.png)

## Local setup

```
git clone
```

## Setup API server

```
cd server
```

```
touch .env
```

Add `MONGO_URI=Your MongoDB URI` in .env file

```
npm install
```

For running in dev mode:

```
npm run dev
```

For running in production mode

```
npm run build && npm run start
```

## Setup frontend

```
cd web
```

```
touch .env.local
```

Add `NEXT_PUBLIC_API=http://localhost:8000` in .env.local file

```
npm install --force
```

For running in dev mode:

```
npm run dev
```

For running in production mode

```
npm run build && npm run start
```

## Tools & Technologies used

### In Server

- bcrypt
- body-parser
- cookie-parser
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- multer
- validator
- @babel/cli
- @babel/core
- @babel/preset-env
- @babel/register
- babel-plugin-module-resolver
- concurrently
- nodemon
- sharp

### In Frontend

- @hookform/resolvers
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-collapsible
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-label
- @radix-ui/react-popover
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slot
- @radix-ui/react-tooltip
- @reduxjs/toolkit
- @tanstack/react-table
- axios
- class-variance-authority
- clsx
- cmdk
- date-fns
- lucide-react
- next
- next-themes
- react
- react-day-picker
- react-dom
- react-hook-form
- react-redux
- sonner
- tailwind-merge
- tailwindcss-animate
- zod

> If you are getting any error or need any support conatct me: vikask4590@gmail.com or send enquiry through my portfolio https://vikask.in

Thank You!
