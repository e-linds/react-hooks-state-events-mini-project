import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState([...TASKS])  
  const [categories, setCategories] = useState([...CATEGORIES]) 
  const [currentCategory, setCurrentCategory] = useState=("All")
  
  function onBtnClick(selectedCategory) {
    const filteredArray = tasks.filter((task) => {
      if (selectedCategory === "All") {
        return tasks
      } else {
      return task.category === selectedCategory
      }
    })
    setTasks((tasks) => tasks = filteredArray)

  
  }
  
  function deleteTask(taskToBeDeleted) {
    const newArray = tasks.filter((task) => {    
      return task.text !== taskToBeDeleted
    })

    setTasks((tasks) => tasks = newArray)
  }

  function onTaskFormSubmit (newAddition) {
    setTasks((tasks) => tasks = [...tasks, newAddition])
  
  }
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onBtnClick={onBtnClick} currentCategory={currentCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} onBtnClick={onBtnClick}/>
    </div>
  );
}

export default App;
