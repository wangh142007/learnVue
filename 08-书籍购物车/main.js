
const app = new Vue({
    el:'#app',
    data:{
        books:[
            {id: 1 ,  name:"Unix编译艺术", date:"2006-9", price: 89.00, count: 1},
            {id: 2 ,  name:"代码大全", date:"2006-9", price: 75.00, count: 1},
            {id: 3 ,  name:"深入理解计算机原理", date:"2006-9", price: 98.00, count: 1},
            {id: 4 ,  name:"现代操作系统", date:"2006-9", price: 87.00, count: 1},
        ]
    },
    methods:{
        decrement(index){
            this.books[index].count--
        },
        increment(index){
            this.books[index].count++
        },
        removeHandle(index){
            this.books.splice(index,1)
        }

    },
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    },
    computed:{
        totalPrice(){
            let  totalPrice= 0;
            for (let i = 0; i < this.books.length; i++) {
                totalPrice+= this.books[i].price * this.books[i].count
            }
            return totalPrice
        }
    }
})