import User from '../models/UserModel.mjs';
import secrets from '../config/secrets.mjs'
import jwt from 'jsonwebtoken';

export default {
    createAdmin: async(req, res) => {
        try {
            const user = new User({
                name: 'Ruben Alpredo Tampubolon',
                email: 'alpredo.tampubolon@gmail.com',
                password: '12345',
                isAdmin: true,
            });
            
            user.password = await user.encryptPassword(user.password);
            await user.save();

            res.send({success: true, user });
        } catch (error) {
            res.send({ msg: error.message, error })
        }
    },

    signIn: async (req,res) => {
        const {email, password} = req.body
        try {
            const user = await User.findOne({ email });
            
            if(!user) {
                return res.status(400).send({ 
                    success: false,
                    token: null, 
                    message: 'The email does not exists'
                });
            } 
            const checkPassword = await user.validatePassword(password, user.password);

            if(!checkPassword) {
                return res.status(401).send({ 
                    success: false, 
                    token: null, 
                    message: 'Email and password not match'
                });
            }

            const token = jwt.sign({id: user._id}, secrets.JWT_SECRET, {expiresIn: '24h'});

            return res.status(200).json({
                success: true, 
                token: token, 
                message: 'Login successfully',
                auth: true
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ success: false, message: error.message})
        }
    },

    signUp: async (req, res) => {
        try {
            const {name, email, password} = req.body;
            
            const user = new User({
                name,
                email, 
                password
            });

            user.password = await user.encryptPassword(user.password);
            await user.save();

            const token = jwt.sign({ id: user._id, }, secrets.JWT_SECRET, {expiresIn: '24h'});

            console.log(token);

            return res.status(200).json({ 
                success: true,
                token: token,
                message: 'Registration success',
                auth: true, 
            })

        } catch (error) {
            console.log(error);
            return res.status(500).send({ success: false, message: error.message})
        }
    },
}
