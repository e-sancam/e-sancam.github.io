// JavaScript Document

//Get all the images

image_array = [
    'Uno.jpg',
    'Dos.jpg',
    'Tres.jpg',
    'Cuatro.jpg'
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./Pics/${selected_image}`
}




