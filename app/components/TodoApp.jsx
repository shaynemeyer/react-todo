var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'clean the yard'
        }, {
          id: 3,
          text: 'Walk the cat'
        },{
          id: 4,
          text: 'clean the house'
        }
      ]
    }
  }

  handleAddTodo(text){
    alert('new todo: ' + text);
  }

  render(){
    var {todos} = this.state;
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;