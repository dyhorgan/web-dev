import TodoItem from "./TodoItem.js";
import todos from "./todos.json";

const TodoList = () => {
  let key = 1;
  return(
    <ul>
      {
        todos.map(todo => {
          return(<TodoItem todo={todo} key={key += 1}/>);
        })
      }
    </ul>
  )
}

export default TodoList;

