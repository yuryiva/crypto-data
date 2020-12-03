import React from 'react';
import '../big-part/biggestPart.css';

const Question1 = () => {

    return(
    <div className='biggest'>
{/* <aside className='leftPart'>
<div className='findOutMore'>FIND OUT MORE:</div>
<div className='questions'><b>What are the Safest Ways to Store Bitcoin?</b></div>
<div className='questions'><b>Bitcoin Exchange</b></div>
<div className='questions'><b>What Are the Advantages of Paying With Bitcoin?</b></div>
<div className='questions'><b>The 10 Most Important Cryptocurrencies Other Than Bitcoin</b></div>
<div className='questions'><b>Should You Buy Gold Or Bitcoin?</b></div>

</aside> */}
<main className='rightPart'>
    <div><b>What are the Safest Ways to Store Bitcoin?</b></div>
    <div><p>After reaching a peak in price late 2017 and subsequently fading from popularity, cryptocurrencies like Bitcoin have experienced a more modest surged once again in 2019. As this has taken place, so too have the number of publicized hacking events increased as well. Given that many investors are new to the system and may not know how to keep their investments secure, hackers are coming up with ingenious ways of stealing funds. Some of the most prominent thefts have been those that have taken place in plain sight: some hacks even blatantly reroute tokens bound for one wallet for another. The victims watch as their tokens are stolen away from them, with nothing they can do about it.</p></div>
    <div>
    <b>KEY TAKEAWAYS:</b>
    </div>
    <div>
    <ul>
        <li>Users can lose bitcoin and other cryptocurrency tokens as a result of theft, computer failure, loss of access keys and more.</li>
        <li>Cold storage (or offline wallets) is one of the safest methods for holding bitcoin, as these wallets are not accessible via the Internet.</li>
        <li>Hardware wallets are potentially even safer, although users face the risk of losing access to their tokens if they misplace or forget their keys.</li>
    </ul>
    </div>
    <div>
    <p>Just the way we keep cash or cards in a physical wallet, bitcoins are also stored in a wallet—a digital wallet. The digital wallet can be hardware-based or web-based. The wallet can also reside on a mobile device, on a computer desktop, or kept safe by printing the private keys and addresses used for access on paper. But how safe are any of these digital wallets? The answer to this depends on how the user manages the wallet. Every wallet contains a set of private keys without which the bitcoin owner cannot access the currency. The biggest danger in bitcoin security is the individual user perhaps losing the private key or having the private key stolen. Without the private key, the user will never see her bitcoins again. Besides losing the private key, a user can also lose her bitcoin by computer malfunctions (crashing a hard drive), by hacking, or by physically losing a computer where the digital wallet resides.</p>
<p>Below, we'll take a look at some of the best ways to store bitcoin safely.</p>
<p><b>Desktop Wallet</b></p>
Desktop wallets are those that are not connected to the Internet; they are also referred to as "cold storage" methods. A desktop wallet offers a number of advantages over an online wallet. While online wallets are easily accessed from anywhere in the world, they are also more vulnerable to potential hacking. Desktop wallets, on the other hand, are accessed only via your private computer, with personal security keys stored just on that machine. Thus, exposure of your security key online is dramatically reduced. Nonetheless, desktop wallets are still susceptible to hacks if your machine gets infected with malware designed to root out keys and steal Bitcoins. 
<p><b>Hardware Wallet</b></p>
More secure than a desktop wallet is a hardware wallet. These wallets are bits of hardware, external devices like USB sticks which you can carry around on your person. An added benefit of a hardware wallet is the complete anonymity with which you can transact. There is no personal information linked to the hardware, so no identifying data which could be leaked. Hardware wallets are resilient to malware, and if you happen to lose the wallet you'll be able to recover the funds using a seed phrase. On the other hand, if you lose the hardware wallet, there is no other way of recovering your bitcoin.
<p><b>Paper Wallet</b></p>
A paper wallet is also a relatively safe way of storing Bitcoin, although it requires a bit more advanced understanding of how digital currencies work. Generate a paper wallet online using any number of dedicated websites, or generate the wallet offline for even greater security. Paper wallets are stored easily because they don't take up a great deal of space, and they also offer true anonymity: they are simply a Bitcoin seed written in some way on a piece of paper.
<p><b>Physical Coins</b></p>
Services are cropping up which allow Bitcoin investors to buy physical Bitcoins. The coin you purchase will have a tamper-proof sticker covering a predetermined amount of Bitcoin. In order to purchase the physical coin, you may need to pay a slight premium over the value of the Bitcoin that you're buying, owing to the cost of the manufacture and shipment of the coin itself.
<p><b>Other Security Precautions</b></p>
<b>Backup</b>
Backup your entire bitcoin wallet early and often. In case of a computer failure, a history of regular backups may be the only way to recover the currency in the digital wallet. Make sure to backup all the wallet.dat files and then store the backup at multiple secure locations (like on a USB, on the hard drive, and on CDs). Not only this, set a strong password on the backup.
<p/><b>Software Updates</b>
Keep your software up to date. A wallet running on non-updated bitcoin software can be a soft target for hackers. The latest version of wallet software will have a better security system in place thereby increasing the safety of your bitcoins. If your software is updated with the latest security fixes and protocol, you may evade a big crisis because of the enhanced security of the wallet. Consistently update your mobile device or computer operating systems and software to make your bitcoins safer.
<p/><b>Multi-Signature</b>
The concept of a multi-signature has gained some popularity; it involves an approval from a number of people (say 3 to 5) for a transaction to take place. Thus this limits the threat of theft as a single controller or server cannot carry out the transactions (i.e., sending bitcoins to an address or withdrawing bitcoins). The people who can transact are decided in the beginning and when one of them wants to spend or send bitcoins, they require others in the group to approve the transaction.
*******



<p>Double spending is a scenario in which a bitcoin owner illicitly spends the same bitcoin twice. With physical currency, this isn't an issue: once you hand someone a $20 bill to buy a bottle of vodka, you no longer have it, so there's no danger you could use that same $20 bill to buy lotto tickets next door. While there is the possibility of counterfeit cash being made, it is not exactly the same as literally spending the same dollar twice. With digital currency, however, as the Investopedia dictionary explains, "there is a risk that the holder could make a copy of the digital token and send it to a merchant or another party while retaining the original."</p>
<p>Let's say you had one legitimate $20 bill and one counterfeit of that same $20. If you were to try to spend both the real bill and the fake one, someone that took the trouble of looking at both of the bills' serial numbers would see that they were the same number, and thus one of them had to be false. What a Bitcoin miner does is analogous to that—they check transactions to make sure that users have not illegitimately tried to spend the same bitcoin twice. This isn't a perfect analogy—we'll explain in more detail below.</p>
Once miners have verified 1 MB (megabyte) worth of bitcoin transactions, known as a "block," those miners are eligible to be rewarded with a quantity of bitcoin (more about the bitcoin reward below as well). The 1 MB limit was set by Satoshi Nakamoto, and is a matter of controversy, as some miners believe the block size should be increased to accommodate more data, which would effectively mean that the bitcoin network could process and verify transactions more quickly.

<p>Note that verifying 1 MB worth of transactions makes a coin miner eligible to earn bitcoin—not everyone who verifies transactions will get paid out.</p>

<p>1MB of transactions can theoretically be as small as one transaction (though this is not at all common) or several thousand. It depends on how much data the transactions take up.</p>
</div>
    

</main>

    </div>
    )
}

export default Question1;
