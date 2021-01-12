import './App.css';
import React from 'react';
import Task from './components/Task';
import star from './components/pngwing.com.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      task: [
        {
          'name': 'GAME',
          'content': 'Call of Duty',
          'status':'Finished'
        },
        {
          'name': 'SOCCER',
          'content': 'Manchester United',
          'status':'Pending'
        },
        {
          'name': 'COMIC',
          'content': 'OnePiece',
          'status':'Cancel'
        },
        {
          'name': 'ANIME',
          'content': 'Attack on Titan',
          'status':'Finished'
        }
      ]
    }
  }

  getdata = (data, key) => {
    if (!data){return false}
    let taskUpdate = [...this.state.task];
    taskUpdate[key].name = data;
    this.setState({ task: taskUpdate });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2><img src={star}/>TO DO LIST<img src={star}/></h2>
          <div className="main">
              <ul>
              {this.state.task.map((item, index) => <Task {...item} getdata={this.getdata} key={index} index={index}/>)}
              </ul>
           </div>
        </header>
      </div>
    );
  }
}

export default App;


//name={item.name} content={item.content}