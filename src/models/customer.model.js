let mongoose = require ('mongoose');
const server= 'localhost:27017';
const database= 'DbTestName';
const user= 'app1';
const password ='app123';

 mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);
let CustomerSchema = new mongoose.Schema ({
    name : String,
    email:{
        type :String,
        require :true,
        unique :true
    }
});

module.exports = mongoose.model ('Customer',CustomerSchema);