const http = require("http")

http.createServer("/" , (err , data) => {
    console.log("Server Created!")
})