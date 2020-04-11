## 代理模式（Proxy Pattern）

代理模式的定义是：为一个对象找一个替代对象，以便对原对象进行访问。

使用代理的原因是我们不愿意或者不想对原对象进行直接操作，我们使用代理就是让它帮原对象进行一系列的操作，等这些东西做完后告诉原对象就行了。

就像网上的例子`明星买鞋子`

```JavaScript
// 定义一个鞋子类
var Shoes = function(name){
    this.name = name;
};

Shoes.prototype.getName = function() {
    return this.name;
};

// 定义一个助理对象
var assistant = {
    buyShoes: function(shoes) {
        star.buyShoes(shoes.getName())
    }
};

// 定义一个明星对象
var star = {
    buyShoes: function(name) {
        console.log('买到了一双' + name);
    }

};

assistant.buyShoes(new Shoes('高跟鞋')); // "买到了一双高跟鞋"
```

这个例子就像我封装了个httpService，实际上是用axios对象来做请求，但在axios上我做了层HttpService的对象，这个对象也是暴露出get、post等请求方法，但是HttpService引用源是axios。

而我在外部请求的时候也是使用HttpService这个代理对象去访问axios，当然，这个HttpService上的属性方法也可以在axios的基础上封装一些自己的业务
