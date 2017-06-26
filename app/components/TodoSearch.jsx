var React = require('react');

class TodoSearch extends React.Component {
  // handleSubmit(e){
  //   e.preventDefault();
  //   var todoText = this.refs.todoText.value;
  //
  //   if(todoText.length > 0) {
  //     this.refs.todoText.value = '';
  //     this.props.onAddTodo(todoText);
  //   } else {
  //     this.refs.todoText.focus();
  //   }
  // }

  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return (
      <div>
        <div>
          <input type="text" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" ref="showCompleted" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}

module.exports = TodoSearch;