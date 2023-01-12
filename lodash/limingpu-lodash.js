
var limingpu = {
  // 判断是否为null
  isNull: function (value) {
    return (value === null) ? true : false
  },

  //判断是否为NaN
  isNaN: function (value) {
    if (typeof (value) == "object") {
      if (value.length > 1) return false
      value = Number(value)
    }
    return (value !== value) ? true : false
  }

}
