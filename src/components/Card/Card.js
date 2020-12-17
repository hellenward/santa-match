import React, { Component } from 'react';
import CardBack from '../CardBack/CardBack'; 
import CardFront from '../CardFront/CardFront';

class Card extends Component {
    constructor() {
        super(); 

        this.state = {
            cardFaceShowing: false
        }; 
    }

    handleClick = (event) => {
        var cardFaceShowing = !this.state.cardFaceShowing;
        this.setState({cardFaceShowing: cardFaceShowing})  
    }

    updateFromBoard =  () => {
        let cardFaceShowing = true;
        cardFaceShowing = false; 
        this.setState({ cardFaceShowing: cardFaceShowing })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.allCardsFaceDown !== this.props.allCardsFaceDown) {
            this.updateFromBoard();
        }
    }

    render() {

        let card = <CardBack />

        if (this.state.cardFaceShowing) {
            card = <CardFront link={this.props.link} /> 
        }

        return (
            <div onClick={(e) => this.handleClick(e)}>
                {card}
            </div>
            )
    }
}

export default Card;