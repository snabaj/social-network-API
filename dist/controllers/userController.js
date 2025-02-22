import User from '../models/user.js';
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find().populate('thoughts friends');
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('thoughts friends');
        if (!user) {
            res.status(404).json({ message: 'No user with that ID' });
        }
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json(deletedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendId } }, { new: true });
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } }, { new: true });
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
