// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(data => data.json())  // Parse as JSON
//     .then(journalEntries => {
//         journalEntries.forEach (entries =>{
//             document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries)
//             // renderJournalEntries(journalEntries)
//         })

//     })

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}

function saveJournalEntry (newEntry) {
    return fetch ("http://localhost:3000/entries", {
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
.then(res => res.json())

  }