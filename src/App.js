import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router';
import './App.css';
import About from './components/pages/About';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import axios from 'axios';



export class App extends Component {

  state = { todos: [] };

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
  //     .then(res => this.setState({todos: res.data}))
  // }

// Before jsonplaceholder integration
  state = {
    todos: [{
        id: uuid.v4(),
        title: 'Wash bedsheets',
        completed: false
    },
    {
        id: uuid.v4(),
        title: 'You can mark tasks as completed',
        completed: true
    },
    {
        id: uuid.v4(),
        title: 'Or even delete them ',
        completed: false
    },
    {
        id: uuid.v4(),
        title: 'Add your own tasks!',
        completed: false
    }
    ]
};

toggleCompleteApp = (id) => {
    this.setState ({
        todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = ! todo.completed;
            }
            return todo;
        })
    });
}

deleteInApp = (id) => {
  // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)  
  //   .then(res => 
      this.setState ({
        todos: [...this.state.todos.filter(todo =>
          todo.id !== id)]
})  //)
}

  addNewTodo = (title) => {
    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title,
    //   completed: false
    // })
    // .then(res => {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
      }      
      this.setState({todos: [...this.state.todos, newTodo]})  //})
  }

  render () {
    return (
      <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render = {props => (
                <React.Fragment>
                  <AddTodo addTodo = {this.addNewTodo}/>
                  <Todos todos={this.state.todos} 
                    toggleCompleteTodos = {this.toggleCompleteApp}
                    deleteInTodos = {this.deleteInApp} />
                </React.Fragment>
              )}  />
              <Route path="/about"  
                component={About} />

            </div>
          </div>
        </Router>
    );
  }

}

export default App;
