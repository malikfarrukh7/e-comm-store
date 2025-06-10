const express = require('express');
const router = express.Router();
const { addBrand, updateBrand, deleteBrand, getBrands, getBrand } = require('../handlers/brand-handler');

const { model } = require('mongoose');



router.post("", async (req, res) => {


        let model = req.body;
        let result = await addBrand(model);
        res.send(result) ;

})


router.put("/:id", async (req, res) => {


        let model = req.body;
        let id = req.params["id"];
        await updateBrand(id,model);
        res.send({ message: "Brand updated successfully" }) ;

})


router.delete("/:id", async (req, res) => {
        let id = req.params["id"];
        await deleteBrand(id);
        res.send({ message: "Brand deleted successfully" }) ;
})

router.get("/:id", async (req, res) => {
        let id = req.params["id"];
        let Brand= await getBrand(id);
        res.send(Brand);
})

router.get("", async (req, res) => {

        let Brands= await getBrands();
        res.send(Brands);
})

module.exports = router;