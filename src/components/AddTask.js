import React, { Component } from 'react';

class AddTask extends Component {
    createTask = (e) => {
        let newTask = {
            id: null,
            title: this.refs.taskText.value,
            count: 1,
            done: false
        }

        // Only add a new task if the field is not empty.
        if (typeof newTask.title === 'string' && newTask.title.length > 0) {
            this.props.addTask(newTask);
        }

        // Clear the input field, and then give focus to the input field again.
        this.refs.taskText.value = '';
        this.refs.taskText.focus();
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.createTask();
        }
    }
    render() {
        return (
            <div className="panel-block">
                <div className="field has-addons" style={{ width: '100%' }} >
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="I wonder..." ref="taskText" autoFocus onKeyDown={this.handleKeyPress} />
                    </p>
                    <p className="control">
                        <a className="button is-link" onClick={this.createTask} >Add</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default AddTask;
