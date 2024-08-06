/* eslint-disable react/jsx-key */

import { useSelector, useDispatch } from 'react-redux';
import { todoFinished,currtodo } from '../Slices/TodoSlice';
import { useEffect } from 'react';


// Here all the todo present according to filteration 

// status color function to set the color of todo Status according to status

const statusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-400 text-green-800';
    case 'In Progress':
      return 'bg-yellow-400 text-yellow-800';
    case 'Pending':
      return 'bg-red-400 text-red-800';
    default:
      return 'bg-gray-400 text-gray-800';
  }
};

function TodoList() {
  const todoList = useSelector((state) => state.todo.filtertodo);
  const dispatch=useDispatch();
  const handleCheckboxChange = (todo) => {
    dispatch(todoFinished({ id: todo.id, status: todo.status === 'Completed' ? 'Pending' : 'Completed' }));
  };

  const selectodo = (todo)=>{
    dispatch(currtodo({todo}))
  }

  useEffect(()=>{

  },[todoList])
    return (
        <div className="flex flex-col p-4 space-y-4 w-full
       overflow-y-scroll">
        {todoList?.map((todo) => (
          <div key={todo.id} className="flex py-1 px-2 flex-col  
          border-t w-full
        "
        onClick={() => selectodo(todo)}>
           <div className="flex  w-full ">
            <input type="checkbox" name="" id=""
             checked={todo.status === 'Completed'} 
             onChange={() => handleCheckboxChange(todo)}  />
           <h1 className="text-md font-bold
            ml-2 ">{todo.title}</h1>
              <span className="text-sm text-gray-400 
            ml-auto">{todo.dueDate}</span>
           </div>
           <div className="flex  w-full">
           <span className="ml-6 pt-2 inline-block truncate  text-sm  overflow-hidden w-[40%]">{todo.description}</span>
           <span className={`text-sm mt-2  ml-auto text-center font-semibold  text-${statusColor(todo.status)}`}>{todo.status}</span>
           </div>     
          </div>
        ))}
      </div>
    );
}

export default TodoList;
