import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/taskcreate";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); //arraye atmak için değişken tanımladık

  const createTask = (title, taskDesc) => {
    //onCreate, taskcreateden gelen 2 title ve description değerini veriyoruz
    const createdTasks = [
      ...tasks, //var olan eski tasksları alır buraya yeni bir array için kopyalar
      //yani eski array üzerine yenisini ekler
      {
        id: Math.round(Math.random() * 999999),
        title: title, //objelerde soldaki key sağdaki value'dir.
        //title, sadece bu şekilde sade de yazılabilir
        taskDesc: taskDesc,
      },
    ];

    setTasks(createdTasks); //id,title ve taskDesc elemanlarını setTasks ile tasks'ın içine attık
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      {/* onCreate, taskcreateden geliyor ve bunun içindeki değerleri createtaskte tutuyoruz */}
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
      {/* id,title ve taskDesc 3 elemanı TaskList componentine göndermemiz gerek*/}
    </div>
  );
}

export default App;
