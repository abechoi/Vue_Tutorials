const app = Vue.createApp({
    // function named data that returns an object
    data() {
        return {
            showBooks: true,
            books: [
                {title: "Name of the Wind", author: "Patrick Rothfuss"},
                {title: "The Way of Kings", author: "Brandon Sanderson"},
                {title: "The Final Empire", author: "Brandon Sanderson"}
            ],
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