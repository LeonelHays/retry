require('dotenv').config()
//changes
console.log("web46 rulllzs!!!")
console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.env.USER)
console.log(process.env.FOO)
//more changes
const express = require('express')
//even more changessssss
//cowfidhgdw
const server = express()
server.use(express.json())
// more commets to try and push to the create branch...
server.get('/hello', (req, res) => {
    res.send(`<h1>HELLO THERE!</h1>`)
})

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`listening on ${port}`)
})