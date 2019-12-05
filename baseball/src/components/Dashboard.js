import React from 'react';

const Dashboard = (props) => {
    const strike = () => {props.setStrikes(props.strikes + 1)};
    const ball = () => {props.setBalls(props.balls + 1)};
    const foul = () => {props.setStrikes(props.strikes < 2 ? props.strikes + 1 : props.strikes)};
    const hit = () => {props.setBalls(0); props.setStrikes(0);};
    
    return (
        <div className='dashboard'>
            <button onClick = {() => strike()}>Strike</button>
            <button onClick = {() => ball()}>Ball</button>
            <button onClick = {() => foul()}>Foul</button>
            <button onClick = {() => hit()}>Hit</button>
        </div>
    )
}

export default Dashboard;