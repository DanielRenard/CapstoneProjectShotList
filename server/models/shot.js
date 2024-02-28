const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shotSchema = new Schema({
    userName: { type: String, trim: true },
    id: { type: Number },
    name: { type: String, trim: true, required: true },
    setPiece: {type: String, trim: true },
    image: { data: Buffer, contentType: String },
    show: { type: String, trim: true },
    description: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('shot', shotSchema);