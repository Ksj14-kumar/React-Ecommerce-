import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import {TaskAdd,RemoveTask} from '../actions/Actions'

function TodoApp() {
    const dispatch = useDispatch()
    const [task, setTask] = useState(null)

    const taskSelect = useSelector((state) => {
        return state.todo

    })



    function handle(e) {
        let name = e.target.name
        let value = e.target.value
        setTask(value)
    }

    function submit() {
        // setaddtask([...addTask, task])
        dispatch(TaskAdd(task))


    }





    return (
        <div>

            <input type="text" name="task" id="task"

                defaultValue=""
                onChange={handle}
            />

            <button type='button' onClick={submit}

            >Add Task</button>

            <ul>
                {
                    taskSelect.map((item, index) => {
                        return (
                            <li key={item.id}>{item.title}
                                <button
                                    onClick={() => {
                                        dispatch(RemoveTask(item.id))
                                       
                                    }}
                                >X</button>
                            </li>
                        )
                    })
                }


            </ul>


        </div>
    )
}

export default TodoApp