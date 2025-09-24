import express from 'express';
import { services } from '../data/beautyServices.js';

const router = express.Router();


// Define a route handler for the default home page
router.get('/', (req, res) => {
    res.json(services);
});

export default router;  