const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries?_expand=mood")
            .then(response => response.json())
    }
}

function saveJournalEntry (newEntry) {
    return fetch ("http://localhost:3000/entries?_expand=mood", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
}

function deleteJournalEntry(id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })
}

function editJournalEntry(editedEntry) {
  return fetch(`http://localhost:3000/entries/${editedEntry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedEntry)
    })
}

function getMoods() {
    return fetch("http://localhost:3000/moods")
        .then(mood => mood.json())
}

export {API, saveJournalEntry, deleteJournalEntry, editJournalEntry, getMoods}