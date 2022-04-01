---
sidebar_position: 8
---

## 介绍

简单说，就是用来**改变 this 的指向**用的方法。（例如在 React 事件绑定中使用 bind，解决 this 指向问题）

## 使用区别

它们的第一个参数都一样，区别在于第二个参数：

- call 参数列表
- apply 参数数组
- bind 可跟一个不定参数的列表，它会返回一个函数，并且实现函数柯里化

```js
var a = { value: "hi" };
var value = "hello world";

function say(params) {
  console.log(params);
  console.log(this.value);
}

say.call(a, "小张");
say.apply(a, ["小雪"]);
say.bind(a)("小红");
```

## 原理实现

### call

```js
Function.prototype.MyCall = function (context) {
  // 满足第一个特性：默认参数为 window
  var context = context || window;

  // 将该方法，赋值为新对象的一个临时属性取名为 fn
  context.fn = this;

  // 取出剩余的其他参数
  var args = [...arguments].slice(1);
  var result = context.fn(...args);

  // 删除这个临时属性并返回结果
  delete context.fn;
  return result;
};
```

### apply

```js
Function.prototype.MyApply = function (context) {
  var context = context || window;
  context.fn = this;

  var result = null;
  // 判断一下第二个参数是否存在
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
};
```

### bind

特点：

- 返回一个函数
- 实现函数柯里化

```js
Function.prototype.MyBind = function (context) {
  var _this = this;
  var args = [...arguments].slice(1);

  // 返回一个函数
  return function () {
    return _this.apply(context, [...args, ...arguments]);
  };
};
```
