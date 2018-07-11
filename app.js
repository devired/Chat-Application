const express = require('express')
const app = express()
const io = require("socket.io")(server)

app.set('view engine','ejs')
//middlewares
app.use(express.static('public'))

//routes
app.get('/',(req,res) => {
	res.render('index')
	})
	
//listen on every connection
io.on('connection',(socket)=>{
	console.log('New user connected')
})
	
//listen on port 3000
server = app.listen(3000)

