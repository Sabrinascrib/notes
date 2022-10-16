const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add-note");

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNote(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty  Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm("Are you sure you want to delete this  note?");

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}
