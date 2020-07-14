// 1.导入的{}定义的变量
import{flag} from "./aaa.js"

if(flag){
    console.log('xiao ming shi tian cai ')
}

// 2.直接导入export定义的变量
import{num1,height} from "./aaa.js";
console.log(num1);
console.log(height);

// 3.导入export的function
import {mul, Person} from './aaa.js'
console.log(mul(30,50))

const p = new Person();
p.run();

import aa from './aaa.js'
console.log(aa);