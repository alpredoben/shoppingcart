import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, dropDups: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false},
});

UserSchema.methods.encryptPassword = async(pwd) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(pwd, salt);
}


UserSchema.methods.validatePassword = function(pwd){
    return bcrypt.compare(pwd, this.password);
};

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;