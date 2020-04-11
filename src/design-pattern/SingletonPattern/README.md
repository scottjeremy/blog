## 单例模式（ Constructor Pattern ）

单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

业务点： 当我要做一个登录弹窗的时候

```html
<html>
  <body>
    <button id="loginBtn">登录</button>
  </body>
</html>

<script>
const createLoginDialog = () => {
  return document.body.appendChild(document.createElement('div'));
};

$('loginBtn').click(function () {
  const loginDialog = createLoginDialog();
  loginDialog.show();
});
</script>>
```

创建一个弹窗，添加到html里，但是每次点击登录按钮的时候都会创建一个新的登录弹窗，这样频繁的操作节点显然是不合理的，故使用一个变量判断是否已经创建过登录弹窗，如果有创建过则不再创建登录弹窗了。

```html
<html>
  <body>
    <button id=""loginBtn>登录</button>
  </body>
</html>

<script>
let loginDialog;
const createLoginDialog = () => {
  if (loginDialog) {
    return loginDialog;
  } else {
    loginDialog = document.body.appendChild(document.createElement('div'));
  }
  return loginDialog;
};

$('loginBtn').click(function () {
  const loginDialog = createLoginDialog();
  loginDialog.show();
});
</script>>
```

这样的例子会影响全局的变量，但我们也有可能永远不需要这个弹窗，那这样又浪费掉了一个div，那么我可不可以通过一个局部变量来判断是否创建过div呢？

```html
<html>
  <body>
    <button id=""loginBtn>登录</button>
  </body>
</html>

<script>
const createLoginDialog = () => {
  let loginDialog;
  return function() {
    if (loginDialog) {
      return loginDialog;
    }
    loginDialog = document.body.appendChild(document.createElement('div'));
    return loginDialog;
  }
};

$('loginBtn').click(function () {
  const loginDialog = createLoginDialog();
  loginDialog.show();
});
</script>>
```

用个简单的闭包把loginDialog变量包起来，这样就达到了当第一次点击的时候才会创建div
