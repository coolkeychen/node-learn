/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: 原型链继承
 */

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subProperty = false;
}

SubType.prototype  = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subProperty;
}

let instance = new SubType();
console.log(instance.getSuperValue());