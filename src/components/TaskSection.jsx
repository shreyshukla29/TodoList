import { useState, useEffect } from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, deleteTodo ,filterUpcomingTodos,filterTodayTodos,allTodo} from '../Slices/TodoSlice';

// Task Secion to display the curr todo 

const TaskSection = () => {

  //using useDispatch hook to dispatch the actions
  const dispatch = useDispatch();

  // using use Selector to get the curr store state data
  const todo = useSelector((state) => state.todo.currtodo);


  const todoHeading = useSelector((state)=> state.todo.todoShow)
  console.log('todo',todo)


  // making state variables for handling the update of currtodo
  const [list, setList] = useState('Personal');
  const [priority, setPriority] = useState('High');
  const [dueDate, setDueDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // use effect to handle the todo update if change it store
  useEffect(() => {
    console.log('in effect')
    if (todo) {
      setList(todo.list || 'Personal');
      setPriority(todo.priority || 'High');
      setDueDate(todo.dueDate || '');
      setTitle(todo.title || 'title');
      setDescription(todo.description || 'description');
    }
  }, [todo]);

  // function for save new edited todo 
  const handleSave = () => {
    if (todo) {
      dispatch(editTodo({
        id: todo.id,
        title,
        description,
        dueDate,
        priority,
        status: todo.status
      }));

      if(todoHeading == 'Upcoming'){
        dispatch(filterUpcomingTodos())
      }else if(todoHeading == 'Today'){
        dispatch(filterTodayTodos())
      }else{
        dispatch(allTodo())
      }




    }
  };


  // function for handle the delete todo
  const handleDelete = () => {
    if (todo) {
      dispatch(deleteTodo({
        id: todo.id
      }));

      if(todoHeading == 'Upcoming'){
        dispatch(filterUpcomingTodos())
      }else if(todoHeading == 'Today'){
        dispatch(filterTodayTodos())
      }else{
        dispatch(allTodo())
      }
    }
   
  };

  return (
    <div className="hidden md:flex flex-col bg-zinc-50 w-full">
      <div className="mx-4">
        <h1 className="text-2xl mt-4 font-bold px-2">Task</h1>
        <div className="mt-4 px-2">
          <h1 className="text-lg font-semibold">{title || 'Title'}</h1>
          <p className="text-md font-semibold mt-2">{description || 'Description'}</p>
        </div>
        <ul className="flex flex-col gap-10 mt-10 ml-6">
          <li className="flex gap-9 items-center">
            <span>List</span>
            <select
              value={list}
              onChange={(e) => setList(e.target.value)}
              required
              className="px-3 py-2 border-b outline-none"
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="List 1">List 1</option>
            </select>
          </li>
          <li className="flex gap-4 items-center">
            <span>Priority</span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
              className="border-b px-3 py-2 outline-none"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </li>
          <li className="flex gap-4 items-center">
            <span>Due Date</span>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="border-b px-3 py-2 outline-none"
            />
          </li>
        </ul>
        <div className="flex flex-col mt-10 ml-2">
          <div className="flex gap-4 items-center">
            <h1 className="text-lg pl-2">Edit Details</h1>
            <MdOutlineEdit className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-10 mt-10 ml-2">
            <input
              type="text"
              placeholder="Edit title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none text-sm border border-gray-200 p-2"
            />
            <input
              type="text"
              placeholder="Edit description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="outline-none text-sm border border-gray-200 p-2"
            />
          </div>
          <div className="flex mt-10 justify-between">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white text-md px-4 py-2 rounded-full"
            >
              Delete
            </button>
            <button
              onClick={handleSave}
              className="bg-yellow-400 text-white text-md px-4 py-2 rounded-full"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
