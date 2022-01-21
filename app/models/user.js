const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserScheme = new mongoose.Schema({
    name: {
        type: 'string'
    },
    avatar: {
        type: 'string',
        default: 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1642561500~hmac=b8332dca0e9838a5909611ab6315a3e7'
    },
    email: {
        type: 'string',
        unique: true,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

UserScheme.plugin(mongoosePaginate);
module.exports = mongoose.model('user', UserScheme);