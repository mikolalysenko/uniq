"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a = list[0], b = list[0]
  if(typeof compare !== "function") {
    compare = function(a, b) {
      return (a !== b)
    }
  }
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(!sorted) {
    list.sort(compare)
  }
  return unique_pred(list, compare)
}

module.exports = unique
