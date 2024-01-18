import "bootstrap/dist/css/bootstrap.min.css";

function TaskShow({ task, onDelete }) {
  //task ile taskListteki elemanlara ulaşıyoruz

  const handleDeleteClick = () => {
    onDelete(task.id);
    //bir üst componente(List componentine) silinecek id değerini yollamamız gerek
    //çünkü taskShow'u list componentinden, l,st, de app'ten çağırıyoruz bu sebeple app'e tanımlanacak
  };

  return (
    <div className="task-show">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">Görev</h5>
          <p className="card-text">{task.title}</p>
          <h5 className="card-title">Yapılacaklar</h5>
          <p className="card-text">{task.taskDesc}</p>
          <button type="button" className="btn-Remove" onClick={handleDeleteClick}>
            Sil
          </button>
          <button type="button" className="btn-Update">
            Güncelle
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskShow;
