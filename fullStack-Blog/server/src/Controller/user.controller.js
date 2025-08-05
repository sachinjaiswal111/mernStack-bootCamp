
import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {
        const {name, password,email} = req.body;
        if(!name || !password || !email) {
            return res.status(400).json({message: "All fields are required" });
        }

        const existentUser = await User.findOne({ email });
        if (existentUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
         const user = await User.create({name, password: hashedPassword, email});
        if (!user) {
            return res.status(500).json({ message: "User registration failed" });
        }

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Registration failed" });
    }
}