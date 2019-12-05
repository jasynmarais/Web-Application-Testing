import React from 'react';

const Display = props => {
    return (
        <div className='scoreboard'>
            <h2>Balls: {props.balls}</h2>
            <h2>Strikes: {props.strikes}</h2>
        </div>
    )
}

export default Display;