const userController = {
    getAll : (req,res) => {
        res.json({messege: "All Users"});
    },
    getUserById : (req,res) => {
        const userId = req.params.id;
        res.json({name: `${userId}`});
    },
    addUser: (req, res) => {
        res.json({messege: "Add User"});
    },
    updateUser: (req, res) => {
        res.json({messege: "Update User"});
    },
    removeUser: (req, res) => {
        res.json({messege: "Remove User"});
    }
}

export default userController;