const taskbox = document.querySelector("#taskdescription");

checkbox.addEventListener("click", taskboxClick, false);

function taskboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
