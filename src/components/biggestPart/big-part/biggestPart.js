import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './biggestPart.css'
import Question1 from '../first/question1'
import Question2 from '../second/question2'
import Third from '../third/Third'
import Fourth from '../fourth/Fourth'
import Fifth from '../fifth/Fifth'
import BigPartText from './big-part-text/BigPartText'
import BigPartNav from './big-part-nav/BigPartNav'



class BiggestPart extends Component {

    state = {
        onNewsPress: false,
        class: false
    }

    onNewsPressed = () => {
        this.setState({
            onNewsPress: true
        })
    }

    handleLinkClick = () => {
        this.setState({
            class: true
        })
    }
    
    render() {

      if (this.state.class) {
        console.log('works!!!')
      }
        return (
            
                <div className='biggestPart'>

                    <BigPartNav 
                        onClick={this.handleLinkClick}
                    />
                    <BigPartText className={this.state.class}/>

                

                <Switch>
                    <Route path="/big-part/first-question">
                        <Question1 />
                    </Route>
                    <Route path="/big-part/second-question">
                        <Question2 />
                    </Route>
                    <Route path="/big-part/third-question">
                        <Third />
                    </Route>
                    <Route path="/big-part/fourth-question">
                        <Fourth />
                    </Route>
                    <Route path="/big-part/fifth-question">
                        <Fifth />
                    </Route>
                </Switch>
                </div>
        )
    }
}

export default BiggestPart;
