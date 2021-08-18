const net = require("net")
const port = 8083;

const server = net.createServer();
const allClients = []

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})


server.on("connection", (connectecClient) => {
    console.log("A Client Connected!")

    allClients.push(connectecClient);
    console.log(connectecClient)
    connectecClient.write("Welcome to my server!⛵")

    connectecClient.on("data", (message) => {
        console.log(`This message was received: ${message}`)

        for(const client of allClients){
            if(client !== connectecClient){
                client.write(`One of us Said: ${message}`)
            }
        }
    })
})