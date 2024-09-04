function getNoteTemplate(indexNote) {
    return /*html*/`
    <div class="note-content">
    <p> ${notesTitles[indexNote]}:</p>
    <p>${notes[indexNote]}</p>
    </div>
    <div class="note-icn">
        <img onclick="moveNoteToTrash(${indexNote})" class="icn" src="./assets/icons/delete.png" alt="">
        <img onclick="moveNoteToArchiv(${indexNote})" class="icn" src="./assets/icons/archive.png" alt="">
    </div>`
}

function getArchivNoteTemplate(indexArchivNote) {
    return /*html*/`
    <div class="note-content">
    <p> ${archivNotesTitles[indexArchivNote]}</p>
    <p>${archivNotes[indexArchivNote]}</p>
    </div>
    <div class="note-icn">
        <img onclick=" moveArchivToTrash(${indexArchivNote})" class="icn" src="./assets/icons/delete.png" alt="">
        <img onclick=" moveArchivToNote(${indexArchivNote})" class="icn" src="./assets/icons/unarchive.png" alt="">
    </div>`
}


function getTrashNoteTemplate(indexMoveNote) {
    return /*html*/`
    <div class="note-content">
    <p> ${trashNotesTitles[indexMoveNote]}</p>
    <p> ${trashNotes[indexMoveNote]}</p>
    </div>
    <div class="note-icn">
        <img onclick="deleteNote(${indexMoveNote})" class="icn" src="./assets/icons/delete_forever.png" alt="">
        <img onclick="moveTrashToArchiv(${indexMoveNote})" class="icn" src="./assets/icons/archive.png" alt="">
    </div>`
}