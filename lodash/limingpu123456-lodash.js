var limingpu123456 = {
  chunk: function (ary, val) {
    var result = []
    var j = 0
    for (var i = 0; i < ary.length; i++) {
      if (i % val == 0) {
        result[j] = []
      }
      result[j].push(ary[i])
      if ((i + 1) % val == 0) {
        j++
      }
    }
    return result
  },

}
