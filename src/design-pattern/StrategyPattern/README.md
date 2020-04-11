## 策略模式（Strategy Pattern）

策略模式的定义是：其定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换。封装的策略算法一般是独立的，策略模式根据输入来调整采用哪个算法。关键是策略的实现和使用分离。

简单得来说就是根据不同的状态去执行不同的算法

```JavaScript
// 策略对象
const strategies = {
    //一系列算法
    "S" : function ( salary ) {
        return salary * 4;
    },
    "A" : function ( salary ) {
        return salary * 3;
    },
    "B" : function ( salary ) {
        return salary * 2;
    }
};

const calculateBonus = function ( level, salary) {
    return strategies[level](salary);
}
console.log(calculateBonus('S',20000));
```

对于我来说。我就觉得这个就是一个select框的Service层。

```JavaScript
class service {
  async getXXX: (params) {
    const data = await axion.get("url", { params })
    return data;
  }
  
  ...
}

const selectService = function(fnName, params) {
  return service[fnName](params);
};

console.log(selectService["getXXX", { a: 1 }]);
```

总感觉有哪些不对，但又说不出来，但我就是觉得差不多。
