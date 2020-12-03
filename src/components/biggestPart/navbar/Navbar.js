import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => (
    <nav><ul>
        <li><Link to="/">Home</Link></li>
        <button><Link to="/big-part">big-part</Link></button>
    </ul></nav>
)

export default Navbar;