const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add-note");

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNote(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}
