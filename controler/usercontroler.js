import User from '../models/user.js';
  export const createUSer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input before creating the user
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields (name, email, password) are required." });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(200).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error("Error creating user:", err); // Log the error to the console
    res.status(400).json({ message: "Error creating user", error: err.message || err });
  }
};

  export const getUser =  async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the database
      res.status(200).json({ message: "Users fetched", users });
    } catch (err) {
      res.status(400).json({ message: "Error fetching users", error: err });
    }
  }
  export const Deleteuser = async (req, res) => {
    try {
      const id = req.params.id;
      // Use the ObjectId correctly to find and delete the user
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (err) {
      res.status(500).json({ message: "Error deleting user", error: err });
    }
  }
  export const UpdateUser =async (req, res) => {
    try {
      const id = req.params.id;  // Capturing the ID from the URL
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }); // Update user and return updated document
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({
        message: "User updated successfully",
        updatedUser
      });
    } catch (err) {
      res.status(404).json({ message: "Error updating user", error: err });
    }
  }
