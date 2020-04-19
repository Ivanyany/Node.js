/**
    模块化
    如：引入module2.js
    可以使用require()函数来引入外部模块
    require()可以传递一个文本的路径作为参数,node将会自动根据该路径来引入外部模块
    这里的路径如果使用相对路径,必须使用.或者..开头
    使用require()引入模块后，该函数会返回一个对象,这个对象代表的是引入的模块

    模块化分为两大类
        -核心模块
            由node引擎提供的模块
            核心模块的标识就是模块的名字
        -文件模块
            由用户自己创建的模块
            文件模块的标识就是文件的路径(绝对路径、相对路径(使用.或者..开头))
 */
var m = require("./module2");//文件模块的引入需要写路径
var fs = require("fs");//核心模块的引入不需要写路径,直接写模块名即可
console.log(m);//访问模块中的变量
console.log(m.add(1, 2));//访问模块中的方法
console.log(m.mul(3, 4));//访问模块中的方法