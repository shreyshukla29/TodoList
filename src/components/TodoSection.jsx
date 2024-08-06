import  { useState } from 'react';
import TodoList from './TodoList';
import TodoModal from './TodoModal';
import { useSelector } from 'react-redux';

function TodoSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const todoHeading = useSelector((state)=> state.todo.todoShow)
    return (
        <div className="flex flex-col min-w-[60%] mt-6 gap-10">
           <div className="flex justify-between px-4 py-6">
           <h1 className="px-2 text-4xl font-bold">{todoHeading}</h1>
            <button 
                className="self-end bg-blue-500 text-white px-4 py-2 rounded" 
                onClick={openModal}
            >
                Add Todo
            </button>
           </div>
            <TodoList />
            {isModalOpen && <TodoModal onClose={closeModal} />}
        </div>
    );
}

export default TodoSection;
