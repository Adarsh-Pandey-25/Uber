import userModel from '../models/user.model.js';
import createUser from '../Services/user.service.js';
import { validationResult } from 'express-validator';
const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { fullName, email, phoneNumber, password } = req.body;


    // Check if user already exists
    const existingUser = await userModel.findOne({
        $or: [
            { email: email },
            { phoneNumber: phoneNumber }
        ]
    });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User with this email or phone number already exists",
        });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user= await createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName || "",

        
        email,
        phoneNumber,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    return res.status(201).json({
        success: true,
        message: "User created successfully",
        user, 
        token,
    });
}
export default registerUser;