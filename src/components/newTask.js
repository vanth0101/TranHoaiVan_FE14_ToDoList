import React, { Component } from 'react';

class newTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
    }

    handleChange = (e) =>{
        this.setState({value:e.target.value});
    }

    render() {
        const addfn = this.props.addfn;
        return (
            <div className="newTask">
                <input placeholder="Add new task" onChange={this.handleChange}></input>
                <button className="btn btn-primary" onClick={() => { addfn(this.state.value) }}>Add</button>
            </div>
        );
    }
}

export default newTask;