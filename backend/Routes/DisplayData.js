const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try{
        res.status(200).send({foodItems: global.food_items, foodCategory: global.foodCategory});
        
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");   
    }
})

module.exports = router;