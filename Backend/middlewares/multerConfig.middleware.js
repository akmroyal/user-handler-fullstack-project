//handling the file uploads using cloudinary storage
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../utils/cloudinary.js')

// define cloudinary storage for multer 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        // folder in cloudinary to store avatars
        folder: 'user_avatar',
        // setting file format, for storing only specific format
        allowed_formats: ['jpg','png','jpeg'] 
    }
})

const upload = multer({
    storage: storage, // use cloudinary storage
    limits: {
        // seting the size limits for data
        fileSize: 10 * 1024 * 1024 // 10 mb size limit
    },  
})

module.exports = upload