# Selection Sort JS Algorithm

> Sorting algorithm with O(n^2) complexity. A process of rely on the smallest or largest element in sorted region.


## Usage

```js
var selectionSort = require('selection-sort');

// Default in ascending sort
selectionSort([4, 5, 3, 2, 1]);
// => [1,2,3,4,5]

// Can deal with descending sort
function desc(a, b) { return b - a; }
selectionSort([1, 254, 33, 20, 10, 20], desc);
// => [254, 33, 20, 20, 10, 1]

// Sort arrays of object
function compareObj(a, b) { return a.age - b.age; }
var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

selectionSort(people, compareObj);
/**
=>[{"name": 'Passy', "age": 25, "place": 1},
  {"name": 'Sindre', "age": 30, "place": 2},
  {"name": 'Matt', "age": 35, "place": 3},
  {"name": 'Stephen', "age": 40, "place": 4}]
*/


```


## License

MIT © [Neil Kim Gardose](https://github.com/nkpgardose)