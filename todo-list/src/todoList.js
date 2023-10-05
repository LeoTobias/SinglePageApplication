import React, {useContext} from "react";
import StoreContext from "./storeContext";
import { observer } from "mobx-react-lite"

const TodoList = () => {
    const todoStore = useContext(StoreContext);
    return (
        <div>
            {todoStore.todos.map(
                (todo, index) => (
                    <div>
                        {todo}
                    </div>
                )
            )}
        </div>
    );
}

export default observer(TodoList)