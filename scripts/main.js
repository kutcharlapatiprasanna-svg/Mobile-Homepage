
// const myImage = document.querySelector("img");

// myImage.addEventListener("click", () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// });








// const myImage = document.querySelectorAll("#gallery img");
// document.addEventListener("DOMContentLoaded",() => {



// for (let i = 0; i < myImage.length; i++) {
//   let img = myImage[i];


// img.addEventListener("click", () => {


// for (let j = 0; j < myImage.length; j++) {
// myImage[j].style.display = "none";
// }
//       img.style.display = "block";
//       //image shows when clicked

//     });
//   }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const myImages = document.querySelectorAll("#gallery img");
//   const lastIndex = myImages.length - 1; // index of last image

//   myImages.forEach((img, index) => {
//     img.addEventListener("click", () => {
//       // Hide all images first
//       myImages.forEach(i => i.style.display = "none");

//       // If first image clicked
//       if (index === 0) {
//         myImages[lastIndex].style.display = "block"; // show last image
//       } else {
//         img.style.display = "block"; // show clicked image
//       }
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const myImages = document.querySelectorAll("#gallery img");
//   const lastIndex = myImages.length - 1; 

  
//   for (let index = 0; index < myImages.length; index++) {
//     let img = myImages[index];

//     img.addEventListener("click", () => {
     
//       for (let j = 0; j < myImages.length; j++) {
//         myImages[j].style.display = "none";
//       }

//       if (index === 0) {
//         myImages[lastIndex].style.display = "block"; 
//       } else {
//         img.style.display = "block"; 
//       }
//     });
//   }
// });



document.addEventListener("DOMContentLoaded",() =>{
  const myImages = document.querySelectorAll("#gallery img");
  const lastIndex = myImages.length-1;
  for(let index = 0; index<myImages.length;index++){
    let img = myImages[index];
    img.addEventListener("click",() =>{
      for ( let j=0; j<myImages.length; j++){
        myImages[j].style.display = "none";
      }
      if(index===0){
        myImages[lastIndex].style.display="block";
      }
      else{
        img.style.display = "block";
      }
    });
  }

});








