// New Vue instance as a variable
const helloWorld = new Vue({
  el: '#helloVue',
  data: {
    title: "Hello Vue!",
    message: 'This is the first Vue template.'
  }
});

const example = new Vue({
  el: '#example',
  data: {
    title: ' the Cat',
    message: 'Meooow',
    name: 'Big Fluffy',
    title2: 'Big Orange',
    img: {
      src: 'https://placeimg.com/200/200/animals',
      alt: 'Picture of animals'
    }
  }
});

const book = new Vue({
  el: '#book',
  data: {
    title: 'The Sirens of Titan',
    author: 'Kurt Vonnegut',
    summary: 'This is a summary of the Sirens of Titan.',
    showDetail: false
  },
  methods: {
    sayHello: function(){
      alert('This book is good! Buy it.');
    },
    toggleDetails: function () {
      //Change the value of show detail to its opposite (true/false)
      this.showDetail = !this.showDetail;
    }
  }
});