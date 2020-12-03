import React, {Component} from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './biggestPart.css'
import Question1 from '../first/question1'
import Question2 from '../second/question2'
import Third from '../third/Third'
import Fourth from '../fourth/Fourth'
import Fifth from '../fifth/Fifth'


class BiggestPart extends Component {

state={
    onNewsPress: false
}

onNewsPressed =() => {
    this.setState({
        onNewsPress: true
    })

}
    render () {

        
    return (
        <>
            <div className='biggestPart'>
               
                {
                    
                    this.onNewsPress ?
                    <>
                    <aside className='leftPart'>
                    <div className='findOutMore'>FIND OUT MORE:</div>
                    <div className='questions'><b><Link to="/big-part/first-question">What are the Safest Ways to Store Bitcoin?</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/second-question">Bitcoin Exchange</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/third-question">What Are the Advantages of Paying With Bitcoin?</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/fourth-question">The 10 Most Important Cryptocurrencies Other Than Bitcoin</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/fifth-question">Should You Buy Gold Or Bitcoin?</Link></b></div>

                    </aside>


                <main className='rightPart'>
    
    Question1

</main>
</>

                    

                    :
                    
                    <div className='biggestPart'>

                    <aside className='leftPart'>
                    <div className='findOutMore'>FIND OUT MORE:</div>
                    <div className='questions'><b><Link to="/big-part/first-question">What are the Safest Ways to Store Bitcoin?</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/second-question">Bitcoin Exchange</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/third-question">What Are the Advantages of Paying With Bitcoin?</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/fourth-question">The 10 Most Important Cryptocurrencies Other Than Bitcoin</Link></b></div>
                    <div className='questions'><b><Link to="/big-part/fifth-question">Should You Buy Gold Or Bitcoin?</Link></b></div>

                </aside>

                    <main className='rightPart'>
                    <div><b>What is Bitcoin Mining?</b></div>
                    <div><p>Cryptocurrency mining is painstaking, costly, and only sporadically rewarding. Nonetheless, mining has a magnetic appeal for many investors interested in cryptocurrency because of the fact that miners are rewarded for their work with crypto tokens. This may be because entrepreneurial types see mining as pennies from heaven, like California gold prospectors in 1849. And if you are technologically inclined, why not do it?</p></div>
                    <div>
                        <b>KEY TAKEAWAYS:</b>
                    </div>
                    <div>
                        <ul>
                            <li>By mining, you can earn cryptocurrency without having to put down money for it.</li>
                            <li>Bitcoin miners receive Bitcoin as a reward for completing "blocks" of verified transactions which are added to the blockchain.</li>
                            <li>Mining rewards are paid to the miner who discovers a solution to a complex hashing puzzle first, and the probability that a participant will be the one to discover the solution is related to the portion of the total mining power on the network.</li>
                            <li>You need either a GPU (graphics processing unit) or an application-specific integrated circuit (ASIC) in order to set up a mining rig.</li>
                        </ul>
                    </div>
                    <div>However, before you invest the time and equipment, read this explainer to see whether mining is really for you. We will focus primarily on Bitcoin (throughout, we'll use "Bitcoin" when referring to the network or the cryptocurrency as a concept, and "bitcoin" when we're referring to a quantity of individual tokens).


                    The primary draw for many mining is the prospect of being rewarded with Bitcoin. That said, you certainly don't have to be a miner to own cryptocurrency tokens. You can also buy cryptocurrencies using fiat currency; you can trade it on an exchange like Bitstamp using another crypto (as an example, using Ethereum or NEO to buy Bitcoin); you even can earn it by shopping, publishing blog posts on platforms that pay users in cryptocurrency, or even set up interest-earning crypto accounts. An example of a crypto blog platform is Steemit, which is kind of like Medium except that users can reward bloggers by paying them in a proprietary cryptocurrency called STEEM. STEEM can then be traded elsewhere for Bitcoin.
                    The Bitcoin reward that miners receive is an incentive that motivates people to assist in the primary purpose of mining: to legitimize and monitor Bitcoin transactions, ensuring their validity. Because these responsibilities are spread among many users all over the world, Bitcoin is a "decentralized" cryptocurrency, or one that does not rely on any central authority like a central bank or government to oversee its regulation.
<p><b>How To Mine Bitcoins</b></p>
Miners are getting paid for their work as auditors. They are doing the work of verifying the legitimacy of Bitcoin transactions. This convention is meant to keep Bitcoin users honest and was conceived by bitcoin's founder, Satoshi Nakamoto. By verifying transactions, miners are helping to prevent the "double-spending problem."
<p>Double spending is a scenario in which a bitcoin owner illicitly spends the same bitcoin twice. With physical currency, this isn't an issue: once you hand someone a $20 bill to buy a bottle of vodka, you no longer have it, so there's no danger you could use that same $20 bill to buy lotto tickets next door. While there is the possibility of counterfeit cash being made, it is not exactly the same as literally spending the same dollar twice. With digital currency, however, as the Investopedia dictionary explains, "there is a risk that the holder could make a copy of the digital token and send it to a merchant or another party while retaining the original."</p>
                        <p>Let's say you had one legitimate $20 bill and one counterfeit of that same $20. If you were to try to spend both the real bill and the fake one, someone that took the trouble of looking at both of the bills' serial numbers would see that they were the same number, and thus one of them had to be false. What a Bitcoin miner does is analogous to that—they check transactions to make sure that users have not illegitimately tried to spend the same bitcoin twice. This isn't a perfect analogy—we'll explain in more detail below.</p>
Once miners have verified 1 MB (megabyte) worth of bitcoin transactions, known as a "block," those miners are eligible to be rewarded with a quantity of bitcoin (more about the bitcoin reward below as well). The 1 MB limit was set by Satoshi Nakamoto, and is a matter of controversy, as some miners believe the block size should be increased to accommodate more data, which would effectively mean that the bitcoin network could process and verify transactions more quickly.

<p>Note that verifying 1 MB worth of transactions makes a coin miner eligible to earn bitcoin—not everyone who verifies transactions will get paid out.</p>

                        <p>1MB of transactions can theoretically be as small as one transaction (though this is not at all common) or several thousand. It depends on how much data the transactions take up.</p>
                    </div>


                </main>

            




</div>
                }

                </div>

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
        </>


    )
}}

export default BiggestPart;
