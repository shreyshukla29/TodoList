/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo ,filterUpcomingTodos,filterTodayTodos,allTodo} from '../Slices/TodoSlice';
import { useSelector } from 'react-redux';


// Todo Modal for Adding Todo

/**
 * For eg : 
 * 
 * todo = {
 * id:1 ,
 * title: title,
 * description,
 * dueDate,
 * priority}
 */


function TodoModal({ onClose }) {

  const todoHeading = useSelector((state)=> state.todo.todoShow)

  // todo items for creating the todo 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('High');


  const dispatch = useDispatch();

  // submit function for adding new todo 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate && priority) {
      dispatch(addTodo({ 
        title, 
        description, 
        dueDate, 
        priority 
      }));

      if(todoHeading == 'Upcoming'){
        dispatch(filterUpcomingTodos())
      }else if(todoHeading == 'Today'){
        dispatch(filterTodayTodos())
      }else{
        dispatch(allTodo())
      }


      onClose();
    }
  };
 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Add New Todo</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          ></textarea>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className="flex justify-end gap-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
