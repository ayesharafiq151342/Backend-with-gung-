import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, // Name is required
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true,   // Ensure email is unique
    },
    password: {
      type: String,
      required: true, // Corrected this line
      unique: true
    }
  });
  
const User = mongoose.model('User', userSchema);

export default User;
