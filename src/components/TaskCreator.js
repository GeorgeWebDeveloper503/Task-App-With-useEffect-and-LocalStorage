import { useState } from 'react';
function TaskCreator(props) {

  const [newTaskNmae, setNewTaskNmae] = useState('');
  
  const updatedNewTaskName = e => setNewTaskNmae(e.target.value);
  
  const createNewTask = () =>{
      console.log(newTaskNmae);
      if(newTaskNmae !=''){
          props.callback(newTaskNmae);
          setNewTaskNmae('')
        }
        setNewTaskNmae('')
  }
  
  return (
    <div className='container mt-3'>
        <input 
            type="text"
            className='form-control m-2'
            value={newTaskNmae}
            onChange={updatedNewTaskName}
        />
            <div class="d-grid gap-2">
            <button class="btn btn-primary m-5" type="button" onClick={createNewTask}>Add</button>
            </div>
    </div>
    
  );
}

export default TaskCreator;
