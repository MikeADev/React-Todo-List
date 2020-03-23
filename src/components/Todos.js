import React from 'react';
import TodoItem from './TodoItem';
import { CSSTransitionGroup } from 'react-transition-group';

class Todos extends React.Component {
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
        title: 'Learn CSS Animation',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  }

  render() {
    let todoList = this.state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} delToDo={this.delToDo}/>
    ));
    return (
    <CSSTransitionGroup 
      transitionName="delToDo"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {todoList}
    </CSSTransitionGroup>
    );
  }
}

export default Todos
