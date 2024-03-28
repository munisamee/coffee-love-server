
// // ℹ️ Gets access to environment variables/settings
// // https://www.npmjs.com/package/dotenv
// require("dotenv").config();

// // ℹ️ Connects to the database
// require("./db");

// // Handles http requests (express is node js framework)
// // https://www.npmjs.com/package/express
// const express = require("express");

// const app = express();

// // ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
// require("./config")(app);

// // 👇 Start handling routes here
// const indexRoutes = require("./routes/index.routes");
// app.use("/api", indexRoutes);

// const authRoutes = require("./routes/auth.routes");
// app.use("/auth", authRoutes);

// // ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// require("./error-handling")(app);

// // Backend: app.js

// // const express = require('express');
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const mongoose = require('mongoose');

// // const app = express();

// // Middleware and database setup (same as before)

// // Configure Cloudinary (same as before)

// // Multer configuration for file upload (same as before)

// // Define upload route
// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.buffer.toString('base64'));
    
//     // Save image URL to MongoDB
//     const Image = mongoose.model('Image', {
//       url: result.secure_url,
//       uploadedAt: new Date()
//     });
//     const image = new Image();
//     await image.save();

//     res.status(201).json({ message: 'Image uploaded successfully', imageUrl: result.secure_url });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Start the server (same as before)


// module.exports = app;

// :information_source: Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();
// :information_source: Connects to the database
require("./db");
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();
// :information_source: This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
// :point_down: Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);
// :exclamation: To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);
module.exports = app;
