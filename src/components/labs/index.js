import React from "react";
//import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
//import TodoItem from "./todo/TodoItem.js";
import TodoList from "./todo/TodoList.js";

const Labs = () => {
    return(
        <div style={{ backgroundColor: 'white' }}>
        <h1>Labs</h1>
            <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>
        </div>

    )
};

export default Labs;
