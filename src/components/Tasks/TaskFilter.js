const TaskFilter = (props) => {
    const filterData = (e) => {
        props.filterHandler(e.target.value);
    }
    return (
        <div className='flex w-full flex-row text-white'>
            <div className='flex flex-row w-[100%] items-center justify-between'>
                <label className='filter'>Filter Task Status</label>
                <select className="bg-[#21212b] p-1 rounded-md text-white" onChange={filterData}>
                    <option value='all'>All</option>
                    <option value='uncomplete'>Uncomplete</option>
                    <option value='complete'>Complete</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;
