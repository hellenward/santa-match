import React from 'react'; 
import classes from './CardFront.module.css';

const cardFront = (props) => {
    return (
        <div className={classes.Card}>
            <img src={props.link} alt="codebar" height="100px" width="100px"/>
        </div>
    )
}

export default cardFront;