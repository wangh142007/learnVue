const {add ,mul } = require('./js/mathUtils.js');

console.log(add(20,30));
console.log(mul(20,30));

require('./css/normal.css');


require('./css/special.less');
document.writeln('<h2>ni hao a </h2>');


//使用vue进行开发
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({

    el: '#app',
    template:'<App/>',
    components: {
        App
    }
    

})
