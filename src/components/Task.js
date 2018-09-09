import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="panel-block task">
        <input type="checkbox" />
        {this.props.text}
        <input type="number" className="task-counter" value={this.props.count} />
      </div>
    );
  }
}

export default Task;
