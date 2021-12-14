var imagelength = document.querySelectorAll(".arrow").length;

for(var i = 0 ; i < imagelength ; i++){
document.querySelectorAll(".arrow")[i].addEventListener("click", function(){
this.parentElement.classList.toggle("question-bold");
this.classList.toggle("rotator");
if (this.classList.contains("arrow1") === true){
  document.querySelector(".answer1").classList.toggle("show");
}

if (this.classList.contains("arrow2") === true){
  document.querySelector(".answer2").classList.toggle("show");
}
if (this.classList.contains("arrow3") === true){
  document.querySelector(".answer3").classList.toggle("show");
}
if (this.classList.contains("arrow4") === true){
  document.querySelector(".answer4").classList.toggle("show");
}
if (this.classList.contains("arrow5") === true){
  document.querySelector(".answer5").classList.toggle("show");
}



});

}
