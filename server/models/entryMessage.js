import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
    semester: String,
    courseName: String,
    grade: String,
    credits: Number,
    assignments: [{assignment: String, assignmentGradeNumerator: Number, assignmentGradeDenominator: Number}],
})

const EntryMessage = mongoose.model('EntryMessage', entrySchema);

export default EntryMessage;