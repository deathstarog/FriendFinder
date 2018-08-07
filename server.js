var express = ('express')
var bodyparser = ('body-parser')
var path = ('path')
var PORT = process.env.PORT || 3000

var app = express()

app.use(express.static(path.join(__dirname, '/app/public')))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(bodyparser.text())

app.listen(PORT, function() {
    console.log('FriendFinder listening on Port: ' + PORT)
})
