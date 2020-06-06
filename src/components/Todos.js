import React, {Component} from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import '../App.css';


export class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem 
                key = {todo.id}
                todo = {todo} 
                toggleComplete = {this.props.toggleCompleteTodos}
                deleteIn = {this.props.deleteInTodos}/>
        ));
        
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleCompleteTodos: PropTypes.func.isRequired,
    deleteInTodos: PropTypes.func.isRequired
}

export default Todos