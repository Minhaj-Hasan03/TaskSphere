require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// --- Teacher Section & Admin Panel additions (new; existing routes above are untouched) ---
const teacherAuthRoutes = require('./routes/teacherAuth');
const teacherDashboardRoutes = require('./routes/teacherDashboard');
const courseRoutes = require('./routes/courses');
const sectionRoutes = require('./routes/sections');
const teacherStudentRoutes = require('./routes/students');
const attendanceRoutes = require('./routes/attendance');
const syllabusRoutes = require('./routes/syllabus');
const marksRoutes = require('./routes/marks');
const reminderRoutes = require('./routes/reminders');
const adminAuthRoutes = require('./routes/adminAuth');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();