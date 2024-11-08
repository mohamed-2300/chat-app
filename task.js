import React, { Component } from 'react';


class Task extends Component {
  render() {
    return (
      <li>
        {this.props.task}
        <button onClick={() => this.props.onDelete(this.props.index)}>Supprimer</button>
      </li>
    );
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  handleAddTask = () => {
    if (this.state.newTask.trim()) {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: ''
      }));
    }
  };

  handleDeleteTask = (index) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter((_, i) => i !== index)
    }));
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
          placeholder="Nouvelle tâche"
        />
        <button onClick={this.handleAddTask}>Ajouter tâche</button>
        
        <ul>
          {this.state.tasks.map((task, index) => (
            <Task key={index} index={index} task={task} onDelete={this.handleDeleteTask} />
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Application de Liste de Tâches</h1>
        
        {/* Affichage de la liste de tâches */}
        <TaskList />
      </div>
    );
  }
}

export default App ;





