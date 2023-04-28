const http = require("http")  // core modules or 2nd user defined modules
// const server=require("./middelwear")  // user defined modules
const dotenv = require("dotenv")
dotenv.config()

const app = http.createServer((req, res) => {
    if (req.url == "/login") {
        res.write(" <h1> Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. <br\> Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</h1>")
        res.end();
    }
    else if (req.url == "/signup") {
        res.write("This is a Signup page")
        res.end(); 
    }
})
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running in the port ${port}`)
})