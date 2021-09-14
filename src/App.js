import react, { useState } from "react";
import "./App.css";
import Task from "./components/Tasks";

const App = () => {
  const [tasks,setTask] = useState([
    {
      id:'1',
      title:'Estudar React.js',
      completed:false,
    },
    {
      id:'2',
      title:'Estudar Asp.net',
      completed:true
    }
  ]);

  return (
    <>
      <div className="container">
        <Tasks task={tasks}/>
      </div>
    </>
  )
};

export default App; 
