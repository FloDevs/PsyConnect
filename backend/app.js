import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // autoriser ton frontend React
  credentials: true,
}));
app.use(cookieParser());

// Test de route racine
app.get('/', (req, res) => {
  res.send('PsyConnect API is running 🚀');
});

// Ici tu pourras ajouter tes routes plus tard
// app.use('/api/auth', authRoutes);
// app.use('/api/appointments', appointmentRoutes);
// etc.

export default app;
