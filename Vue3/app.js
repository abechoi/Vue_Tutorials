const app = Vue.createApp({
    // function named data that returns an object
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            //this.title = "Words of Radiance"
            this.title = title
        },
        isShowBooks(){
            this.showBooks = !this.showBooks
        }
    }

})

app.mount("#app")