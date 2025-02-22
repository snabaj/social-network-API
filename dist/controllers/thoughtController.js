import Thought from '../models/thought.js';
import { Types } from 'mongoose';
export const getThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.json(newThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const deleteThought = async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        res.json(deletedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const addReaction = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, {
            $push: { reactions: { reactionId: new Types.ObjectId(), ...req.body } },
        }, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: "No thought found with that ID" });
        }
        res.json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const removeReaction = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, { $pull: { reactions: { reactionId: req.body.reactionId } } }, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: "No thought found with that ID" });
        }
        res.json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
