import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Title from './components/Title';
import InitialState from './InitialState';
import TasksHelper from './TasksHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.todoList = React.createRef();
    this.state = InitialState;
  }
  getNewID = () => {
    // Magic!
    let ids = Array.from(this.state.tasks).map(task => task.id);

    if (ids.length < 1) {
      return 0;
    }

    // More Magic!!
    return (ids.sort((a, b) => a - b).pop()) + 1;
  }
  addTask = (task) => {
    task.id = this.getNewID();
    let tasks = [...this.state.tasks];
    tasks.unshift(task);

    this.setState({ tasks: tasks });
  }
  removeTask = (taskID) => {
    let tasks = Array.from(this.state.tasks);
    tasks = tasks.filter(task => task.id !== Number(taskID));

    this.setState({ tasks: tasks });
  }
  setTaskList = (tasks) => {
    this.setState({ tasks: tasks });
  }
  setTaskDone = (task) => {
    this.setState({ tasks: TasksHelper.setTaskDone([...this.state.tasks], task) });
  }
  setTaskTodo = (task) => {
    this.setState({ tasks: TasksHelper.setTaskTodo([...this.state.tasks], task) });
  }
  changeTaskCount = (task, newCount) => {
    let position = this.state.tasks.map(task => task.id).indexOf(task.id);
    let tasks = [...this.state.tasks];
    tasks[position].count = newCount;

    this.setState({ tasks: tasks });
  }
  render() {
    return (
      <div className="App">
        <nav id="tasks-panel" className="container">
          <Title text="BoodschApp" />
          <AddTask addTask={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            removeTask={this.removeTask}
            ref={this.todoList}
            setTaskList={this.setTaskList}
            setTaskDone={this.setTaskDone}
            setTaskTodo={this.setTaskTodo}
            changeTaskCount={this.changeTaskCount} />
        </nav>
      </div>
    );
  }
}

export default App;
