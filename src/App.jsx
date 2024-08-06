
import Sidebar from './components/Sidebar'; // Import your Sidebar component
import TaskSection from './components/TaskSection'; // Import your TaskSection component
import TodoSection from './components/TodoSection'; // Import your TodoSection component

function App() {
  return (
   <div className="flex w-full h-screen">
    <Sidebar/>
    <TodoSection/>
    <TaskSection/>
   </div>
  );
}

export default App;
