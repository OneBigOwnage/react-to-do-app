import React, { Component } from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Title from './components/Title';
import DefaultItems from './DefaultItems';


class App extends Component {
  addTask(task) {
    DefaultItems.push(task);
  }
  render() {
    return (
      <div className="App">
        <nav id="tasks-panel" className="panel">
          <Title text="My personal todo list" />
          <AddTask />

          {
            DefaultItems.map(task =>
              <Task key={task.id} text={task.title} count={task.count} />
            )
          }

        </nav>
      </div>
    );
  }
}

export default App;
