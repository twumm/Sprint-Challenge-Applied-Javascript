class Carousel {
  constructor(carousel) {
    // Set carousel as this.carousel
    this.carousel = carousel;

    // Get all images in the carousel
    this.images = carousel.querySelectorAll('img');

    this.leftButton = carousel.querySelector('.left-button');
    this.rightButton = carousel.querySelector('.right-button');

    this.currentIndex = 0;
    this.images[this.currentIndex].style.display = 'block';

    this.leftButton.addEventListener('click', () => this.showLeftImage())
  }

  showLeftImage() {
    this.images.forEach(image => {
      image.style.display = 'none';
    });
    this.currentIndex < 2 ? this.currentIndex++ : this.currentIndex = 0;
    this.images[this.currentIndex].style.display = 'block';
  }
}

class Image {
  constructor(image, index) {
    this.image = image;
    this.index = index;

    // console.log(index, image)
    // Get all images
    this.images = document.querySelectorAll('.carousel img');

    // Get the carousel
    let carousel = document.querySelector('.carousel');
    // Get left and right arrow
    this.leftButton = carousel.querySelector('.left-button');
    this.rightButton = carousel.querySelector('.right-button');

    this.leftButton.addEventListener('click', () => this.showLeftImage(this.index));
  }

  showLeftImage(index) {
    console.log(index)
    // Array.from(this.image).forEach((image, index) => {
    //   // if(this.index === index) image.setAttribute('style', 'display: flex')
    //   if(this.index === index) c
    // })
  }

  showRightImage() {
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
