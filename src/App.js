import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Title from './components/Title';
import DefaultItems from './DefaultItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: DefaultItems
    }
  }
  addTask = (task) => {
    // Magic!
    let nextID = Number([...Object.keys(this.state.tasks).sort()].pop()) + 1;
    let tasks = Object.assign({}, this.state.tasks);

    tasks[nextID] = task;

    this.setState({ tasks: tasks });
  }
  removeTask = (taskID) => {
    let state = Object.assign({}, this.state);

    delete state.tasks[taskID];
    this.setState(state);
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
