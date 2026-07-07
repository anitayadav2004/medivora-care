import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';

import {
createServiceAppointment,
  confirmServicePayment,
  getServiceAppointments,
  getServiceAppointmentById,
  updateServiceAppointment,
  cancelServiceAppointment,
  getServiceAppointmentStats,
  getServiceAppointmentByPatient } from '../controllers/serviceAppointmentController.js';

const serviceAppointmentRouter = express.Router();

serviceAppointmentRouter.get("/", getServiceAppointments);
serviceAppointmentRouter.get("/confirm", confirmServicePayment);
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats);

serviceAppointmentRouter.post("/", clerkMiddleware(), requireAuth(), createServiceAppointment);
serviceAppointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getServiceAppointmentByPatient);
serviceAppointmentRouter.get("/:id", getServiceAppointmentById);

serviceAppointmentRouter.post("/:id/cancel", cancelServiceAppointment);
serviceAppointmentRouter.put("/:id", updateServiceAppointment);

export default serviceAppointmentRouter;