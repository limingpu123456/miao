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
  },
  //获取数组第一位
  head: function (ary) {
    return ary.length ? ary[0] : undefined
  },
  //减少一级的array数组的嵌套等级
  flatten: function (ary) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        res.push(...ary[i])
      } else {
        res.push(ary[i])
      }
    }
    return res
  },
  //获取数组中从fromIndex开始，第一次出现值得索引，如果fromIndex为负数，则从0开始
  indexOf: function (ary, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = 0
    }
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  },
  //返回除最后一位的数组切片
  initial: function (ary) {
    const res = []
    for (var i = 0; i < ary.length - 1; i++) {
      res.push(ary[i])
    }
    return res
  },
  //找出输入得所有数组的交集
  intersection: function (array, ...arys) {
    let res = []
    for (var a of arys) {
      for (var b of a) {
        if (array.includes(b)) {
          res.push(b)
        }
      }
    }
    return res
  },
  //把数组以separator连接成字符串并返回
  join: function (ary, separator = "") {
    let res = ""
    separator = String(separator)
    for (var i = 0; i < ary.length - 1; i++) {
      res = res + ary[i] + separator
    }
    res = res + ary[ary.length - 1]
    return res
  },
  //返回数组的最后一位
  last: function (ary) {
    let res = 0
    if (ary.length) {
      res = ary[ary.length - 1]
    }
    return res
  },
  //获取数组中从fromIndex开始，往左遍历，第一次出现值时所在的索引，如果发fromINdex为负数，则表示结尾往开始偏移
  lastIndexOf: function (ary, value, fromIndex = ary.length - 1) {
    if (fromIndex < 0) {
      return -1
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
  },
  //返回数组第N位，如果n<0则从结尾开始往左第N位
  nth: function (ary, n = 0) {
    let len = ary.length
    if (n < 0) n += len
    return ary[n]
  },
  //移除数组中的value的值，并返回修改后的数组
  pull: function (ary, ...values) {
    let res = []
    ary.forEach(it => {
      if (!values.includes(it)) {
        res.push(it)
      }
    })
    return res
  },
  //移除数组中的values值，并返回修改后的数组
  pullAll: function (ary, value) {
    let result = []
    for (var a of ary) {
      if (!value.includes(a)) {
        result.push(a)
      }
    }
    return result
  },
  //根据索引，移除数组中对应的值，并返回被移除数组组成的新数组
  pullAt: function (ary, indexed) {
    let result = []
    indexed.forEach(it => {
      result.push(ary[it])
    })
    return result
  },
  //反转数组，会修改原数组
  reverse: function (ary) {
    let low = 0
    let high = ary.length - 1
    while (low < high) {
      let t = ary[low]
      ary[low] = ary[high]
      ary[high] = t
      low++
      high--
    }
    return ary
  },
  //通过二分法，将value插入已排序的数组中，并返回其最小索引
  sortedIndex: function (ary, value) {
    let l = 0
    let r = ary.length - 1
    while (l < r) {
      let mid = l + r >> 1
      if (ary[mid] >= value) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    return l
  },
  //用二分法找到value在array的最小索引，如没有返回-1
  sortedIndexOf: function (ary, val) {
    let first = 0
    let last = ary.length - 1
    while (first < last) {
      let mid = Math.floor((first + last) / 2)
      if (ary[mid] < val) {
        first = mid + 1
      } else {
        last = mid - 1
      }
    }
    if (ary[first] == val) {
      return first
    }
    return -1
  }
}
