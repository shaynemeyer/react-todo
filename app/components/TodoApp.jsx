var React = require('react');
var TodoList = require('TodoList');

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

  render(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

module.exports = TodoApp;