import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/taskcreate";

function App() {
  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
