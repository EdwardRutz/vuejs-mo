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
    },
    showDetail: false
  },
  methods: {
    toggleDetails: function () {
      this.showDetail = !this.showDetail;
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

const colorsOfTheRainbow = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

new Vue({
  el: '#colors',
  data: {
    rainbow: colorsOfTheRainbow,
    img: {
      src: 'http://4.bp.blogspot.com/-7lasblsGDmc/VKBYGT_6PhI/AAAAAAAAyIo/NkSHktp6XNo/s1600/Rainbow%2Bending%2Bin' +
      '%2BTramp%2BHarbor%2Bin%2Bthe%2BPuget%2BSound%2Bnear%2BWest%2BSeattle%2C%2BWA.jpg',
      alt: "Picture of a rainbow"
    }
  }
});


