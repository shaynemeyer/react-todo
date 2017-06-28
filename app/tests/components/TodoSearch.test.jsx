var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH on input change', () => {
    var searchText = 'Dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var searchTodo = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    searchTodo.refs.searchText.value = searchText;
    TestUtils.Simulate.change(searchTodo.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var spy = expect.createSpy();
    var searchTodo = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    searchTodo.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(searchTodo.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});