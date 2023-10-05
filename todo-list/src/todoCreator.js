import React, {useContext, useState} from "react";
import StoreContext from "./storeContext";
import { observer } from "mobx-react-lite"

const TodoCreator = () => {
    const todoStore = useContext(StoreContext);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if(newTodo.trim()){
            todoStore.addTodo(newTodo.trim())
            setNewTodo('')
        }
    }
    return (
        <div>
            <input
            type="text"
            value={newTodo}
            onChange={e=>setNewTodo(e.target.value)}
            placeholder="Digite uma nova tarefa"
            />
            <button onClick={handleAddTodo}>Add Tarefa</button>
        </div>
    )
}

export default observer(TodoCreator)