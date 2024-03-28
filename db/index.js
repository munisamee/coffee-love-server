// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
// const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

// const MONGO_URI =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/profile-app-server";

// mongoose
//   .connect(MONGO_URI)
//   .then((x) => {
//     const dbName = x.connections[0].name;
//     console.log(`Connected to Mongo! Database name: "${dbName}"`);
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });

// const mongoose = require('mongoose');
// const Image = require('../models/Image'); // Assuming you have defined a Mongoose model for images

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB', err);
// });

// // Retrieve image URLs from Cloudinary (using Cloudinary SDK or HTTP request)
// const cloudinaryUrls = [
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485072/F02859F9-529F-4B1F-81C3-F6584F40E26F_b9y7jx.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485097/F016BB3E-7FEA-4AB9-95B3-592C5A6C62F9_escbnl.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485106/42B56C3E-BE56-4AC9-B4DF-CF4B792DD55D_1_105_c_ar2vpo.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485109/C2F57583-B534-41E6-A29B-5CD48AB16C96_1_105_c_zlkrgz.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485115/73763F88-32DD-4A8C-87E2-4D6172F788E8_1_105_c_e6wigi.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485121/778280D4-3235-48BB-8840-D48819922337_yznqxr.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485124/4A53FB06-A8F5-44A1-87EF-8C1FFE14D823_1_105_c_jjzz6o.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485136/B2E4026A-76D3-4CB6-AF55-A26D717AEBAE_1_105_c_lwsewm.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485139/20922956-91A5-43CE-81BF-E3A825B362D2_1_105_c_tabn7c.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485143/466440BE-6721-436C-BF54-CB6C3EA2B7F6_1_105_c_tufeh6.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485147/A4251016-65A4-40FC-9D27-20DC0DD78AC4_j8o8qy.jpg',
//   'https://res.cloudinary.com/dljoqxbwn/image/upload/v1711485151/56C44A28-8310-4085-AFF1-56952F4F7B8A_1_105_c_b5ysdx.jpg',
//   // Add more image URLs as needed
// ];

// // Insert image metadata into MongoDB
// cloudinaryUrls.forEach(async (url) => {
//   try {
//     const newImage = new Image({
//       title: 'Title',
//       description: 'Description',
//       cloudinaryUrl: url
//     });
//     await newImage.save();
//     console.log('Image saved successfully:', url);
//   } catch (error) {
//     console.error('Error saving image:', error);
//   }
// });

// :information_source: package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
// :information_source: Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/coffee-love-server";
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });