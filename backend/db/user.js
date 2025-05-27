const mongooese = require('mongoose');
const userSchema = new mongooese.Schema({
    name:string,
    email:string,
    password:string,
    isAdmin:boolean,
});

const user=mongoose.model('User',userSchema);
module.exports=user;