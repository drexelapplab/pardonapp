const express = require('express');
const router = express.Router();
const userdata = require('../models/userdata')

router.get('/',(req,res) => {
    userdata.getAllUsers((err, lists)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all user data. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();

        }
    });
});

router.post('/', (req,res,next) => {
    let newUser = new userdata({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    });
    userdata.addUser(newUser,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new user. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

router.delete('/:id', (req,res,next)=> {
    let id = req.params.id;
    userdata.deleteUserById(id,(err,list) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the user. Error: ${err}`});
        }
        else if(list) {
            res.json({success:true, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

module.exports = router;