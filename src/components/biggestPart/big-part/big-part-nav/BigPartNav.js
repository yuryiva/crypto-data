import { Link } from 'react-router-dom'

const BigPartNav = (props) => { 
    return (
    <aside className='leftPart'>
        <div className='findOutMore'>FIND OUT MORE:</div>
        <div className='questions'><b><Link to="/big-part/first-question" onClick={ () => props.onClick() }>What are the Safest Ways to Store Bitcoin?</Link></b></div>
        <div className='questions'><b><Link to="/big-part/second-question" onClick={ () => props.onClick() }>Bitcoin Exchange</Link></b></div>
        <div className='questions'><b><Link to="/big-part/third-question" onClick={ () => props.onClick() }>What Are the Advantages of Paying With Bitcoin?</Link></b></div>
        <div className='questions'><b><Link to="/big-part/fourth-question" onClick={ () => props.onClick() }>The 10 Most Important Cryptocurrencies Other Than Bitcoin</Link></b></div>
        <div className='questions'><b><Link to="/big-part/fifth-question" onClick={ () => props.onClick() }>Should You Buy Gold Or Bitcoin?</Link></b></div>

    </aside>
)}

export default BigPartNav;