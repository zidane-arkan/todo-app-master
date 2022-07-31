import { useState } from 'react';
import CompleteImg from '../../img/Complete.png';
import UncompleteImg from '../../img/Uncomplete.png';
import TrashImg from '../../img/Trash.png';

const TaskItem = (props) => {
    //Variabel & Class Task
    let taskItem = `flex w-full items-center flex-row rounded-xl`;
    let status = {
        titleActive: `no-underline`,
        titleDisable: `line-through`,
        taskActive  : `bg-[#21212b]`,
        taskDisable: `bg-[#21212b] opacity-50`,
        btnkActive  : "Selesai",
        btnDisable: "Belum Selesai"
    };
    //State & Logic
    const [taskActiveHandler, setTaskActiveHandler] = useState(props.isActive);
    //Change style according to data
    let changeStatusHandler = (e) => { 
        //Change Components style
        setTaskActiveHandler(!taskActiveHandler ? true : false);
        //Change status task
        console.log(typeof e.target.parentNode.parentNode.id);
        props.statusData(e.target.parentNode.parentNode.id, taskActiveHandler);
    };
    let deleteTaskHandler = (e) => { 
        // console.log(e.target.id);
        props.deleteData(e.target.parentNode.parentNode.id);
    };
    return (
        <div className={`${taskItem} ${taskActiveHandler ? status.taskActive : status.taskDisable}`}>
             <div id={props.id} className="flex flex-row items-center pl-6 pr-8 py-4 gap-4">
                <button onClick={changeStatusHandler}>
                    {/* {taskActiveHandler ? status.btnkActive : status.btnDisable} */}
                    <img src={taskActiveHandler ? UncompleteImg : CompleteImg} alt="ChecklistImage" />
                </button>
                <button onClick={deleteTaskHandler}>
                     <img src={TrashImg} alt="TrashImage" onClick={deleteTaskHandler} />
                </button>
            </div>
            <div className="px-0 py-5 rounded-xl">
                <h3 className={`${taskActiveHandler ? status.titleActive : status.titleDisable}`}>{props.title}</h3>
            </div>
        </div>
    );
};

export default TaskItem; 