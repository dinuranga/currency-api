import userModel from "../models/userModel.js";

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const userData = await userModel.find();
            res.status(200).json(userData);
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getUserById: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    addNewUser: async (req, res) => {
        try {
            const userData = req.body;
            const newUser = await userModel.create(userData);
            res.status(201).json(newUser);
        } catch (error) {
            console.error("Error adding user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updateUser = await userModel.findByIdAndUpdate(userId, userData, { new: true });
            if (!updateUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updateUser);
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    removeUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const removeUser = await userModel.findByIdAndDelete(userId);
            if (!removeUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(removeUser);
        } catch (error) {
            console.error("Error removing user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

export default userController;
