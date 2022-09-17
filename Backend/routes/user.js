const User = require('../models/User');

const router = require('express').Router();

router.post('/',async (req,res)=>{
    try {
        let newUser = User({
            name:req.body.userName,
            email:req.body.userEmail,
            image: req.body.imageUrl.trim() === "" ? "https://www.vectorstock.com/royalty-free-vectors/default-vectors" : req.body.imageUrl
        })

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;