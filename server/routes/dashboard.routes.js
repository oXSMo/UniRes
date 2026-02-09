import express from "express";

import { adminAuth, userAuth, workerAuth } from "../utils/userAuth.js";
import { createRoom, createUser, getRooms, getUsers } from "../controllers/dashboard.js";

const router = express.Router();

router
  .post("/createUser", userAuth, adminAuth, createUser)
  .post("/createRoom", userAuth, adminAuth, createRoom)
  .get("/getUsers", userAuth, adminAuth, getUsers)
  .get("/getRooms", userAuth, adminAuth, getRooms)

export default router;
