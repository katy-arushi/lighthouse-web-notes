const http = require('http')
const port = 8080


const server = http.createServer((req, res) => {
    
    const requestInfo = `${req.method} ${req.url}`
    console.log(requestInfo)

    const homePage = "GET /"
    
    if(requestInfo === homePage){
        res.write("This is going to be my home page!")
    }else if(requestInfo === 'GET /about'){
        res.write("This is going to be the ABOUT page!")
    }else{
        res.write("It's not handled yet!")
    }
    
    res.end()
})

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})