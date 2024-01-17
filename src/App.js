import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/taskcreate";

function App() {
  const createTask = (title, taskDesc) => {
    //onCreate, taskcreateden gelen 2 title ve description değerini veriyoruz
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      {/* onCreate, taskcreateden geliyor ve bunun içindeki değerleri createtaskte tutuyoruz */}
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
