"use strict"

function unique(list, compare, sorted) {
  if (list.length === 0) {
    return list
  }

  var ptr = 1,
    len = list.length, a, b, i

  if (!compare) {
    if (!sorted) {
      list.sort()
    }

    a = list[0]
    b = list[0]

    for (i = 1; i < len; ++i) {
      b = a
      a = list[i]
      if (a === b) {
        continue
      }

      if (i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  } else {
    if (!sorted) {
      list.sort(compare)
    }

    a = list[0]
    b = list[0]

    for (i = 1; i < len; ++i) {
      b = a
      a = list[i]
      if (!compare(a, b)){
        continue
      }
      if (i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  return list.slice(0, ptr)
}

module.exports = unique
