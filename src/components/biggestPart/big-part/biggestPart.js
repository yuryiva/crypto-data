import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './biggestPart.css'
import Question1 from '../first/question1'
import Question2 from '../second/question2'
import Third from '../third/Third'
import Fourth from '../fourth/Fourth'
import Fifth from '../fifth/Fifth'



const BiggestPart = () => {

  return (

      <div className='biggestPart'>
        <nav><ul>
          <li><Link to="/big-part/first-question">first-question</Link></li>
          <li><Link to="/big-part/second-question">second-question</Link></li>
          <li><Link to="/big-part/third-question">third-question</Link></li>
          <li><Link to="/big-part/fourth-question">fourth-question</Link></li>
          <li><Link to="/big-part/fifth-question">fifth-question</Link></li>
        </ul></nav>

      <Switch>

        <Route exact path="/big-part">
        </Route>

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

      <div>
  <h1>Hello Stranger</h1>
  <p>hjfdvhjdgfhjkfdhjkfdghkjdgfhkjegrhkjdfgrkhjegr</p>
  <h1>By by Luka!</h1>
  <p>ghjdgfhjdfghjkdfgdkghj</p>
</div>

</div>

  )
}

export default BiggestPart;
