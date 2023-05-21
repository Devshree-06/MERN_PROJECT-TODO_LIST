import { getAllTodos } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from './Todo';

export const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(getAllTodos());
    },[]) 

    return (
        <article>
            <ul>
                {
                    todos.map(todo => (
                       <Todo />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;