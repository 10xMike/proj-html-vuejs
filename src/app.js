const app = new Vue({
    el: "#app",
    data: {
      counter: 0,
      images: [
          "./src/img/blackberry-stuffed-bread-400x510.jpg",
          "./src/img/cherry-cake-400x510.jpg",
          "./src/img/choco-chip-cookies-400x510.jpg",
          "./src/img/cookies-with-ice-cream-400x510.jpg",
          "./src/img/glazed-pancake-with-lemon-400x510.jpg",
          "./src/img/home-bread-400x510.jpg",
          "./src/img/perfect-macarons-400x510.jpg",
          "./src/img/premium-bread-400x510.jpg",
          "./src/img/small-cupcake-400x510.jpg",
          "./src/img/strawberry-donut-400x510.jpg",
          "./src/img/strawberry-jam-cookies-400x510.jpg"
        ],
    },
  
    methods: {
      prev() {
        if (this.counter === 0) {
          return (this.counter = this.images.length - 1);
        }
        return (this.counter -= 1);
      },
      next() {
        if (this.counter === this.images.length - 1) {
          return (this.counter = 0);
        }
        return (this.counter += 1);
      },
  
      selectImage(index) {
        return (this.counter = index);
      },
    },
  
    mounted() {
      document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowRight") {
          this.next();
        }
        if (e.key === "ArrowLeft");
        {
          this.prev();
        }
      });
    },
    mounted() {
      setInterval(this.next, 2000);
    },
  });