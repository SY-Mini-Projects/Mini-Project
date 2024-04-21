const mongoose = require('mongoose');
const mongoURI='mongodb+srv://HuzaifaAnsari0:mern123@maniac.4igijfe.mongodb.net/Maniac_MERN?retryWrites=true&w=majority&appName=Maniac';

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