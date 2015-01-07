/*global describe, it */
'use strict';
var assert = require('assert');
var selectionSort = require('../');

function desc(a, b) { return b - a; }
function compareObj(a, b) { return a.age - b.age; }
var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

describe('selection-sort node module', function () {
  it('should sort given array values', function() {
    assert.deepEqual(selectionSort([4, 5, 3, 2, 1]), [1,2,3,4,5]);
    assert.deepEqual(selectionSort([4, 5, 3, 1, 2]), [1,2,3,4,5]);
    assert.deepEqual(selectionSort([5, 4, 3, 2, 1]), [1,2,3,4,5]);
  });

  it('should sort list in descending order', function() {
    assert.deepEqual(selectionSort([1, 254, 33, 20, 10, 20], desc), [254, 33, 20, 20, 10, 1]);
    assert.deepEqual(selectionSort([0, 8, 4, 10, 2], desc), [10, 8, 4, 2, 0]);
    assert.deepEqual(selectionSort([0, 0, -2, 0, 0], desc), [0, 0, 0, 0, -2]);
  });

  it('should work with array of objects in ascending order', function() {
    assert.deepEqual(selectionSort(people, compareObj), [
      {"name": 'Passy', "age": 25, "place": 1},
      {"name": 'Sindre', "age": 30, "place": 2},
      {"name": 'Matt', "age": 35, "place": 3},
      {"name": 'Stephen', "age": 40, "place": 4}]
    );
  });
});
