const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
       firstname: {
           type: String,
           required: true,
           minlength: [3, 'first name must be of 3 characters']
       },
         lastname: {
              type: String,
              minlength: [3, 'Last name must be of 3 characters']
         }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minlength: [4, 'email name must be of 3 characters'],
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be of 3 characters']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be greater than 0']
        },
        vehicleType: {
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true
        }
    },
    location: {
        lat: {
            type: Number
        },
        longi:{
            type: Number
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};


const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;
