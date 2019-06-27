const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}
// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(data => data.json())  // Parse as JSON
//     .then(journalEntries => {
//         journalEntries.forEach (entries =>{
//             document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries)
//             // renderJournalEntries(journalEntries)
//         })
        
//     })

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

