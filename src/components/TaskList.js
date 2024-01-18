import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onUpdate }) {
  //onDlete değeri buraya show componentinden gelir
  //app.js'teki diziyi buraya geçirdik ve içindeki taskları dönmemiz gerekiyor
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        //buradaki index key için kullanılır
        //burada tasks'ların içerisinde dönüyoruz
        //buradaki task içerdiği her bir elemena tekabül eder
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
