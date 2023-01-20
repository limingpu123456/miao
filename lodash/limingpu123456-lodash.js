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
  },
  //用二分法，找到已排序的数组中可插入value的最大索引，并返回
  sortedLastIndex: function (ary, val) {
    let l = 0
    let r = ary.length
    while (l < r) {
      var m = l + r >> 1
      if (ary[m] > val) {
        r = m
      } else {
        l = m + 1
      }
    }
    return l
  },
  //用二分法，找到在已排序的数组中查找value的最大索引，并返回，若无，返回-1
  sortedLastIndexOf: function (ary, val) {
    let l = 0
    let r = ary.length
    while (l < r) {
      var m = l + r >> 1
      if (ary[m] > val) {
        r = m
      } else {
        l = m + 1
      }
    }
    if (l > 0 && ary[l - 1] == val) {
      return l - 1
    }
    return -1
  },
  //遍历原数组，重复的返回1个，返回没有重复值的新数组
  sortedUniq: function (ary) {
    let res = []
    for (let a of ary) {
      if (!res.includes(a)) {
        res.push(a)
      }
    }
    return res
  },
  //返回数组除第一位外全部元素，切片
  tail: function (ary) {
    ary.shift()
    return ary
  },
  //返回数组从0位开始的N个元素
  take: function (ary, n = 1) {
    let res = []
    if (n == 0) return res
    for (let i = 0, l = ary.length, end = Math.min(l, n); i < end; i++) {
      res.push(ary[i])
    }
    return res
  },
  //从尾部开始提取元素的个数
  takeRight: function (ary, n = 1) {
    var res = []
    if (ary.length <= n) {
      return ary
    }
    for (let i = ary.length - n; i < ary.length; i++) {
      res.push(ary[i])
    }
    return res
  },
  //给所有输入的数组做比较，去除与之前数组的相同的值，并按顺序返回唯一值的数组
  union: function (...arys) {
    //注意res.concat(val)这个外面不能加大括号，如果加了大括号就得写return，如果不加{}会自动写一个return
    //...可以将set值转换为数组；或者通过Array.from(set)迭代对象返回新数组
    return Array.from(new Set(arys.reduce((res, val) => res.concat(val), [])))
  },
  //返回新的去重后的数组，保留第一次出现的值
  uniq: function (ary) {
    return Array.from(new Set(ary))
  },
  //过滤掉数组array中所有value的值，返回过滤后的新数组
  without: function (ary, ...values) {
    const res = []
    for (let i of ary) {
      if (!values.includes(i)) {
        res.push(i)
      }
    }
    return res
  },
  //返回去除给定数组交集的新数组，顺序取决于他们数组的出现顺序
  xor: function (...arys) {
    let res = []
    let map = {}

    arys.forEach(item => {
      item.forEach(it => {
        if (it in map) {
          map[it] += 1
        } else {
          map[it] = 1
        }
      })
    })

    for (var i in map) {
      if (map[i] == 1) {
        res.push(Number(i))
      }
      return res
    }
  },
}
