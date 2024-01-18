import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  //güncelleme işlemi varsa gelen değeri taskDesc içine at yoksa boş kalsın

  const handleChange = (event) => {
    //event, inputun içine girdiğimiz değere tekabül eder
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //sayfa yenilenmez
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      // güncelleme işlemi yapmıyorsak normal ekleme işlemini gerçekleştirsin
      onCreate(title, taskDesc);
      //bu props ismi ile app.jse yollayacağız değerleri
    }
    setTitle("");
    setTaskDesc("");
    //değerleri yolladıktan sonra setTitle ve setTaskDec ile içini boşaltıyoruz
  };

  const handleCancel = () => {
    if (taskformUpdate) {
      // Güncelleme modunda, güncelleme formunu kapatmak için onUpdate prop'unu kullandık.
      onUpdate();
    }
    setTitle("");
    setTaskDesc("");
    // değerleri sıfırla
  };

  return (
    <div>
      {""}
      {taskformUpdate ? ( //taskFormUpdate, yani kullanıcı güncellemek istiyorsa
        <div className="task-createUpdate">
          <div className="card w-100">
            <h4>Lütfen Taskı Düzenleyiniz</h4>
            <form>
              <div className="card-body">
                <h5 className="card-title">Görev</h5>
                <p className="card-text">
                  <input
                    className="task-input input-show"
                    value={title}
                    onChange={handleChange}
                  />
                </p>
                <h5 className="card-title">Yapılacaklar</h5>
                <p className="card-text">
                  <textarea
                    className="task-input"
                    rows={5}
                    cols={35}
                    value={taskDesc}
                    onChange={handleTaskChange}
                  />
                </p>
                <button
                  type="button"
                  className="btn-Update"
                  onClick={handleSubmit}
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  className="btn-Close"
                  onClick={handleCancel}
                >
                  İptal Et
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // kullanıcı güncellemek istemiyorsa yalnızca kayıt ekleyecekse
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
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
      )}
    </div>
  );
}

export default TaskCreate;
