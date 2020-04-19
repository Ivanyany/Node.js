/**
 * 模块化
 * 在另一个js中引入这个模块
 * node中每一个js代码都是独立运行在一个函数中,而不是全局作用域
 * 所以一个模块的变量的函数在其他模块中无法直接访问
 * 可以使用exports向外部暴露变量或方法
 */
console.log("我是一个模块,别人会来引入我");

/**
 * 使用exports向外部暴露变量或方法
 */
exports.x = "我是模块中的变量,通过exports向外部暴露自己";
exports.add = function (a, b) {
    return a + b;
};
//使用module.exports暴露与使用exports暴露是一样的
module.exports.mul = function (a, b) {
    return a * b;
};

/**
 * 在node中有一个全局对象global,它的作用和网页中的window类似
 *  在全局中创建的变量都会作为global的属性保存
 *  在全局中创建的函数都会作为global的方法保存
 *
 *  当node在执行模块中的代码时,它会首先在代码的最顶部,添加如下代码
 *      function (exports, require, module, _filename, _dirname){
 *
 *  在代码的最底部添加如下代码
 *      }
 *
 *  实际上模块中的代码都是包装在一个函数中执行的,并且在函数执行时同时传递了5个实参
 *  exports
 *      -该对象用来将变量或者函数暴露到外部
 *  require
 *      -函数,用来引入外部的模块
 *  module
 *      -module代表的是当前模块本身
 *      -exports就是module的属性
 *      -既可以用exports暴露,也可以用module.exports暴露
 *  _filename
 *      -当前模块的完整路径
 *      -G:\00Node.js\module2.js
 *  _dirname
 *      -当前模块所在文件夹的完整路径
 *      -G:\00Node.js
 */
a = 10;//定义全局变量
console.log(global.a);

/**
 * arguments.callee
 *  -这个属性保存的是当前执行的函数对象
 */
