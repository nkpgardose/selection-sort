'use strict';

function comparator(a, b) { return a - b; }
module.exports = function (list, cmp) {
  var compare = cmp || comparator,
      maxlen  = list.length,
      currentMin, temp;

  for (var i = 0; i < maxlen - 1; i++) {
    currentMin = i;
    for (var j = i + 1; j < maxlen; j++) {
      if(compare(list[currentMin], list[j]) > 0) {
        currentMin = j;
      }
    }
    if(currentMin !== i) {
      temp = list[currentMin];
      list[currentMin] = list[i];
      list[i] = temp;
    }
  }

  return list;
};
