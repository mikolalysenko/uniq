"use strict"

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }

  if(!compare) {
    compare = function(l, r){return l !== r }
    if(!sorted) {
      list.sort()
    }
  }
  else{
    if(!sorted) {
      list.sort(compare)
    }
  }

  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
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

module.exports = unique
