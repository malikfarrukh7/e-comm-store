const express = require('express');
const router = express.Router();
// const Category = require('../db/category');
const  { addCategory, updateCategory, deleteCategory,getCategory,getCategoryById } = require('../handlers/category-handler');       
const { model } = require('mongoose');

router.post("", async (req, res) => {


        let model = req.body;
        let category = await addCategory(model);
        res.send(category) ;

})

router.get("", async (req, res) => {


      
        let result = await getCategory();
        res.send(result) ;

})

router.get("/:id", async (req, res) => {

        let id = req.params["id"];
      
        let result = await getCategoryById(id);
        res.send(result) ;

})

router.put("/:id", async (req, res) => {


        let model = req.body;
        let id = req.params["id"];
        await updateCategory(id, model);
        res.send({message: "category updated successfully"}) ;
})


router.delete("/:id", async (req, res) => {
        let id = req.params["id"];
        await deleteCategory(id);
        res.send({message: "category deleted successfully"}) ;
})

module.exports =router;