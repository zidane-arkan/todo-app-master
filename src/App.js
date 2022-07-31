import { useState, useEffect } from 'react';

import Tasks from './components/Tasks/Tasks.js';
import TaskForm from './components/ControlTask/TaskForm';
import ErrorServer from './components/Error/ErrorServer';

function App() {
  const [tasksItem, setTasksItem] = useState([]);
  const _DATALINK = `https://todo-z-api.herokuapp.com`;
  const [isReady, setIsReady] = useState(false);
  const [errCode, setErrCode] = useState("400");
  //Set & Get Task Data For Task Item
  let fetchTask = async () => {
    try {
      const response = await fetch(`${_DATALINK}/api/tasks/`);
      const dataTask = await response.json();
      let taskData = [];
      for (const task of dataTask.data) {
        taskData.push({
          id: task.id,
          title: task.attributes.title,
          isActive: task.attributes.isActive,
          status: task.attributes.status
        });
      }
      setTasksItem(taskData);
      setIsReady(true);
    }
    catch (err) {
      setIsReady(false);
    }
  };
  useEffect(function () {
    fetchTask();
  }, []);
  //Add Task Data to Server
  const addTasksItem = async (newTask) => {
    const response = await fetch(`${_DATALINK}/api/tasks?POST`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: newTask
      })
    });

    const newData = await response.json();
    //Refresh Task List
    setTasksItem((prevTask) => {
      return [
        {
          id: newData.data.id,
          title: newData.data.attributes.title,
          isActive: newData.data.attributes.isActive,
          status: newData.data.attributes.status
        },
        ...prevTask
      ];
    });
  };

  //Delete New Task
  const deleteTaskItem = async (deleteTaskId) => {
    const response = await fetch(`${_DATALINK}/api/tasks/${deleteTaskId}`, {method: 'DELETE'});
    const deleteData = await response.json();
    console.log(deleteData);
    fetchTask();
  };

  //Change Status task
  const statusTaskItem = async (dataId, isActiveValue) => {
    const responseUpdate = await fetch(`${_DATALINK}/api/tasks/${dataId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          isActive: !isActiveValue,
          status: isActiveValue ? "complete" : "uncomplete"
        }
      })
    });
    const updatedData = await responseUpdate.json();
    console.log(updatedData);
    fetchTask();
  };
  
  return (
    <div className="App box-border m-0">
      <h1 className="flex max-w-[80%] xl:max-w-[50%] text-left text-4xl font-semibold text-[#fff] px-[2rem] pt-20 pb-12 mx-auto">@ Todo List</h1>
      <TaskForm addNewTask={addTasksItem} />
      {isReady && <Tasks taskData={tasksItem} statusItemHandler={statusTaskItem} deleteItemHandler={deleteTaskItem} />}
      {!isReady && <ErrorServer />}
    </div>
  );
}

export default App;
