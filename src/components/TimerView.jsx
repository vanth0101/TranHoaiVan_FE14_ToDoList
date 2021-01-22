import React from 'react';
import { observer } from "mobx-react";
import NewTask from "./NewTask.jsx";

function TimerView(props) {
    const addfn = (item) => {
        props.todo.addtask(item);
    }

    const deleteTask = (item) => {
        props.todo.deleteTask(item);
    }

    const editTask = (item, index) => {
        props.todo.editTask(item, index);    
    }

    return (
        <div>
            {props.todo.todoTask.map((item, index) => <div onClick={()=>deleteTask(index)}>{item.name}</div>)}
            <NewTask addfn={addfn}></NewTask>
        </div>
    );
}

export default observer(TimerView);