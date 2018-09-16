import React, { Component } from 'react';

class Task extends Component {
  onCheck = () => {
    if (this.props.task.done) {
      this.props.setTaskTodo(this.props.task);
    } else {
      this.props.setTaskDone(this.props.task);
    }
    // this.props.setTaskDone(this.props.task, !this.props.task.done);
  }
  getClass = (done) => {
    let classes = ['panel-block', 'task'];
    if (done) {
      classes.push('task-is-done');
    }
    return classes.join(' ');
  }
  handleCounterChange = (e) => {
    // Delegate to an existing function.
    this.addRemoveCount(e.target.value);
  }
  addRemoveCount = amount => {
    let newCount = Number(this.props.task.count) + amount;
    if (/^[0-9]{0,3}$/.test(newCount)) {
      this.props.changeTaskCount(this.props.task, newCount);
    }
  }
  changeTaskCount = (newCount) => {
    let task = this.props.task;
    this.props.changeTaskCount(task, newCount);
  }
  removeTask = () => {
    this.props.removeTask(this.props.task.id);
  }
  render() {
    return (
      <div className={this.getClass(this.props.task.done)} >
        <div className="task-description" >
          <input type="checkbox" checked={this.props.task.done} onChange={this.onCheck} />
          <p>{this.props.task.title}</p>
        </div>

        <div className="task-options">
          <div className="field has-addons" >
            <p className="control">
              <a className="button is-danger is-small counter-button" onClick={() => { this.addRemoveCount(-1) }}>
                <i className="material-icons">remove</i>
              </a>
            </p>
            <p className="control">
              <input className="input is-small task-counter" value={this.props.task.count} type="text" pattern="[0-9]{0,3}" onChange={this.handleCounterChange} />
            </p>
            <p className="control">
              <a className="button is-success is-small counter-button" onClick={() => { this.addRemoveCount(1) }}>
                <i className="material-icons">add</i>
              </a>
            </p>
          </div>
          <a className="button is-danger is-small is-outlined remove-item-btn" onClick={this.removeTask}>
            <i className="material-icons">clear</i>
          </a>
        </div>

      </div>
    );
  }
}

export default Task;
