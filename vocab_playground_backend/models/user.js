const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required:true

    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now 
    },

    // progress:[{
    //     type: ObjectId,
    //     ref: 'progress'
    // },
        
// ]

});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

module.exports = mongoose.model('User', userSchema)
