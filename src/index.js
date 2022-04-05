const express = require("express")
const path = require("path")

const app = express()  
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.listen(port, _ => {
    console.log(`App running on port ${port}`)
})