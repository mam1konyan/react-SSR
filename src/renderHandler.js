import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/app'

export default () => {
    const content = renderToString(<App />)

    return `<html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="bundle.js"></script>
        </html>`
}
