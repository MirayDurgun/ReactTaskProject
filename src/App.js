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

  const deleteTaskById = (id) => {
    // showdan gönderdiğimiz id listten geçip en sonunda buraya gelir,
    // Görevi silmek için, gönderilen id ile
    // eşleşmeyen görevleri içeren yeni bir liste oluşturuyoruz.

    const afterDeletingTasks = tasks.filter((task) => {
      //tasks dizisinde bulunan görevler arasından
      // belirli bir id değeriyle eşleşmeyen görevleri içeren bir alt küme oluşturuyor.

      return task.id !== id;
      // task objesinin id özelliğinin, fonksiyona gönderilen(showdan gelen)
      // id değeriyle eşleşme durumunu kontrol eder.
      // Yani, id değeri eşleşmeyen görevleri korur, eşleşenleri filtreler
      // eşit değilse afterDeletingTasks'in içine yollar sonrasında setedilirek ekrana yazdırılır silinmez
      // eğer gönderilen id ile eşitse return edilmez dolayısıyla listeye alınmaz, set edilmez
    });

    setTasks(afterDeletingTasks);
    // Oluşturduğumuz yeni listeyle,
    // görevlerin güncellenmiş halini setTasks fonksiyonu aracılığıyla saklıyoruz.
    // afterDeletingTasks, belirtilen id değeriyle eşleşmeyen görevleri içeren
    // bir dizi olur ve bu dizi, belirli bir görevin silindiği durumu temsil eder.
    // Bu diziyi setTasks fonksiyonu aracılığıyla ana bileşenin görev listesini
    // güncellemek için kullanırız. Bu sayede, belirli bir görevin silinmesi sağlanır.
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    // tasks dizisindeki her bir görev için bir haritalama yapılır
    const updatedTasks = tasks.map((task) => {
      // Eğer görevin id'si güncellenmek istenen id ile eşleşiyorsa
      if (task.id === id) {
        // Görevi güncelle ve güncellenmiş halini döndür
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      // Eğer id eşleşmiyorsa, görevi olduğu gibi bırak
      return task;
    });

    // Güncellenmiş görev listesini kullanarak tasks state'ini güncelle
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      {/* onCreate, taskcreateden geliyor ve bunun içindeki değerleri createtaskte tutuyoruz */}
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
      {/* id,title ve taskDesc 3 elemanı TaskList componentine göndermemiz gerek*/}
    </div>
  );
}

export default App;
