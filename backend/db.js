const mongoose = require('mongoose');
const mongoURI='mongodb+srv://HuzaifaAnsari0:mern123@maniac.4igijfe.mongodb.net/Maniac_MERN?retryWrites=true&w=majority&appName=Maniac'

const mongoDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to DB');

        const FoodItem = mongoose.model('FoodItem', new mongoose.Schema({}), 'food_items');
        const fetchedData = await FoodItem.find({});
        console.log();
    } catch (err) {
        console.log(err);
    }
}

module.exports = mongoDB;