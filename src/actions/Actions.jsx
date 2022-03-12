
import { v4 } from 'uuid';

const Inc = (num) => {
    return {
        type: "INC",
        payload: num
    }

}

const Dec = (num) => {
    return {
        type: "DEC",
        payload: num
    }
}


const TaskAdd = (task) => {
    return { type: "AddTask", payload: { title: task, id: v4() } }
}


const RemoveTask = (id) => {
    return { type: "RemoveTodo", id: id }
}


export { Inc, Dec, TaskAdd, RemoveTask }