const app = Vue.createApp({
    // function named data that returns an object
    data() {
        return {
            url: "https://abechoi.com",
            showBooks: true,
            books: [
                {title: "Name of the Wind", author: "Patrick Rothfuss", img: "assets/1.jpg", isFav: true},
                {title: "The Way of Kings", author: "Brandon Sanderson", img: "assets/2.jpg", isFav: false},
                {title: "The Final Empire", author: "Brandon Sanderson", img: "assets/3.jpg", isFav: true}
            ]
        }
    },
    methods: {
        isShowBooks(){
            this.showBooks = !this.showBooks
        }
    }

})

app.mount("#app")