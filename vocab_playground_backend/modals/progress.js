const mongoose = require('mongoose');

const {Schema} = mongoose;
const { ObjectId } = Schema.Types;

const ProgressSchema = new Schema(
    {
        
        email: {
            type: ObjectId
        },

        streak:{
            type: Number,
            required:true 
        },

        gems:{
            type: Number,
            required:true 
        },

    }
)