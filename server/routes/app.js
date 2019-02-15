import express from 'express';

import app from '../controllers/app';

const router = express.Router();

router.get('*', app.init);

export default router;
