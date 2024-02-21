const container = document.getElementById("container");
const images = document.getElementsByClassName("image");
const texts = document.getElementsByClassName("text");

for (let i = 0; i < images.length; i++) {
  images[i].style.order = i % 2 === 0 ? i / 2 : (i + 1) / 2;
  texts[i].style.order = i % 2 === 0 ? (i + 1) / 2 : i / 2;
}