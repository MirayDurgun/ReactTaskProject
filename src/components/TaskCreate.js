import { React } from "react";

function TaskCreate() {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDec] = useState("");

  const handleChange = (event) => {
    //event, inputun içine girdiğimiz değere tekabül eder
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    //event, inputun içine girdiğimiz değere tekabül eder
    setTaskDec(event.target.value);
  };

  return (
    <div className="task-create">
      <h3>Lütfen TaskEkleyiniz</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
        {/* default hali type="text" geldiğinden sadece input yazdık */}
        <label className="task-label">Task Griniz</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-input"
          rows={5}
        />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
