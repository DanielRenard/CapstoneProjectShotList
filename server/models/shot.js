const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shotSchema = new Schema({
    // userName: { type: String, trim: true, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user'},
    cameraNumber: { type: Number },
    cameraId: { type: Number },
    name: { type: String, trim: true, required: true },
    setPiece: {type: String, trim: true },
    // image: { data: Buffer, contentType: String },
    image: { type: String}, // this is wrong. storing data url as string. not Buffer.
    show: { type: String, trim: true },
    description: { type: String, trim: true },
    taggedUsers: [{type: Schema.Types.ObjectId, ref: 'user' }],
    approved: {type: Boolean },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('shot', shotSchema);