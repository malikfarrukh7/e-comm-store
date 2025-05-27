
const { model } = require('mongoose');
const Category = require('../db/category');


function addCategory(model){


     let category = new Category({
        name: model.name,
});
    category.save();
    return category.toObject();
}


async function updateCategory(id,model){

     
        await Category.findOneAndUpdate({_id: id},model);
       return;

}


async function deleteCategory(id){

    await Category.findOneAndDelete({_id: id});
    return; 
}

module.exports = { addCategory, updateCategory, deleteCategory }; 