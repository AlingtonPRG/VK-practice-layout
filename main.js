document.addEventListener("DOMContentLoaded", function () {
  var circle = document.querySelector(".circle");
  var quesInfo = document.querySelector(".ques_info");

  circle.addEventListener("mouseenter", function () {
    quesInfo.style.opacity = "1";
    quesInfo.style.top = "285px";
    quesInfo.style.visibility = "visible";
  });

  circle.addEventListener("mouseleave", function () {
    quesInfo.style.opacity = "0";
    quesInfo.style.top = "300px";
    quesInfo.style.visibility = "hidden";
  });
});
