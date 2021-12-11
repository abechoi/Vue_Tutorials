<div align="center">
<h1>Vue 3 Tutorial</h1>
<p>By The Net Ninja</p>
</div>

<p align="center">
Tutorial by The Net Ninja on installing and getting started with Vue 3.
</p>

1.  [Getting Started](#getting_started)
2.  [Dynamic Values](#dynamic-values))
3.  [Click Events](#click-events)
4.  [Conditional Rendering](/Compendium/Section_IV)
5.  [Section V](/Compendium/Section_V)
6.  [Section VI](/Compendium/Section_VI)
7.  [Section VII](/Compendium/Section_VII)
8.  [Section VIII](/Compendium/Section_VIII)
9.  [Section IX](/Compendium/Section_IX)
10. [Section X](/Compendium/Section_X)

## Getting Started

### VS Code Extensions
- Live Server
- Vetur
- Material Icons Theme

### Hello World

index.html
```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Vue</title>
    <script src="https://unpkg.com/vue@3.0.2"></script>

</head>
<body>
    <h1>Hello Vue!</h1>

    <div id="app">
    </div>

    <script src="app.js"></script>
</body>
</html>
```

app.js
```
const app = Vue.createApp({
    template: '<h2>Hello World!</h2>'
})

app.mount("#app")
```

## Dynamic Values

index.html
```
<div id="app">
    <p>{{ title }}  -  {{ author }}  -  {{ age }}</p>
</div>
```

app.js
```
const app = Vue.createApp({
    // function named data that returns an object
    data() {
        return {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    }
})

app.mount("#app")
```

## Click Events

index.html
```
<div id="app">
        <p>{{ title }}  -  {{ author }}  -  {{ age }}</p>

        <!-- v-on is a directive for events -->
        <button v-on:click="age++">Increase Age</button>
        <button v-on:click="age--">Decrease Age</button>
        <div @click="changeTitle('Oathbringer')">Change Book Title</div>
    </div>
```

app.js
```
const app = Vue.createApp({
    // function named data that returns an object
    data() {
        return {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            //this.title = "Words of Radiance"
            this.title = title
        }
    }

})

app.mount("#app")
```

## Conditional Rendering

- v-if removes and injects html into the DOM which is more time consuming, do not use this for things that will render often.
- v-show uses css to hide html which is much faster, use this for things that render often.

index.html
```
<div id="app">

    <p v-if="showBooks">{{ title }}  -  {{ author }}  -  {{ age }}</p>

    <button @click="isShowBooks">
        <span v-if="showBooks">Hide Books</span>
        <span v-else>Show Books</span>
    </button>

    <div v-show="showBooks">Currently showing books</div>
</div>
```

app.js
```
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
```