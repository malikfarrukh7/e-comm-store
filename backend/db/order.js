const mongoose =require("mongoose");
const orderSchema = new mongoose.Schema({
     date: Date,
     items:Array(any),
     status:Number
});

const Order = mongoose.model('order', orderSchema);
module.exports = Order;