import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TaskCreate from "./taskcreate";

function TaskShow({ task, onDelete, onUpdate }) {
  //task ile taskListteki elemanlara ulaşıyoruz

  const [showEdit, setShowEdit] = useState(false);
  //başlangıç değeri false
  //güncelle butonuna tıklandığında değer true'ye dönmeli

  const handleEditClick = () => {
    setShowEdit(!showEdit); //showEdit true ise
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
    //bir üst componente(List componentine) silinecek id değerini yollamamız gerek
    //çünkü taskShow'u list componentinden, l,st, de app'ten çağırıyoruz bu sebeple app'e tanımlanacak
  };

   const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false); //showEdit true ise
    onUpdate(id, updatedTitle, updatedTaskDesc);
    // üst componente geçeceğiz
  };

  return (
    <div className="show">
      <div className="task-show">
    
        {/* showEdit? <> </> true ise,
        : değil demek, değilse normal formumuzu gösterecek
      ama true ise görüntü tamamen değişecek */}
        {showEdit ? (
          <TaskCreate
            task={task}
            taskformUpdate={true}
            onUpdate={handleSubmit}
            // update olduğunda üst componente id'yi iletmesi gerek
          />
        ) : (
          /* taskFormUpdate ve task, taskCreate'ye tanımlanır */

          <div className="task-show">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Görev</h5>
                <p className="card-text">{task.title}</p>
                <h5 className="card-title">Yapılacaklar</h5>
                <p className="card-text">{task.taskDesc}</p>
                <button
                  type="button"
                  className="btn-Remove"
                  onClick={handleDeleteClick}
                >
                  Sil
                </button>
                <button
                  type="button"
                  className="btn-Update"
                  onClick={handleEditClick}
                >
                  Güncelle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskShow;
