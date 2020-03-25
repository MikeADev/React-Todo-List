import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
    // Sets a style of line-through if todo prop is completed
    // or none if not completed
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <li className="list-group-item">
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                <p style={this.getStyle()}>{title}</p>
                <button type="button" className="btn btn-danger" onClick={this.props.delToDo.bind(this, id)}>x</button>
            </li>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delToDo: PropTypes.func.isRequired
  }

export default TodoItem