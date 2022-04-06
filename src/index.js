const express = require("express")
const path = require("path")
const items = require("./items.json")
const container = {
    name: 'POD Container',
    height: 94,
    width: 80,
    length: 78
}

const app = express()  
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { container, items })
});

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.listen(port, _ => {
    console.log(`App running on port ${port}`)
})