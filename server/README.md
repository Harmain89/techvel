# Techvel Backend Server

This is the backend server for handling contact form submissions via SMTP email.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file in the `server` directory with the following content:
```
PORT=5000
EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD
```

Replace `YOUR_EMAIL_PASSWORD` with the actual password for the email account.

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Submit contact form data
  - Required fields: `name`, `email`, `message` 