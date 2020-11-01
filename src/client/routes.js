import React from 'react'
import { Route } from 'react-router-dom'
import Root from 'components/root'
import PageOne from 'components/page-one'
import PageTwo from 'components/page-two'
import PageThree from 'components/page-three'
import NotFound from 'components/not-found'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Root} />
            <Route exact path="/page-1" component={PageOne} />
            <Route exact path="/page-2" component={PageTwo} />
            <Route exact path="/page-3" component={PageThree} />
            <Route component={NotFound} />
        </div>
    )
}

export default Routes
