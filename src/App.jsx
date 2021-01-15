import './App.css';
import React,{useState} from 'react';
import Task from './components/Task.jsx';
import star from './components/pngwing.com.png';
import Newtask from './components/NewTask.jsx'

function App(){
  let taskdata = [
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

  const [task, setTask] = useState(taskdata);

  const getdata = (data, key) => {
    if (!data){return false}
    let taskUpdate = [...task];
    taskUpdate[key].name = data;
    setTask(taskUpdate);
  }

  const addfn = (value) => {
    let taskUpdate = [...task];
    taskUpdate.push({ name: value });
    setTask(taskUpdate);
  }

    return (
      <div className="App">
        <header className="App-header">
          <h2><img src={star} />TO DO LIST<img src={star} /></h2>
          <Newtask addfn={addfn}></Newtask>
          <div className="main">
              <ul>
              {task.map((item, index) => <Task {...item} getdata={getdata} key={index} index={index}/>)}
              </ul>
          </div>
        </header>
      </div>
    );
}

export default App;
