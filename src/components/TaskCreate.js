function TaskCreate() {
    return (
      <div className="task-create">
        <h3>Lütfen TaskEkleyiniz</h3>
        <form className="task-form">
          <label className="task-label">Başlık</label>
          <input className="task-input" />
          {/* default hali type="text" geldiğinden sadece input yazdık */}
          <label className="task-label">Task Griniz</label>
          <textarea className="task-input" rows={5} />
          <button className="task-button">Oluştur</button>
        </form>
      </div>
    );
  }
  
  export default TaskCreate;
  