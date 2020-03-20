import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Create personal website',
        completed: false
      },
      {
        id: 2,
        title: 'Add projects to website',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id).map(todo => {
      if (todo.id > id){
        todo.id -= 1
      }
      return todo;
    })});
  }

  render() {
    return (
      <div className="App card" style={{width: "18rem"}}>
        <div className="card-header">
          To-Do
        </div>
        <ul className="list-group list-group-flush">
          <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
        </ul>
      </div>
    );
  }
}

export default App;