import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
    courseName: String,
    grade: String,
    credits: Number
})

const EntryMessage = mongoose.model('EntryMessage', entrySchema);

export default EntryMessage;