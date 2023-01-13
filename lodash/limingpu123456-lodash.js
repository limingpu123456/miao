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
  //将vaules里面包含的值 从array里面排除出去，并返回新数组
  difference: function (array, ...values) {
    const map = [].concat(...values)
    values.forEach(value => {
      if (!Array.isArray(value)) {
        throw new TypeError("argument should be an array");
      }
    })
    const res = []
    for (let a of array) {
      if (!map.includes(a)) {
        res.push(a)
      }
    }
    return res
  },
  drop: function (ary, n = 1) {
    const len = ary.length
    if (len == 0 || n <= 0) return ary.slice()
    const res = []
    for (let i = n; i < len; i++) {
      res.push(ary[i])
    }
    return res
  },
  //从数组尾部切下N长度，并返回剩余切片
  dropRight: function (ary, n = 1) {
    const len = ary.length
    if (len == 0 || n <= 0) return ary.slice()
    const res = []
    for (let i = 0; i < len - n; i++) {
      res.push(ary[i])
    }
    return res
  },
  //使用value值来填充array，从start开始到end，返回原数组
  fill: function (ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  }
}
