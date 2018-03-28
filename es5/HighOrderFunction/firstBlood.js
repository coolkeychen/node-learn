/*
*
* 什么是高阶函数？
* JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
*
* */

function add(x,y,f) {
    return f(x) + f(y);
}

console.log(add(1,3,Math.abs));