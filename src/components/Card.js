import React, { Component } from 'react';
import './Card.scss';

class Card extends Component{
    render(){
        return(
            <div className='Card'>
                <div className='Card__col-1-2'>
                    <h3>Join our community</h3>
                    <h4>30-day, hassle-free money back guarantee</h4>
                    <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>
                <div className='Card__col-2'>
                    <h4 className='Card__col-2__heading'>Monthly Subscription</h4>
                    <p className='Card__col-2__sub'>
                        $29
                        <span> per month</span>
                    </p>
                    <p className='Card__col-2__sub2'>Full access for less than $1 a day</p>
                    <button>Sign Up</button>
                </div>
                <div className='Card__col-3'>
                    <h4 className='Card__col-3__heading'>Why Us</h4>
                    <ul>
                        <li>Tutorials by industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access to our GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decks</li>
                        <li>New videos every week</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Card;