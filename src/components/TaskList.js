import React, { Component } from 'react';
import Task from './Task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import TasksHelper from './../TasksHelper';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        let tasks = this.reOrder(this.props.tasks, result.source.index, result.destination.index);

        if (TasksHelper.validateTaskList(tasks)) {
            this.props.setTaskList(tasks);
        }
    }
    reOrder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }
    getItemStyle = (isDragging, draggableStyle) => {
        let style = { ...draggableStyle };

        if (isDragging) {
            style.backgroundColor = '#FFFA70';
            style.transform += 'rotate(-2deg)';
        }

        return style;
    }
    render() {
        return (
            <div className="task-list">

                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}>
                                {this.props.tasks.map((task, index) =>
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={this.getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <Task
                                                    key={task.id}
                                                    task={task}
                                                    removeTask={this.props.removeTask}
                                                    setTaskDone={this.props.setTaskDone}
                                                    setTaskTodo={this.props.setTaskTodo}
                                                    changeTaskCount={this.props.changeTaskCount} />
                                            </div>
                                        )}
                                    </Draggable>
                                )}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

            </div>
        );
    }
}

export default TaskList;
