<div align="center">
<h1>Vue 3 Tutorial</h1>
<p>By The Net Ninja</p>
</div>

<p align="center">
Tutorial by The Net Ninja on installing and getting started with Vue 3.
</p>

1.  [Getting Started](#getting-started)
2.  [Dynamic Values](#dynamic-values)
3.  [Click Events](#click-events)
4.  [Conditional Rendering](#conditional-rendering)
5.  [Other Mouse Events](#other-mouse-events)
6.  [Loops](#loops)
7.  [Attribute Binding](#attribute-binding)
8.  [Dynamic Classes](#dynamic-classes)
9.  [Computed Properties](#computed-properties)
10. [Vue CLI](#vue-cli)
11. [Getting Started](#getting-started)
12. [Dynamic Values](#dynamic-values)
13. [Click Events](#click-events)
14. [Conditional Rendering](#conditional-rendering)
15. [Other Mouse Events](#other-mouse-events)
16. [Loops](#loops)
17. [Attribute Binding](#attribute-binding)
18. [Dynamic Classes](#dynamic-classes)
19. [Computed Properties](#computed-properties)
20. [Section X](/Compendium/Section_X)


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

- v-on:click="VARIABLE/METHOD" triggers action upon clicking.
- @click="VARIABLE/METHOD" is the shorthand for v-on:click.

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

## Other Mouse Events

- mouseover triggers upon hovering over the div with mouse pointer.
- mouseleave triggers upon moving out of the div with mouse pointer.
- dblclick triggers upon doubleclicking the div.
- mousemove triggers upon moving the mouse.
  
index.html
```
<!-- mouse events -->
<div class="box" @mouseover="handleEvent($event, 5)">mouseover</div>
<div class="box" @mouseleave="handleEvent">mouseleave</div>
<div class="box" @dblclick="handleEvent">doubleclick</div>
<div class="box" @mousemove="handleMousemove">position: {{x}},{{y}}</div>
```

app.js
```
data() {
    return {
        x: 0,
        y: 0
    }
},
methods: {
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
```

## Loops

- v-for="i in array" to get i from array.

index.html
```
<div v-if="showBooks">
    <ul>
        <li v-for="book in books">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </li>
    </ul>
</div>
```

app.js
```
data() {
    return {
        showBooks: true,
        books: [
            {title: "Name of the Wind", author: "Patrick Rothfuss"},
            {title: "The Way of Kings", author: "Brandon Sanderson"},
            {title: "The Final Empire", author: "Brandon Sanderson"}
        ]
    }
}
```

## Attribute Binding

- v-bind:ATTRIBUTE="VARIABLE" binds a variable to an attribute.
- :ATTRIBUTE="VARIABLE" is the shorthand for v-bind.

index.html
```
<!-- Attribute Binding -->
<a v-bind:href="url">abechoi.com</a>

<div v-if="showBooks">
    <ul>
        <li v-for="book in books">
            <img :src="book.img" :alt="book.title">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </li>
    </ul>
</div>
```

app.js
```
data() {
    return {
        url: "https://abechoi.com",
        showBooks: true,
        books: [
            {title: "Name of the Wind", author: "Patrick Rothfuss", img: "assets/1.jpg"},
            {title: "The Way of Kings", author: "Brandon Sanderson", img: "assets/2.jpg"},
            {title: "The Final Empire", author: "Brandon Sanderson", img: "assets/3.jpg"}
        ]
    }
}
```

## Dynamic Classes

- :class="{ CLASSNAME: CONDITION }" adds a class if the condition is true.

index.html
```
<div v-if="showBooks">
    <ul>
        <li v-for="book in books" :class="{ fav: book.isFav }">
            <img :src="book.img" :alt="book.title">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </li>
    </ul>
</div>
```

app.js
```
books: [
    {title: "Name of the Wind", author: "Patrick Rothfuss", img: "assets/1.jpg", isFav: true},
    {title: "The Way of Kings", author: "Brandon Sanderson", img: "assets/2.jpg", isFav: false},
    {title: "The Final Empire", author: "Brandon Sanderson", img: "assets/3.jpg", isFav: true}
]
```

## Computed Properties

index.html
```
<div v-if="showBooks">
    <ul>
        <li v-for="book in filteredBooks" :class="{ fav: book.isFav }" @click="toggleFav(book)">
            <img :src="book.img" :alt="book.title">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </li>
    </ul>
</div>
```

app.js
```
data() {
    return {
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
    },
    toggleFav(book){
        book.isFav = !book.isFav
    }
},
computed: {
    filteredBooks(){
        return this.books.filter((book) => book.isFav)
    }
}
```

## Vue CLI

1. Install Node
   
2. Install Vue CLI

```
npm install -g @vue/cli

# If permission error occurs, try:
sudo chown -R $USER /usr/local/lib/node_modules
```

3. Create a Vue Project
```
vue create modal-project
```