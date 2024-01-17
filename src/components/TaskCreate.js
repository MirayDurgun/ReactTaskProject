import { useState } from "react";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event) => {
    //event, inputun içine girdiğimiz değere tekabül eder
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    //event, inputun içine girdiğimiz değere tekabül eder
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //sayfa yenilenmez
    onCreate(title, taskDesc);
    //bu props ismi ile app.jse yollayacağız değerleri
    setTitle("");
    setTaskDesc("");
    //değerleri yolladıktan sonra setTitle ve setTaskDec ile içini boşaltıyoruz
  };

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz</h3>
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
        <button onClick={handleSubmit} className="task-button">
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
