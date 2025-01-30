const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const userSchemma=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'firstt name must be of 3 characters']
         },
         lastname:{
            type:String,
            minlength:[3,'Last name must be of 3 characters']
         }
     },
     email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'email name must be of 3 characters']
     },
     password:{
        type:String,
        required:true,
        select:false
     },
     socketId:{
        type:String
     }

});


userSchemma.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, email: this.email },
      process.env.JWT_SECRET
    );
    return token;
  };

userSchemma.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
};

userSchemma.statics.hashPassword= async function(password){
    return await bcrypt.hash(password,10);
};

const userModel=mongoose.model('user',userSchemma);

module.exports=userModel;