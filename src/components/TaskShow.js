import "bootstrap/dist/css/bootstrap.min.css";

function TaskShow({ task }) {
  //task ile taskListteki elemeanlara ulaşıyoruz
  return (
    <div className="task-show">
      <div class="card w-100">
        <div class="card-body">
          <h5 class="card-title">Görev</h5>
          <p class="card-text">{task.title}</p>
          <h5 class="card-title">Yapılacaklar</h5>
          <p class="card-text">{task.taskDesc}</p>
          <button type="button" class="btn-Remove">Sil</button>
          <button type="button" class="btn-Update">Güncelle</button>
        </div>
      </div>
    </div>
  );
}

export default TaskShow;
