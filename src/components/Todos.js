import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

export class Todos extends React.Component {
  
  render() {
    let todoList = this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delToDo={this.props.delToDo}/>
    ));
    return (
    // React Transition Group to add transitions
    // for creation and deletion of todos
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

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delToDo: PropTypes.func.isRequired
}

export default Todos
