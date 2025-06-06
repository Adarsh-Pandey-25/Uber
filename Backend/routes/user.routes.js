import express from 'express';
const router=express.Router();
import { body } from 'express-validator';
import registerUser from '../controllers/user.controller.js';

router.post('/register', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email address'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    body('fullName.firstName')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
    body('phoneNumber')
        .isNumeric()
        .withMessage('Phone number must be numeric')
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone number must be between of 10 digits'),],
    registerUser
)
export default router;