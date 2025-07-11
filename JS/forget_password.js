const express = require('express');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getAuth, sendPasswordResetEmail } = require('firebase/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5000',
    'http://localhost:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'http://127.0.0.1:5000',
    'http://127.0.0.1:8000',
    'http://localhost:5500', // Common Live Server port
    'http://127.0.0.1:5500'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', req.body);
  }
  next();
});

// Firebase configuration validation
const requiredEnvVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars);
  console.error('Please check your .env file and ensure all Firebase configuration variables are set.');
  process.exit(1);
}

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
let firebaseApp;
let auth;

try {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth(firebaseApp);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  process.exit(1);
}

// Forgot Password endpoint
app.post('/api/forgot-password', async (req, res) => {
  try {
    console.log('📧 Password reset request received');
    const { email } = req.body;

    // Validate email
    if (!email) {
      console.log('❌ Email validation failed: Email is required');
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Email validation failed: Invalid email format');
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    console.log(`📧 Sending password reset email to: ${email}`);

    // Send password reset email
    await sendPasswordResetEmail(auth, email, {
      url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/login.html`,
      handleCodeInApp: false
    });

    console.log('✅ Password reset email sent successfully');
    res.status(200).json({
      success: true,
      message: 'Password reset email sent successfully. Please check your email inbox.'
    });

  } catch (error) {
    console.error('❌ Error sending password reset email:', error);
    
    // Handle specific Firebase errors
    let errorMessage = 'An error occurred while sending the password reset email.';
    let statusCode = 400;
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email address.';
        statusCode = 404;
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.';
        statusCode = 400;
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many requests. Please try again later.';
        statusCode = 429;
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        statusCode = 503;
        break;
      case 'auth/configuration-not-found':
        errorMessage = 'Authentication configuration error. Please contact support.';
        statusCode = 500;
        break;
      default:
        errorMessage = error.message || errorMessage;
        statusCode = 500;
    }

    res.status(statusCode).json({
      success: false,
      message: errorMessage
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    port: PORT,
    firebase: {
      initialized: !!firebaseApp,
      projectId: process.env.FIREBASE_PROJECT_ID
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Forgot Password API Server',
    endpoints: {
      health: '/api/health',
      forgotPassword: '/api/forgot-password'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    availableEndpoints: [
      'GET /api/health',
      'POST /api/forgot-password'
    ]
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Forgot password endpoint: http://localhost:${PORT}/api/forgot-password`);
  console.log(`🔥 Firebase Project ID: ${process.env.FIREBASE_PROJECT_ID}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully');
  process.exit(0);
});

module.exports = app;