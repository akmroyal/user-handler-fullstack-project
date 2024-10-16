const express = require("express")
const User = require('../models/userModels.model.js')
const route = express.Router();



// Create the user with frontend details :
route.post('/', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const userAdded = await User.create(
            {
                name: name,
                email: email,
                age: age
            }
        )
        res.status(201).json(userAdded)
    } catch (error) {
        console.log("Error due to adding the data", error)
        res.status(404).json({ error: error.message })
    }
})

// Get all the stored user data with his details :
route.get('/', async (req, res) => {
    try {
        const showAll = await User.find()
        if (!showAll) {
            return res.status(404).json({ message: "Users not found" });
        }
        res.status(200).json(showAll)
    } catch (error) {
        console.log("Error while fetching the data from DB :(", error);
        res.status(500).json({ error: error.message })
    }
})

// getting one user only 
route.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const singleUser = await User.findById({ _id: id })
        if (!singleUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(singleUser)
    } catch (error) {
        console.log("Error to get your user :(", error);
        res.status(500).json({ error: error.message })
    }
})

// deleting a user  
route.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("deleted data is : ", deleteUser);
        res.status(200).json(deleteUser)
    } catch (error) {
        console.log("error to delete user", error)
        res.status(500).json({ error: error.message })
    }
})


// updating the existing user details 
route.patch('/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body

    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!updateUser) {
            res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(updateUser)
    } catch (error) {
        console.log("Error while updating the user details ", error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = route;