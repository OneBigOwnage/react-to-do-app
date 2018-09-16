import React, { Component } from 'react';
import Task from './Task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
        let tasks = this.reOrder(this.state.tasks, result.source.index, result.destination.index);
        this.setState({ tasks: tasks });
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
    addTask = (task) => {
        const tasks = Array.from(this.state.tasks);
        tasks.unshift(task);

        this.setState({ tasks: tasks });
    }
    render() {
        return (
            <div className="task-list">

                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}>
                                {this.state.tasks.map((task, index) =>
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
                                                <Task key={task.id} task={task} taskID={task.id} removeTask={this.props.removeTask} />
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
