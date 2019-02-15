import express from 'express';

import app from './app';
import api from './api';

const router = express.Router();

router.use('/api', api);
router.use('/', app);

export default router;
