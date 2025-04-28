import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est obligatoire'],
  },
  email: {
    type: String,
    required: [true, 'L\'email est obligatoire'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est obligatoire'],
  },
  role: {
    type: String,
    enum: ['client', 'admin'],
    default: 'client',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
