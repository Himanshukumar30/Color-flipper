const colors = ["Violet", "#F2AF29", "rgba(89,63,98)", "Orange"];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    const randomValue = getArrayIndex();
    console.log("The randon vlaue generated is:",randomValue);
    document.body.style.backgroundColor = colors[randomValue];
    color.textContent = colors[randomValue];
  });
  
  function getArrayIndex() {
    return Math.floor(Math.random() * colors.length);
  }