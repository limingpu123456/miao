var limingpu123456 = {
  //判断是否为null
  isNull: function (value) {
    return value === null
  },
  //判断是否为NaN
  isNaN: function (value) {

    if (typeof (value) == 'object') {
      if (value.length > 1) return false
      value = Number(String(value))
    }
    return value !== value ? true : false
  },
  //这个方法返回它接受到的第一个参数
  identity: function (value) {
    return arguments[0]
  },
  //将输入array拆分成多个size长度的区块，并将这些区块组成一个新数组
  chunk: function (ary, size = 1) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  //找出数组中所有非false的值并返回到新数组
  compact: function (ary) {
    return ary.filter(a => a)
  },
  //将ary与任何其他值连接起来，并返回新数组
  concat: function (ary, ...args) {
    const result = ary.slice()
    for (let arg of args) {
      if (Array.isArray(arg)) {
        for (let e of arg) {
          result.push(e)
        }
      } else {
        result.push(arg)
      }
    }
    return result
    //调用内置api也可以实现
    //return args.reduce((mappedArr, cur) => mappedArr.concat(cur), arr.slice());
  },
}
