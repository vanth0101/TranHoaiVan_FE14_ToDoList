import './Todo.css';
import React from 'react';
import Inputtext from './Input';
import classnames from 'classnames';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value:this.props.name
    }
  }


  saveClick = (event, key) => {
    this.setState({ isEditing: false });
    this.props.getdata(event,key);
  }

  editClick = () => {
    this.setState({ isEditing: true });
  }
  render() {
    let classLi = '';
    classLi = this.props.index % 3 == 0 ? 'red' : this.props.index % 3 == 1 ? 'yellow' : 'green';
   
    return (
      <li className={classLi}>
        <div>
          <h1>{this.props.index + 1}.</h1>
        </div>
        <div>
          <h3> {this.state.isEditing ? <Inputtext saveClick={this.saveClick} value={this.props.name} index={this.props.index}/> : <span onClick={this.editClick} >{ this.props.name }</span>}</h3>
          <h4> {this.props.content}</h4>
        </div>
        <div>
          <p>{this.props.status}</p>
        </div>
      </li>
    );
  }
}


export default Todo;
