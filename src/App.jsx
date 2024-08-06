
import Sidebar from './components/Sidebar'; // Import  Sidebar component
import TaskSection from './components/TaskSection'; // Import  TaskSection component
import TodoSection from './components/TodoSection'; // Import  TodoSection component

function App() {
  return (

    // responsive design with layout as follows
   <div className="flex w-full h-screen">
    <Sidebar/>
    <TodoSection/>
    <TaskSection/>
   </div>
  );
}

export default App;
