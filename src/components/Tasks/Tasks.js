import { useState } from 'react';

import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';

const Tasks = (props) => { 
    let tasksWrap = `flex max-w-[80%] xl:max-w-[50%] flex-col gap-6 items-center justify-between p-[2rem] my-0 mx-auto rounded-xl`;
    const [statusFilter, setStatusFilter] = useState("all");
    //Delete Item
    const updateDeleteItem = (taskId) => {
        props.deleteItemHandler(taskId);
    };
    //Update Status Task
    const updateStatusItem = (taskId, isActive) => { 
        props.statusItemHandler(taskId,isActive);
    };
    //Filter Data
    const filterTasks = (statusFilter) => { 
        setStatusFilter(statusFilter);
    };
    let filteredData = (statusFilter === "all") ?
        props.taskData :
        props.taskData.filter(task => {
            return (task.status === statusFilter)
        });
    
    return (
        <section className={tasksWrap}>
            <TaskFilter filterHandler={filterTasks} />
            {filteredData.map((task) => { 
                return (
                    <TaskItem
                        id={task.id}
                        key={`task-key-${task.id}`}
                        title={task.title}
                        isActive={task.isActive}
                        status={task.status}
                        deleteData={updateDeleteItem}
                        statusData={updateStatusItem}
                    />
                );
            })}
        </section>
    );
};

export default Tasks;