import express from 'express'
import render from './renderHandler'

const app = express()

app.use(express.static('public'))
app.get('/', ({ req, res }) => {
    res.send(render())
})

app.listen(3000, () => {
    console.log('===================')
    console.log('Server starting....')
    console.log('===================')
})
