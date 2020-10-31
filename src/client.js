// Start point for the client side app
import React from 'react'
import { hydrate } from 'react-dom'
import App from './client/app'

hydrate(<App />, document.querySelector('#root'))
