import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [userName, setUserName] = useState('George');
  const [taskItems, settaskItems] = useState([
      {name:"Task One", done: false},
      {name:"Task Two", done: false},
      {name:"Task Three", done: true},
      {name:"Task Four", done: false},
    ]);

    const taskTableRows = () =>{
      return taskItems.map(task =>(
        <tr key={task.name}>
          <td>{task.name}</td>
          <td>{String(task.done)}</td>
        </tr>
      ))
    };


  return (
    <div>
    
        <table className="table striped bordered hover">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows()}
          </tbody>
        </table>
    </div>
  );
}

export default App;
