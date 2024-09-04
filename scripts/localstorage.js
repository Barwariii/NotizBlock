function getOfLocalStorage() {
    getNotesFromLocalStorage();
    getArchiveNotesFromLocalStorage();
    getTrashNotesFromLocalStorage();
}

function saveInLocalStorage() {
    saveNotesInLocalStorage();
    saveArchiveNotesInLocalStorage();
    saveTrashNotesInLocalStorage();
}


function saveNotesInLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveArchiveNotesInLocalStorage() {
    localStorage.setItem("archivNotesTitles", JSON.stringify(archivNotesTitles));
    localStorage.setItem("archivNotes", JSON.stringify(archivNotes));
}

function saveTrashNotesInLocalStorage() {
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}


function getNotesFromLocalStorage() {
    let myNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
    let myNotes = JSON.parse(localStorage.getItem("notes"));


    if (myNotesTitles != null, myNotes != null) {
        notesTitles = myNotesTitles;
        notes = myNotes;


        console.log(myNotesTitles);
        console.log(myNotes);
    } //else {
    //     notesTitles = myNotesTitles;
    //     notes = myNotes;
    // }


    // notesTitles = myNotesTitles;
    // notes = myNotes;
}


function getArchiveNotesFromLocalStorage() {
    let myArchivNotesTitles = JSON.parse(localStorage.getItem("archivNotesTitles"));
    let myArchivNotes = JSON.parse(localStorage.getItem("archivNotes"));


    if (myArchivNotesTitles != null, myArchivNotes != null) {
        archivNotesTitles = myArchivNotesTitles;
        archivNotes = myArchivNotes;


        console.log(myArchivNotesTitles);
        console.log(myArchivNotes);
    } //else {
    //     notesTitles = myNotesTitles;
    //     notes = myNotes;
    // }


    // notesTitles = myNotesTitles;
    // notes = myNotes;
}


function getTrashNotesFromLocalStorage() {
    let myTrashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let myTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));


    if (myTrashNotesTitles != null, myTrashNotes != null) {
        trashNotesTitles = myTrashNotesTitles;
        trashNotes = myTrashNotes;


        console.log(myTrashNotesTitles);
        console.log(myTrashNotes);
    } //else {
    //     notesTitles = myNotesTitles;
    //     notes = myNotes;
    // }


    // notesTitles = myNotesTitles;
    // notes = myNotes;
}