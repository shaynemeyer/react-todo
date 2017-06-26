var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var searchTodo = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    searchTodo.refs.searchText.value = searchText;
    TestUtils.Simulate.change(searchTodo.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var searchTodo = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    searchTodo.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(searchTodo.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});