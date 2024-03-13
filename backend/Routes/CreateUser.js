const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret='Mynameishumptydumpty';

router.post('/createuser',[
body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','Incorect Password').isLength({ min: 5 })]
, async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try{
      await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:secPassword
        })
        res.json({success:true})
    } catch(err){
        console.log(err);

        res.json({success:false})
    }
});

router.post('/loginuser',[
  body('email').isEmail(),
  body('password','Incorect Password').isLength({ min: 5 })],async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

      try{
        let userData = await User.findOne({email:req.body.email})
        if(!userData){
          return res.status(400).json({ errors: "Enter Correct Credentials" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

        if(!pwdCompare){
         return res.status(400).json({ errors: "Enter Correct Credentials" });
        } 

        const data={
          user:{
            id:userData.id
          }
        }

        const authToken = jwt.sign(data,jwtSecret);
        return res.json({success:true,authToken:authToken})

      } catch(err){
          console.log(err);
  
          res.json({success:false})
      }
  });

module.exports = router;
