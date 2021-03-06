import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Nav'
// import Category from './Category'
import Questions from './Questions'
import Question from './Questions/Question'
import Home from './Home'


function App(props) {

    let style = {
        fontFamily: "Quicksand"
    }
    return (
        <div className='app-wrapper' style={style}>
            <Navbar></Navbar>
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path="/:categoryId" component={Questions} />
            </Switch>
           
        </div>
    )
}

export default App
