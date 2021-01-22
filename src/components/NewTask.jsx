import React, { useState } from 'react';


function NewTask(props) {
    
    const [value, setValue] = useState('');

    const handleChange = (e) =>{
       setValue(e.target.value);
    }

    function confirm() {
        document.getElementById('inputTask').value = '';
        setValue('');
    }

    const addfn = props.addfn;

        return (
            <div className="newTask">
                <input id="inputTask" placeholder="Add new task" onChange={handleChange}></input>
                <button className="btn btn-primary" onClick={() => { addfn(value); confirm()}}>Add</button>
            </div>
        );
}

export default NewTask;