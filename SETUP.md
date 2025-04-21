# Techvel Website Setup Guide

This guide explains how to set up and run both the frontend and backend of the Techvel website.

## Backend Setup (SMTP Email Service)

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with your email credentials:
```
PORT=5000
EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD
```

Replace `YOUR_EMAIL_PASSWORD` with the actual password for the `ceo@techvelsolutions.com` email account.

4. Start the backend server:
```bash
npm run dev
```

The server will start on port 5000.

## Frontend Setup

1. Open a new terminal window (keep the backend running)

2. Install frontend dependencies (if not already installed):
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

The frontend will start on port 5173 (default Vite port).

## Testing the Contact Form

1. Open your browser and navigate to `http://localhost:5173`
2. Scroll down to the contact form
3. Fill out the form with a name, email, and message
4. Submit the form
5. You should see a success message if everything is set up correctly

## Deployment Considerations

When deploying to production:

1. Update the CORS settings in `server/server.js` to match your production frontend URL
2. Consider setting up environment variables securely in your hosting provider
3. Use a process manager like PM2 for the Node.js backend
4. Configure a reverse proxy (Nginx/Apache) to forward requests to your backend 