import express from "express";
const app = express()  
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.listen(port, _ => {
    console.log('Listening')
})