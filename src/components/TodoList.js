import React from "react";
import "./TodoList.css";

function TodoList({ listname, deleteName }) {
    return (
      <div className="TodoList-CSS">
        {listname.map((name, index) => (
            <div className="inlines">
                <p key={index}>{name}</p>
                <button className="button" onClick={() => deleteName(index)}>Delete</button>
            </div>
        ))}
      </div>
    );
  }
  
export default TodoList;