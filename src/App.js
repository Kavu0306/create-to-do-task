import "./App.css";
import { useState } from "react";

function App() {
  const [list, setlist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  let addtask = () => {
    setlist([
      ...list,
      { id: list.length + 1, name: currentTask, isDone: false },
    ]);
    setCurrentTask("");
  };
  let markDone = (id) => {
    let itemIndex = list.findIndex((obj) => obj.id === id);
    list[itemIndex].isDone = !list[itemIndex].isDone;
    setlist([...list]);
  };
  // let markUndone = (id) => {
  //   let itemIndex = list.findIndex((obj) => obj.id === id);
  //   list[itemIndex].isDone = false;
  //   setlist([...list]);
  // };
  const removetask = (id) => {
    let itemIndex = list.findIndex((obj) => obj.id === id);
    console.log(itemIndex);
    let newList = list;
    newList.splice(itemIndex, 1);
    setlist([...newList]);
  };
  return (
    <div className="task">
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
      ></input>
      <button onClick={addtask}>add</button>
      <ul>
        {list.map((inn, index) => {
          return (
            <li key={index} className={inn.isDone ? "mark-done" : ""}>
              {inn.name}-{""}
              <button onClick={() => markDone(inn.id)}>Done</button>-
              {/* <button onClick={() => markUndone(inn.id)}>UnDone</button> */}
              <button onClick={() => removetask(inn.id)}>Delete</button>
            </li>
          );
        })}
        <button>save</button>;
      </ul>
    </div>
  );
}
export default App;
