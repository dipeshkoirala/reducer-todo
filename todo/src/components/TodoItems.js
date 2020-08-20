import React, { useState, useReducer } from "react";
import TitleReducer, { initialState } from "../reducer";

import "../App.css";

const TodoItems = () => {
  const [newToDo, setnewToDo] = useState("");
  const [state, dispatch] = useReducer(TitleReducer, initialState);

  const handleChanges = (e) => {
    e.preventDefault();
    setnewToDo(e.target.value);
  };

  let heading =
    state.length === 0 ? (
      <h2>0 todo</h2>
    ) : (
      <h3 className="bg-info m-4 p-4 ">Total Pending: {state.length}</h3>
    );

  const addMember = (newMember) => {
    return { type: "ADD_TODO", payload: newToDo };
  };

  return (
    <div>
      <div>
        <input
          className="todo-input"
          type="text"
          name="newToDo"
          value={newToDo}
          onChange={handleChanges}
          placeholder={state.item}
        />
        <button
          className={"button btn-success p-1 m-1"}
          onClick={() => {
            dispatch(addMember());
          }}
        >
          Add ToDo
        </button>
        <button
          className={"button btn-danger p-1 m-1"}
          onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}
        >
          Remove
        </button>
        <button
          className={"button btn-danger p-2 m-2"}
          onClick={() => dispatch({ type: "REMOVE_ALL" })}
        >
          Remove all.
        </button>
      </div>

      <div>{heading}</div>
      {state.map((item, index) => {
        return (
          <div className="dk bg-info">
            {!item.completed ? (
              <div>
                <h1
                  className="list bg-success m-10 p-4"
                  onClick={() =>
                    dispatch({ type: "COMPLETE", payload: item.id })
                  }
                >
                  <span>({index + 1})</span> {item.item}
                </h1>
              </div>
            ) : (
              <div>
                <h1
                  className="done"
                  onClick={() =>
                    dispatch({ type: "COMPLETE", payload: item.id })
                  }
                >
                  <span className="sp bg-danger">
                    **
                    {item.item}
                    **
                    <button
                      className={"button btn-danger p-1 m-1 float-right"}
                      onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}
                    >
                      Remove
                    </button>
                  </span>
                </h1>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
