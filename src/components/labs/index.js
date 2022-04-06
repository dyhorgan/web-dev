import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
//import TodoItem from "./todo/TodoItem.js";
import TodoList from "./todo/TodoList.js";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <div style={{ backgroundColor: 'white' }}>
                <Link to="/hello">
                                      Hello
                                  </Link> |
                                  <Link to="/tuiter">
                                      Tuiter
                                  </Link>
        <h1>Labs</h1>
            <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>
        <ReduxExamples />
        <Link to="/hello">
                              Hello
                          </Link> |
                          <Link to="/tuiter">
                              Tuiter
                          </Link>
        </div>

    )
};

export default Labs;
