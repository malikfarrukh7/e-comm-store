const mongoose = require('mongoose');
const wishlistSchema =  new nongoose.Schema({
    userId:{type :mongoose.Schema.Types.ObjectId, ref:'User'},
    productsId: Array(string) 
});
const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;