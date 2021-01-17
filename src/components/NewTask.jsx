import React, {useState} from 'react';

function NewTask(props) {
    
    const [value, setValue] = useState('');

    const handleChange = (e) =>{
       setValue(e.target.value);
    }

    const addfn = props.addfn;

        return (
            <div className="newTask">
                <input placeholder="Add new task" onChange={handleChange}></input>
                <button className="btn btn-primary" onClick={() => { addfn(value) }}>Add</button>
            </div>
        );
}

export default NewTask;