import React from 'react'
import { Route } from 'react-router-dom'
import Root from 'components/root'
import PageOne from 'components/pageOne'
import PageTwo from 'components/pageTwo'
import PageThree from 'components/pageThree'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Root} />
        </div>
    )
}

export default Routes
