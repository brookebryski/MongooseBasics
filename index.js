const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connection open!")
})
.catch(err => {
    console.log("there was an error:")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
//const barbie = new Movie({title: 'Barbie', year: 2023, score: 10, rating: 'PG-13'});

// Movie.insertMany([
//     {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'},
//     {title: '500 Days of Summer', year: 2010, score: 9, rating: 'PG-13'},
//     {title: 'Tar', year: 2022, score: 8.7, rating: 'R'},
//     {title: 'Once Upon a Time in Hollywood', year: 2019, score: 8.4, rating: 'R'},
//     {title: 'Nomadland', year: 2020, score: 9.2, rating: 'PG-13'}
// ])
// .then(data => {
//     console.log('success')
//     console.log(data);
// })