import mongoose from "mongoose";
import EntryMessage from '../models/entryMessage.js';

export const getEntries = async (req, res) => {
    try {
        const entryMessages = await EntryMessage.find();

        console.log(entryMessages);

        res.status(200).json(entryMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEntry = async (req, res) => {
    const entry = req.body;

    const newEntry = new EntryMessage(entry);

    try {
        await newEntry.save();

        res.status(201).json(newEntry);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteEntry = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No entry with that ID');

    await EntryMessage.findByIdAndRemove(id);

    res.json({ message: 'Entry successfully deleted.' });

}