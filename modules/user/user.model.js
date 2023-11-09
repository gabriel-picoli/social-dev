import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 50 },
    lastName: { type: String, required: true, maxlength: 50 },
    user: { type: String, unique: true, required: true, maxLength: 30, unique: true },
    email: { type: String, required: true, maxlength: 100, unique: true },
    password: { type: String, required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema) // se nao existir o "User" ele é criado direto na memoria