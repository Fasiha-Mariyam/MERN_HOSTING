const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Role: {
        type: String,
        default: "user"
    },
    ProfileImage: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
    },
    Joining:{
        type: Date,
        default: Date.now
    }
})
const User = model('user', UserSchema)
module.exports = User