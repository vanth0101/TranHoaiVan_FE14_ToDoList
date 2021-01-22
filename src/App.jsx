import React, { useState } from 'react';
import './App.css';
import Newtask from './components/NewTask.jsx';
import star from './components/pngwing.com.png';
import Task from './components/Task.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
      'name': 'HELLO DARKNESS MY OLD FRIEND',
      'content': 'Attack on Titan',
      'status':'Finished'
    }
  ]

  const [task, setTask] = useState(taskdata);

  const getdata = (data, key, statusValue) => {
    if (!data&&task[key].status===statusValue){return false}
    let taskUpdate = [...task];
    if (data) { taskUpdate[key].name = data.trim(); }
    if (task[key].status!==statusValue) {taskUpdate[key].status = statusValue;}
    setTask(taskUpdate);
  }

  const addfn = (value) => {
    let taskUpdate = [...task];
    taskUpdate.push({ name: value, content:'', status:'Pending' });
    setTask(taskUpdate);
  }

  const deletefn = (value) => {
    let taskUpdate = [...task];
    taskUpdate.splice(value, 1);
    setTask(taskUpdate);
  }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/login">TodoList with MobX</Link>
          </p>
          <BrowserRouter>
            <ul>
              <li><Link to="/">All</Link></li>
              <li><Link to="/pending">Pending</Link></li>
              <li><Link to="/cancel">Cancel</Link></li>
              <li><Link to="/finish">Finish</Link></li>
            </ul>
          <h2><img src={star} />TO DO LIST<img src={star} /></h2>
          <Newtask addfn={addfn}></Newtask>
          <div className="main">
            <ul>
                  <Switch>
                    <Route exact path='/'>
                    {task.map((item, index) => <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                    <Route path='/pending'>
                      {task.filter((item1)=>item1.status==='Pending').map((item, index) => <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                    <Route path='/cancel'>
                      {task.filter((item1)=>item1.status==='Cancel').map((item, index) => <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                    <Route path='/finish'>
                      {task.filter((item1)=>item1.status==='Finished').map((item, index) => <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                  </Switch>
              </ul>
            </div>
          </BrowserRouter>
        </header>
      </div>
    );
}

export default App;
