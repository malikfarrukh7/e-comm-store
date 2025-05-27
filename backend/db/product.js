const mongooese = require('mongoose');
const productSchema = new mongooese.Schema({
    name:string,
    discription:string,
    shotDiscription:string,
    purchasePrice:number,
    sellingPrice:number,
    images:Array(string),
    categoryId: [{type: mongoose.Schema.Types.ObjectId, ref: 'category'}],
});

const Product=mongoose.model('products',productSchema);
module.exports=Product;