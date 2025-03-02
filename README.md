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

> If you are getting any error or need any support conatct me: vikask4590@gmail.com or send enquiry through my portfolio https://vikask.in

Thank You!
