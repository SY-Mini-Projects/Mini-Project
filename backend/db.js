const mongoose = require('mongoose');
const mongoURI='mongodb+srv://kaushalbhadra15:Kuntal120598@cluster0.h9onpih.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async() => {
    await mongoose.connect(mongoURI);
    console.log('Connected to DB');

    const FoodItem = mongoose.model('FoodItem', new mongoose.Schema({}), 'food_items');
    const fetchedData = await FoodItem.find({}).exec();

    const FoodCategory = mongoose.model('FoodCategory', new mongoose.Schema({}), 'foodCategory');
    const fetchedCategory = await FoodCategory.find({}).exec();
    
    if(!fetchedData || !fetchedCategory) {
        console.log("Error fetching data");
    } else {
        global.food_items = fetchedData;
        global.foodCategory = fetchedCategory;
    }
}

module.exports = mongoDB;