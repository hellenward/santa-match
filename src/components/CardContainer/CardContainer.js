import React, { Component } from 'react'; 
import Game from '../Game/Game';
import EndGame from '../EndGame/EndGame';
import '../../App.css';

class CardContainer extends Component {
    state = {
        showEndGame: false
    }

    handleEndGame = (boolean) => {
        if(boolean) {
            this.setState({ showEndGame: boolean });
        } else {
            this.setState({ showEndGame: boolean })
        }
    }

    render() {
        const {showEndGame} = this.state;

        return (
            <div class="container">
                {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
                <Game endGame={this.handleEndGame} />
            </div>
        )
    }             
}

export default CardContainer;