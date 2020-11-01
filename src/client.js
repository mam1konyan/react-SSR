// Start point for the client side app
import React from 'react'
import { hydrate } from 'react-dom'
import Routes from './client/routes'
import { BrowserRouter } from 'react-router-dom'

hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root')
)
