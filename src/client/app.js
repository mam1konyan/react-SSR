import React from 'react'
import Root from 'components/root'
import ResetStyles from './reset-styles'
import ScrollbarStyles from './scrollbar-styles'

const App = () => {
    return (
        <div>
            <ResetStyles />
            <ScrollbarStyles />
            <Root />
        </div>
    )
}

export default App
