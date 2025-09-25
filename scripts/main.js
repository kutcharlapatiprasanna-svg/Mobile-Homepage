const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img-2/Mozilla_Firefox_3.5_logo.png") {
    myImage.setAttribute("src", "img-2/Mozilla_Firefox2_3.5_logo.png");
  } else {
    myImage.setAttribute("src", "img-2/Mozilla_Firefox_3.5_logo.png");
  }
 
});




