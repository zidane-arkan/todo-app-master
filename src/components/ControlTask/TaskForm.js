import { useState } from 'react';
import addImg from '../../img/Add.png';

const TaskForm = (props) => { 
    const [userTask, setUserTask] = useState({
        title: '',
        isActive: true,
        status: "uncomplete"
    });

    const titleChangeHandler = (e) => { 
        setUserTask((taskPrev) => { 
            return {
                ...taskPrev,
                title: e.target.value
            };
        });
    };
    //Send Data to App.js
    const submitDataTask = (e) => { 
        e.preventDefault();
        let userTitleLength = userTask.title.length;
        if (userTitleLength === 0) {
            alert("Maaf tugas yang anda masukkan tidak memenuhi persyaratan");
        }
        if (userTitleLength > 0) {
            setUserTask(() => {
                return {
                    title: e.target.value = '',
                    isActive: true,
                    status: "uncomplete"
                };
            });
            console.log(userTask);
            props.addNewTask(userTask);
        }
    };
    return (
        <form onSubmit={submitDataTask}>
            <div className="relative flex max-w-[80%] xl:max-w-[50%] flex-row items-center p-[2rem] mx-auto rounded-2xl ">
                <button type="submit" className="btn-submit absolute left-[3rem] text-white">
                    <img src={addImg} alt="Add Img" width="32" height="32" />
                </button>
                <input className="w-full mx-auto xl:w-[100%] text-white bg-[#181820] border-solid border-white rounded-2xl p-3 pl-16" type="text" placeholder="Tambah Tugas..." onChange={titleChangeHandler} value={userTask.title} />
            </div>
        </form>
    );
};

export default TaskForm;