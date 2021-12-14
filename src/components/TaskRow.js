import React from "react";

function TaskRow(props) {
  return (
    props.TaskRow
    .filter(task => task.done === props.doneValue)
    .map(task =>(
        <tr key={task.name}>
          <td>{task.name}</td>
          <td>
              <input 
                type="checkbox" 
                checked={task.done}
                onChange={() => props.toggleTask(task)}  />
          </td>
        </tr>
      ))
  );
}

export default TaskRow;
