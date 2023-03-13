const toggle = () => {
  // let container = document.getElementsByClassName("container");
  // let card = document.getElementsByClassName("card");
  let main = document.getElementsByTagName("card");
  // let slider = document.getElementsByClassName("slider");
  // container.style.width = "100%";
  // container.style.height = "100%";
  // container.style.boxShadow = "none";
  main.style.backgroundColor = "white";
  // main.style.gap = "0";
  // card.style.height = "85%";
  // card.style.width = "90%";
  console.log("i work");
  // console.log(container.style);
};
const clicked = () => {
  console.log("clicked");
  const btn = document.getElementById("btn");
  btn.style.backgroundColor = "coral";
};
