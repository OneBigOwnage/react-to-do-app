import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.task.done,
      count: props.task.count,
      id: props.taskID
    };
  }
  onCheck = () => {
    this.setState({
      done: !this.state.done
    });
  }
  getClass = (done) => {
    let classes = ['panel-block task'];
    if (done) {
      classes.push('task-is-done');
    }
    return classes.join(' ');
  }
  handleCounterChange = (e) => {
    let count = this.state.count;

    if (e.target.validity.valid) {
      count = e.target.value;
    }

    this.setState({ count: count });
  }
  addRemoveCount = amount => {
    let newCount = Number(this.state.count) + amount;
    if (/^[0-9]{0,3}$/.test(newCount)) {
      this.setState({ count: newCount });
    }
  }
  removeTask = () => {
    this.props.removeTask(this.state.id);
  }
  render() {
    return (
      <div className={this.getClass(this.state.done)} >
        <div className="task-description" >
          <input type="checkbox" ref="isChecked" checked={this.state.done} onChange={this.onCheck} />
          <p className={this.state.pClass} >{this.props.task.title}</p>
        </div>

        <div className="task-options">
          <div className="field has-addons" >
            <p className="control">
              <a className="button is-danger is-small counter-button" onClick={() => { this.addRemoveCount(-1) }}>
                <i className="material-icons">remove</i>
              </a>
            </p>
            <p className="control">
              <input className="input is-small task-counter" value={this.state.count} type="text" pattern="[0-9]{0,3}" onChange={this.handleCounterChange} />
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
