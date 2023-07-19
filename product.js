const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connection open!")
})
.catch(err => {
    console.log("there was an error:")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    }
}); 

const Product = mongoose.model('Product', productSchema);

const shorts = new Product({name: 'lulu shorts', price: 45});
shorts.save()
.then(data => {
    console.log("It worked!")
    console.log(data);
})
.catch(err => {
    console.log("that did not work")
    console.log(err);
})