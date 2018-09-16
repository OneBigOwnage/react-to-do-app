import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Title from './components/Title';
import InitialState from './InitialState';

class App extends Component {
  constructor(props) {
    super(props);
    this.todoList = React.createRef();
    this.state = InitialState;
  }
  getNewID = () => {
    let ids = Array.from(this.state.tasks).map(task => task.id);

    if (ids.length < 1) {
      return 0;
    }

    return (ids.sort((a, b) => a - b).pop()) + 1;
  }
  addTask = (task) => {
    task.id = this.getNewID();
    let tasks = Array.from(this.state.tasks);
    tasks.unshift(task);

    this.setState({ tasks: tasks });
    this.todoList.current.addTask(task);
  }
  removeTask = (taskID) => {
    let tasks = Array.from(this.state.tasks);
    tasks = tasks.filter(task => task.id !== Number(taskID));

    this.setState({ tasks: tasks });
  }
  render() {
    return (
      <div className="App">
        <nav id="tasks-panel" className="container">
          <Title text="My personal todo list" />
          <AddTask addTask={this.addTask} />
          <TaskList tasks={this.state.tasks} removeTask={this.removeTask} ref={this.todoList} />
        </nav>
      </div>
    );
  }
}

export default App;
