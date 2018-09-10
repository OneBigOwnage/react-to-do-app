import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {
        return (
            <div className="task-list">
                {
                    this.props.tasks.map(task =>
                        <Task key={task.id} task={task} taskID={task.id} removeTask={this.props.removeTask} />
                    )
                }

            </div>
        );
    }
}

export default TaskList;
