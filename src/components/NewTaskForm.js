import React, { useState } from "react";


function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newDetails, setNewDetails] = useState("")
  const [newCategory, setNewCategory] = useState("Code")


 const newCategories = categories.filter((each) => {
  return each !== "All"
 })


function handleDetailsChange(e) {
  setNewDetails(e.target.value)
}

function handleCategoryChange(e) {
  setNewCategory(e.target.value)
}

 function handleSubmit(e) {
  e.preventDefault()

  const newObj = {
    category: "newCategory",
    text: "newDetails"
  }

onTaskFormSubmit(newObj)

setNewDetails("")
setNewCategory("")

    
 }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={newDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChane={handleCategoryChange}>
         {newCategories.map((each) => {
          return <option key={each}>{each}</option>
         })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;