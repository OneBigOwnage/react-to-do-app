import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {
        return (
            <div className="task-list">
                {
                    Object.keys(this.props.tasks).map(taskID =>
                        <Task key={taskID} task={this.props.tasks[taskID]} taskID={taskID} removeTask={this.props.removeTask} />
                    )
                }

            </div>
        );
    }
}

export default TaskList;
