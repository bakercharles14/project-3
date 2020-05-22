const express = require('express')
const productRouter = require('./controllers/product.js')
const articleRouter = require('./controllers/article.js')
const cartRouter = require('./controllers/cart.js')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

    / app.use(express.static(`${__dirname}/client/build`))


app.use('/api/product', productRouter)
app.use('/api/article', articleRouter)
app.use('/api/cart', cartRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
