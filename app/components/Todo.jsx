var React = require('react');

class Todo extends React.Component{
  render(){
    var {id, text} = this.props;
    return (
      <div>
       {id}.) {text}
      </div>
    )
  }
}

module.exports = Todo;