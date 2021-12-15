const app = Vue.createApp({
    // function named data that returns an object
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        isShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, num){
            console.log(e, e.type)
            if(num){
                console.log(num)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

})

app.mount("#app")