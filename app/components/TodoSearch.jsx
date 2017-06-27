var React = require('react');

class TodoSearch extends React.Component {
  handleSearch = () => {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" ref="showCompleted" placeholder="Search todos" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}

module.exports = TodoSearch;