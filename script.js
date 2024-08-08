let btn = document.querySelector("button");
let note = document.querySelector("textarea");
let bgColor = document.querySelector("#bg");
let textColor = document.querySelector("#text");
let rightDiv = document.querySelector(".right");

btn.addEventListener("click", createStickyNote);

function createStickyNote() {
  const text = note.value;
  const stickyNote = document.createElement("div");
  stickyNote.innerText = text;

  rightDiv.append(stickyNote);
  stickyNote.classList.add("note")
  
  const cross = document.createElement("span");
  cross.innerHTML = "&times"
  cross.classList.add("close")
  stickyNote.append(cross)
  
}
