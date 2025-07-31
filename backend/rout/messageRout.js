/*import express from "express";
import { getMessages, sendMessage } from "../routControlers/messageroutControler.js";
import isLogin from "../middleware/isLogin.js";

const router = express.Router();
router.post('/send/:id', isLogin, sendMessage);
router.get('/:id', isLogin, getMessages);

export default router;*/

import express from "express";
import { getMessages, sendMessage } from "../routControlers/messageroutControler.js";
import isLogin from "../middleware/isLogin.js";

const router = express.Router();

// Send message to specific user
router.post('/send/:id', isLogin, sendMessage);

// Get messages from specific user (safe)
router.get('/:id([a-zA-Z0-9]+)', isLogin, getMessages);

export default router;





