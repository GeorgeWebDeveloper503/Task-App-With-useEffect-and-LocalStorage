import { useState } from 'react';
import TaskRow from '../src/components/TaskRow';
import TaskBanner from '../src/components/TaksBanner';
import TaskCreator from '../src/components/TaskCreator';
import VisibilityControl from '../src/components/VisibilityControl';

function App() {
  
  const [userName, setUserName] = useState('George');
  const [taskItems, settaskItems] = useState([
      {name:"Task One", done: false},
      {name:"Task Two", done: false},
      {name:"Task Three", done: true},
      {name:"Task Four", done: false},
    ]);

    const [showCompleted, setShowCompleted] = useState(true);

    const createNewTask = (taskName) => {
      if(!taskItems.find(t => t.name === taskName)){
        settaskItems([...taskItems, {name:taskName, done: false}]);
      }
    }

    const toggleTask = task =>{
      settaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)));
    }




  return (
    <div>

        <TaskBanner userName={userName} taskItems={taskItems}  />
        <TaskCreator callback={createNewTask} ></TaskCreator>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Done</th>
            </tr>
          </thead>
          <tbody>
            <TaskRow TaskRow={taskItems} toggleTask={toggleTask} ></TaskRow>
          </tbody>
        </table>
        
        <div className='bg-secondary-text-white text-center p-2'>
          <VisibilityControl
            description="Completed Task"
            isChecked={showCompleted}
            callback={checked => setShowCompleted(checked)}
          />
        </div>

        {
          showCompleted && (
            <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Done</th>
              </tr>
            </thead>
            <tbody>
              {
                taskItems
                .filter(task => task.done === true)
                .map(task =>(
                    <tr key={task.name}>
                      <td>{task.name}</td>
                      <td>
                          <input 
                            type="checkbox" 
                            checked={task.done}
                            onChange={() => toggleTask(task)}  />
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
          )
        }

    </div>
    
  );
}

export default App;
