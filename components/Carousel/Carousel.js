class Carousel {
  constructor(carousel) {
    // Set carousel as this.carousel
    this.carousel = carousel;
    // Get left and right arrow
    this.leftButton = carousel.querySelector('.left-button');
    this.rightButton = carousel.querySelector('.right-button');

    // Get all images in the carousel
    this.images = carousel.querySelectorAll('img');

    // Get image index and call Image class on it
    this.imageIndex;
    this.images.forEach((image, index) => {
      this.imageIndex = index;
      new Image(image, index)
    });
    
    // Add click events to the left and right buttons
    // this.leftButton.addEventListener('click', )
  }

  showLeftImage() {

  }

  showRightImage() {

  }
}

class Image {
  constructor(image, index) {
    this.image = image;
    this.index = index;
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
