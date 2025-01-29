const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userController=require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Invalid name write more than three characters'),
    body('password').isLength().withMessage('password must be of 6 or more characters')
],
  userController.registerUser
)







module.exports=router;