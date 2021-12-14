import { useState, useEffect } from 'react';
import TaskRow from '../src/components/TaskRow';
import TaskBanner from '../src/components/TaksBanner';
import TaskCreator from '../src/components/TaskCreator';
import VisibilityControl from '../src/components/VisibilityControl';

function App() {
  
  const [userName, setUserName] = useState('George');
  const [taskItems, settaskItems] = useState([{}]);

    let [showCompleted, setShowCompleted] = useState();

    useEffect(()=>{
        let data = localStorage.getItem('tasks');
          if(data !=null){
            settaskItems(JSON.parse(data));
          }else{
            settaskItems([
              {name:"Create initial interface", done: false},
              {name:"Functionality to add tasks", done: false},
              {name:"Things to do", done: true},
              {name:"upload example to repository", done: false},
            ])
            setShowCompleted(false);
          }
    },[])

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(taskItems));
    },[taskItems])


    const createNewTask = (taskName) => {
      if(!taskItems.find(t => t.name === taskName)){
        settaskItems([...taskItems, {name:taskName, done: false}]);
      }
    }

    const toggleTask = task =>{
      settaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)));
    }


    const TaskTableRows = (doneValue) =>{
      return <TaskRow TaskRow={taskItems} toggleTask={toggleTask} doneValue={doneValue} ></TaskRow>;
    };




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
            {TaskTableRows(false)};
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
                TaskTableRows(true)
              }
            </tbody>
          </table>
          )
        }

    </div>
    
  );
}

export default App;
