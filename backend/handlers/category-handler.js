
const { model } = require('mongoose');
const Category = require('../db/category');


function addCategory(model){


     let category = new Category({
        name: model.name,
});
    category.save();
    return category.toObject();
}

async function getCategory(){

    let category = await Category.find()
    
    return category.map((cat) => cat.toObject());
}

async function updateCategory(id,model){

     
        await Category.findOneAndUpdate({_id: id},model);
       return;

}


async function getCategoryById(id){
  let category =  await Category.findById(id);
    return category.toObject();
}


async function deleteCategory(id){

    await Category.findOneAndDelete({_id: id});
    return; 
}

module.exports = { addCategory, updateCategory, deleteCategory, getCategory, getCategoryById };
// module.exports = { addCategory, updateCategory, deleteCategory, getCategory };    