import React from 'react';
import myTodo from '../components/TodoStore.jsx';
import TimerView from '../components/TimerView.jsx';
import '../index.css';

function LoginPage(props) {
    return (
        <div>
            <h1>MOBX PAGE</h1>
            <TimerView todo={myTodo} />
        </div>
    );
}

export default LoginPage;