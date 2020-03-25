import React from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

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
      {
        id: 3,
        title: 'Learn CSS animation',
        completed: false
      }
    ]
  }

  // Toggles completed on a todo to add line-through styling via
  // getStyle in TodoItem.js
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  // Filters a todo with matching id from state. 
  // Triggered by TodoItem button
  delToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  }
  
  // Creates a new todo
  // Triggered by AddTodo button
  addTodo = (id, title) => {
    this.setState({todos: [...this.state.todos, {id: id, title: title, completed: false}]});
  }

  render() {
    return (
      <div className="App" style={{width: "30rem"}}>
        <AddTodo addTodo={this.addTodo} todos={this.state.todos}/>
        <ul className="list-group">
            <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
        </ul>
      </div>
    );
  }
}

export default App