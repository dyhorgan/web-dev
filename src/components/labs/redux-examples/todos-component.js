import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
 const todos = useSelector(state => state.todos);
  console.log(todos);
  const [todo, setTodo] = useState({do: '', done: false});
    const dispatch = useDispatch();
    const createTodoClickHandler = () => {
      const action = {
        type: 'create-todo',
        todo
      };
      dispatch(action);
    }

  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue
    };
    setTodo(newTodo);
  }

    const deleteTodoClickHandler = (todo) => {
      const action = {
        type: 'delete-todo',
        todo
      };
      dispatch(action);
    }
    const updateTodoClickHandler = (todo) => {
      const action = {
        type: 'update-todo',
        todo
      };
      dispatch(action);
    }


let key = 0;
 return(
       <>
         <h3>Todos</h3>
         <ul className="list-group">

           {todos.map(todo => {
                key += 1;
               return (<li className="list-group-item" key={key}>
                                           <input checked={todo.done}
                                             onChange={(event) =>
                                               updateTodoClickHandler(
                                                 {...todo,
                                                  done: event.target.checked})}
                                             type="checkbox"/>
                                 <input
                                   onChange={todoChangeHandler}
                                   value={todo.do}
                                   className="form-control"/>
                                   <button onClick={() =>
                                           deleteTodoClickHandler(todo)}
                                           className="btn btn-danger float-end">
                                           Delete
                                         </button>

                        </li>)
               }
             )
           }
         </ul>
         <button onClick={createTodoClickHandler} className="btn btn-primary">
                                            Create New Todo
                                          </button>
       </>
 );
};
export default Todos;


