import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
import { initWhatsApp } from './services/whatsappService';


const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
import authRoutes from './routes/authRoutes';
import clientRoutes from './routes/clientRoutes';
import examRoutes from './routes/examRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import whatsappRoutes from './routes/whatsappRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/whatsapp', whatsappRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await initWhatsApp();
    } catch (err) {
        console.error('Error starting WhatsApp', err);
    }
});

export { app, prisma };
