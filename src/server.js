import express from 'express'
import render from './renderHandler'

const app = express()

app.use(express.static('public'))
app.get('*', (req, res) => {
    res.send(render(req))
})

app.listen(3000, () => {
    console.log('======================')
    console.log('Server is starting....')
    console.log('======================')
})
