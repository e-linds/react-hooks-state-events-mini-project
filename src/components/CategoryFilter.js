import React from "react";

function CategoryFilter({ categories, onBtnClick, currentCategory, setCurrentCategory }) {

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button 
        key={category} 
        className={category === currentCategory ? "selected" : ""} 
        onClick={(() => onBtnClick(category))}>
        {category}
        </button> 
        
      }) 
        
        }
    </div>

  )
    
}

export default CategoryFilter;

