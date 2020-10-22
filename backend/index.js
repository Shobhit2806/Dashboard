const mongoose = require('mongoose');
const express = require('express');
const app = express()
const {demo} = require("./models/demo");
const csv = require('csv-parser')
const fs = require('fs')
const air = require('./routes/air')

mongoose.connect('mongodb://localhost/dashboard')
    .then(()=>{
        console.log('Connected to MongoDB...')
    })
.catch(err=>console.error('Could not connect to MongoDB.. ',err ))


app.use(express.json());
app.use('/api/air',air);

// var count=0;
// fs.createReadStream('demo.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     //let zipArr = data['zips'].split(" ");
//     console.log(data.Date);
//     var newdemo = new demo({
//       date: data['Date'],
//       time:data['Time']
//     });
//     console.log(newdemo);
//     newdemo.save(function(err, item) {
//       if (item) {
//         count++
//         console.log(", "+count);
//       }
//       if (err) {
//        console.log("Error")
//       }
//     });
//     })
//   .on('end', () => {
//     console.log("Done");
//   });




// const results = [];
 
// fs.createReadStream('demo.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//     // [
//     //   { NAME: 'Daffy Duck', AGE: '24' },
//     //   { NAME: 'Bugs Bunny', AGE: '22' }
//     // ]
//   });





//PORT

const port = process.env.port || 3000

app.listen(port,()=>console.log(`Listening on Port ${port}....`))