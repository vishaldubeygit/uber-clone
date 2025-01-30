const userModel = require('../models/user.models');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);

  const { fullname, email, password } = req.body;

  try {
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}


module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  const user = await userModel.findOne({email}).select('+password');

  if (!user) {
    return res.status(401).json({msg: 'Invalid credentials'});
  }
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({msg: 'Invalid credentials'});
  }
  const token = user.generateAuthToken();
   res.status(200).json({token, user});
}
