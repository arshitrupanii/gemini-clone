import { generateToken } from "../lib/util.js";
import user from "../schema/user.schema.js";
import bcrypt from "bcryptjs"

export const signup = async(req, res) => {
    try {
        const {firstname, email, password} = req.body;

        if(!firstname || !email || !password){
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        const existingUser = await user.findOne({email})

        if(existingUser){
            return res.status(500).json({message : "user is already exist .."})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = await user({
            firstname,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        generateToken(savedUser._id, res)
        
        console.log("object")
        
        return res.status(201).json({
            _id: savedUser._id,
            firstname: savedUser.firstname,
            email: savedUser.email,
        });


    } catch (error) {
        console.log("error in signup ::", error);
        res.status(500).json({ message: `Internal server error in signup ${error}` });        
    }

}


export const signin = async(req, res) => {
    try {
        const {email, password} = req.body;

        const existingUser = await user.findOne({email});

        if(!existingUser){
            return res.status(200).json({message : "please first singup..."});
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        generateToken(user._id, res);

        return res.status(200).json({
            _id: existingUser._id,
            firstname: existingUser.firstname,
            email: existingUser.email,
        });


    } catch (error) {
        console.log("error in login ::", error);
        res.status(500).json({ message: error});
    }
}