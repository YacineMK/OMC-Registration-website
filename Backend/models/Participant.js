const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const participantSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true
    },
    // lastname: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    motivation: {
        type: String,
        trim: true,
    },
    discord: {
        type: String,
        trim: true,
    },
    isMember: {
        type: Boolean,
    },
    speciality: {
        type: String,
        trim: true,
    },
    deleted: {
        _state: {
            type: Boolean,
            default: false
        },
        _at: {
            type: Date,
        }
    },
    created: {
        _at: {
            type: Date,
            default: () => Date.now()
        }
    }
});

module.exports = mongoose.model('Participant', participantSchema);