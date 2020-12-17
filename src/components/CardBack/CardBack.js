import React from 'react'; 
import codebarLink from '../../resources/CardLInks/cardImages/codebar.png';
import classes from './Cardback.module.css';

const cardBack = (props) => {
    return (
        <div className={classes.Card}>
            <img src={codebarLink} alt="codebar" height="100px" width="100px"/>
        </div>
    )
}

export default cardBack;