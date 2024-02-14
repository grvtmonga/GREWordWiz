const mongoose = require('mongoose');

const {Schema} = mongoose;

const wordsSchema = new Schema({
    word:{
        type:String,
        required:true
    },

    meaning:{
        type:String,
        required:true
    },

    sentences:{
        type:Array,
        required:true
    },

    voices:{
        type:
    }
})