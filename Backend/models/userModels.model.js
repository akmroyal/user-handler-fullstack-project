const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        avatar: {
            type: String,
            required: false
        },
        socialLinks: {
            facebook: {
                type: String
            },
            twitter: {
                type: String
            },
            instagram: {
                type: String
            },
            linkedin: {
                type: String
            }
        }

    },
    {
        timestamps: true
    }
)


const User = mongoose.model("User", userSchema)
module.exports = User