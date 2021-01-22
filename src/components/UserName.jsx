import React, { useEffect } from 'react';
import { observer } from "mobx-react";


function UserName(props) {
    let userStore = props.username.username;
    useEffect(() => {
        userStore = '';
    }, [])
    return (
        <div>
            <p>{props.username.username}</p>
            <input
                onChange={(e) => props.username.setUsername(userStore + e.target.value.charAt(e.target.value.length - 1))}
                type="text" />
        </div>
    );
};

export default observer(UserName);