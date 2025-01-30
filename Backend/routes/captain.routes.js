const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const { body } = require('express-validator');
const authMiddleWare = require('../middleware/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Invalid name write more than three characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be of 6 or more characters'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Invalid color write more than three characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Invalid plate write more than three characters'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Invalid capacity write more than 0'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be of 6 or more characters')
],
    captainController.loginCaptain
);

router.get('/profile',authMiddleWare.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleWare.authCaptain, captainController.logoutCaptain);

module.exports = router;
