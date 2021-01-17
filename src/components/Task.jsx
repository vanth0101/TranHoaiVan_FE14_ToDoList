import './Todo.css';
import React from 'react';
import Inputtext from './Input.jsx';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.name,
      statusValue: this.props.status
    }
  }


  saveClick = (event, key) => {
    this.setState({ isEditing: false });
    this.props.getdata(event,key,this.state.statusValue);
  }

  handleChange = (e) => {
    this.setState({ statusValue: e.target.value})
  }

  editClick = () => {
    this.setState({ isEditing: true });
  }
  
  render() {
    let classLi = '';
    classLi = this.props.status === 'Finished' ? 'red' : this.props.status === 'Pending' ? 'yellow' : 'green';
   
    return (
      <li className={classLi}>
        <div>
          <h1>{this.props.index + 1}.</h1>
        </div>
        <div>
          <h3> {this.state.isEditing ? <Inputtext saveClick={this.saveClick} value={this.props.name} index={this.props.index}/> : <span onClick={this.editClick} >{ this.props.name }</span>}</h3>
          <h4> {this.props.content }</h4>
        </div>
        <div>
          {this.state.isEditing ?
            <p>
            <select onChange={this.handleChange}>
              <option value={this.state.statusValue}>{this.state.statusValue}</option>
              <option value="Finished">Finished</option>
              <option value="Cancel">Cancel</option>
              <option value="Pending">Pending</option>
            </select>
            </p> : <p onClick={this.editClick}>{this.props.status}</p>}
        </div>
      </li>
    );
  }
}


export default Todo;
