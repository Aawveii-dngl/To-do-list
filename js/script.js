let input = document.getElementById("input");
let result = document.getElementById("result");
function myFuncn() {
  var x = input.value;
  var p = document.createElement("p");
  p.textContent = x;
  p.classList.add("paragraph-style");
  result.appendChild(p);
  input.value = "";
  p.addEventListener("click", function () {
    // result.removeChild(p);
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    result.removeChild(p);
  });
}
