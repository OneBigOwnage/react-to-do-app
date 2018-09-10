import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Title from './components/Title';
import InitialState from './InitialState';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }
  getNewID = () => {
    let ids = Array.from(this.state.tasks).map(task => task.id);

    if (ids.length < 1) {
      return 0;
    }

    return ids.sort().pop() + 1;
  }
  addTask = (task) => {
    task.id = this.getNewID();
    let tasks = Array.from(this.state.tasks);
    tasks.push(task);

    this.setState({ tasks: tasks });
  }
  removeTask = (taskID) => {
    let tasks = Array.from(this.state.tasks);
    tasks = tasks.filter(task => task.id !== Number(taskID));

    this.setState({tasks: tasks});
  }
  render() {
    return (
      <div className="App">
        <nav id="tasks-panel" className="container">
          <Title text="My personal todo list" />
          <AddTask addTask={this.addTask} />
          <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
        </nav>
      </div>
    );
  }
}

export default App;
