// const { expressjwt: jwt } = require("express-jwt");

// // Instantiate the JWT token validation middleware
// const isAuthenticated = jwt({
//   secret: process.env.TOKEN_SECRET,
//   algorithms: ["HS256"],
//   requestProperty: "payload",
//   getToken: getTokenFromHeaders,
// });

// // Function used to extract the JWT token from the request's 'Authorization' Headers
// function getTokenFromHeaders(req) {
//   // Check if the token is available on the request Headers
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "Bearer"
//   ) {
//     // Get the encoded token string and return it
//     const token = req.headers.authorization.split(" ")[1];
//     return token;
//   }

//   return null;
// }

// // Export the middleware so that we can use it to create protected routes
// module.exports = {
//   isAuthenticated,
// };


// Require express-jwt (Json Web Token package validates a Token and gets specific data):
const { expressjwt: jwt } = require("express-jwt");
// Create a middleware to check if the user is authenticated:
const isAuthenticated = jwt({
    // Use our secret word:
    secret: process.env.TOKEN_SECRET,
    // Use the same algorithm we used to create the token:
    algorithms: ["HS256"],
    // Get the payload after validating the token:
    requestProperty: "payload",
    // Callback with the request from the server call:
    getToken: (req) => {
        // console.log(req.headers)
        // Validate if the user is sending a token:
        if (!req.headers || !req.headers.authorization) {
            // console.log("There is no token")
            return null
        }
        // Separate the word "Bearer" from the token string
        const tokenArr = req.headers.authorization.split(" ")
        const tokenType = tokenArr[0];
        const token = tokenArr[1];
        // Check clause if the token type is not Bearer
        if (tokenType !== "Bearer") {
            // console.log("Token type not correct")
            return null
        }
        // console.log("Token delivered")
        return token
    }
})
// Export:
module.exports = isAuthenticated