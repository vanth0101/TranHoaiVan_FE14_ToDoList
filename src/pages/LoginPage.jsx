import React from 'react';
import myTodo from '../components/TodoStore.jsx';
import TimerView from '../components/TimerView.jsx';
import HeaderLink from '../components/HeaderLink';
import '../index.css';

function LoginPage(props) {
    return (
        <div>
            <HeaderLink></HeaderLink>
            <h1>MOBX PAGE</h1>
            <TimerView todo={myTodo} />
        </div>
    );
}

export default LoginPage;