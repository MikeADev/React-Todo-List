import React from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends React.Component {
    
    state={
        id: this.props.todos[this.props.todos.length-1].id + 1,
        title: ''
    }

    // If the input element is not blank, calls addTodo (App.js) function
    // in props and passes state id and title as arguments
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title !== ''){
          this.props.addTodo(this.state.id, this.state.title);
          this.setState({id: this.state.id + 1, title: ''})
        }
    }

    // Updates state title to match the value of input element
    onChange = (e) => this.setState({title : e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
              <input 
                type="text" 
                name="title" 
                style={{flex: '10'}} 
                placeholder="Add Todo..." 
                value={this.state.title} 
                onChange={this.onChange} 
              />
              <input 
                type="submit" 
                name="submit"
                className="btn btn-success"
                value="Add"
              />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo