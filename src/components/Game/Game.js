import React from 'react';
import Images from '../Images/Images';
import '../../App.css';

class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <Images endGame={this.props.endGame} />
            </div>
        )
    }
}

export default Game;