// Global Var
// let notesTitles = ["Title1", "Title2", "Title2"]
// let notes = ["orange", "Banana", "Ananas"];

let notesTitles = ["test1"];
let notes = [1];

let archivNotesTitles = ["test2"];
let archivNotes = [2];


let trashNotesTitles = ["test3"];
let trashNotes = [3];




function init() {
    getOfLocalStorage();
    render();
}


function render() {
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

// Notes
function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}



// Archiv
function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}


// Trash
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}






// notizen hinzufügen

function addNote() {// --> eingabe vom user definieren
    let titleInputRef = document.getElementById('title_input');// --> eingabe auslesen
    let titleInput = titleInputRef.value;
    let noteInputRef = document.getElementById('note_input');// --> eingabe auslesen
    let noteInput = noteInputRef.value;

    if (titleInputRef.value && noteInputRef.value != "") {


        notesTitles.push(titleInput);// --> eingabe den notizen hinzufügen
        notes.push(noteInput);// --> eingabe den notizen hinzufügen


        saveInLocalStorage();
        render();

        titleInputRef.value = "";
        noteInputRef.value = "";
    } else {
        alert("There's Nothing To Add!")
    }
}


function moveNoteToArchiv(indexArchivNote) {
    let archivNote = notes.splice(indexArchivNote, 1)
    archivNotes.push(archivNote);
    let archivNoteTitle = notesTitles.splice(indexArchivNote, 1)
    archivNotesTitles.push(archivNoteTitle);
    saveInLocalStorage();
    // renderNotes();
    // renderArchivNotes();
    render();
}



function moveNoteToTrash(indexMoveNote) {
    let trashNote = notes.splice(indexMoveNote, 1)
    trashNotes.push(trashNote);
    let trashNoteTitle = notesTitles.splice(indexMoveNote, 1)
    trashNotesTitles.push(trashNoteTitle);
    saveInLocalStorage();
    // renderNotes();
    // renderTrashNotes();
    render();
}

function moveArchivToTrash(indexMoveNote) {
    let trashNote = archivNotes.splice(indexMoveNote, 1)
    trashNotes.push(trashNote);
    let trashNoteTitle = archivNotesTitles.splice(indexMoveNote, 1)
    trashNotesTitles.push(trashNoteTitle);
    saveInLocalStorage();
    // renderNotes();
    // renderTrashNotes();
    render();
}

function moveArchivToNote(indexMoveNote) {
    let archivhNote = archivNotes.splice(indexMoveNote, 1)
    notes.push(archivhNote);
    let archivNoteTitle = archivNotesTitles.splice(indexMoveNote, 1)
    notesTitles.push(archivNoteTitle);
    saveInLocalStorage();
    // renderNotes();
    // renderTrashNotes();
    render();
}


function moveTrashToArchiv(indexMoveNote) {
    let archivhNote = trashNotes.splice(indexMoveNote, 1)
    archivNotes.push(archivhNote);
    let archivNoteTitle = trashNotesTitles.splice(indexMoveNote, 1)
    archivNotesTitles.push(archivNoteTitle);
    saveInLocalStorage();
    // renderNotes();
    // renderTrashNotes();
    render();
}

function deleteNote(indexDeleteNote) {
    trashNotes.splice(indexDeleteNote, 1);
    saveInLocalStorage();
    // renderTrashNotes();
    render();
}