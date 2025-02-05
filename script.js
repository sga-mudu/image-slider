document.addEventListener("DOMContentLoaded", ()=> {
    const imagePaths = [
        "./images/gaara.webp",
        "./images/kakashi.webp",
        "./images/lee.avif",
        "./images/naruto.jpeg",
        "./images/sakura.jpg",
        "./images/sasuke.png"
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById("main-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function updateImage(){
        mainImage.src = imagePaths[currentIndex];
    }

    prevButton.addEventListener("click", ()=>{
        currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
        updateImage();
    });
    
    nextButton.addEventListener("click", ()=>{
        currentIndex = (currentIndex + 1) % imagePaths.length;
        updateImage();
    });
});
