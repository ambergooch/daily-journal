// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     return `
//         <div>
//             <h3>Hello, this is my journal entry</h3>
//             <strong>Date:</strong> ${journalEntry.date}
//             <br>
//             <strong>Concepts:</strong> ${journalEntry.concept}
//             <br>
//             <strong>Mood:</strong> ${journalEntry.mood}
//             <p>${journalEntry.entry}</p>
//         <div>
//     `
// }

// const component = Object.create(makeJournalEntryComponent)

// import {getAndDisplay} from "./entriesDOM.js"
// import {deleteJournalEntry, editJournalEntry} from "./data.js"

function makeJournalEntryComponent (journalEntry) {
    let parentDiv = document.createElement("div")
    let childDiv = document.createElement("div")
    let deleteBtn = document.createElement("button")
    let editBtn = document.createElement("button")
    childDiv.setAttribute("id", `delete-${journalEntry.id}`)
    childDiv.innerHTML = `
        <div>
        <h3>${journalEntry.concept}</h3>
        <strong>Date:</strong> ${journalEntry.date}
        <br>
        <strong>Concepts:</strong> ${journalEntry.concept}
        <br>
        <strong>Mood:</strong> ${journalEntry.mood}
        <p>${journalEntry.entry}</p>
        </div>
        `
    parentDiv.appendChild(childDiv)

    deleteBtn.textContent = "delete"
    deleteBtn.addEventListener("click", () => {
        console.log("click")
        deleteJournalEntry(journalEntry.id)
            .then(data => {
                getAndDisplay()
            })

    })

    editBtn.textContent = "edit"
    editBtn.addEventListener("click", () => {
        console.log(childDiv.id)
        let editForm = createEditForm(journalEntry)
        addEditFormToDOM(childDiv.id, editForm)
    })

    childDiv.appendChild(deleteBtn)
    childDiv.appendChild(editBtn)
    return parentDiv
}

function createEditForm (journalEntry) {
    return `
    <fieldset id="edit-fieldset">
    <input type="hidden" id="journal-id" value=${journalEntry.id}>
    <label for="journalDate">Date of entry:</label>
    <input type="date" name="journalDate" id="journalDate-edit" value="${journalEntry.date}">
    <br>
    <label for="concepts">Concepts covered:</label>
    <input type="text" name="concepts" id="concepts-edit" pattern="[a-zA-Z0-9!:;(){}]{1,}" value="${journalEntry.concept}">
    <br>
    <label for="dailyMood">Mood for the day:</label>
    <select name="dailyMood" id="dailyMood-edit">
        <option value="frustrated" ${journalEntry.mood === "frustrated" ? "selected" : ""}>Frustrated</option>
        <option value="excited" ${journalEntry.mood === "excited" ? "selected" : ""}>Excited</option>
        <option value="optimistic" ${journalEntry.mood === "optimistic" ? "selected" : ""}>Optimistic</option>
        <option value="confused" ${journalEntry.mood === "confused" ? "selected" : ""}>Confused</option>
        <option value="neutral" ${journalEntry.mood === "neutral" ? "selected" : ""}>Neutral</option>
        <option value="good" ${journalEntry.mood === "good" ? "selected" : ""}>Good</option>
    </select>
    <br>
    <label for="journalEntry">Journal Entry</label>
    <textarea name="journalEntry" id="journalEntry-edit" rows="10" cols="50" pattern="[a-zA-Z0-9!:;(){}]{1,}" required>${journalEntry.entry}</textarea>
    <br>
    <button id="save-btn">Save Journal Entry</button>
    </fieldset>
    `
}

function addEditFormToDOM(entryToEdit, editForm) {
    document.querySelector(`#${entryToEdit}`).innerHTML = editForm
    document.querySelector("#save-btn").addEventListener("click", () => {
      let date = document.querySelector("#journalDate-edit").value
      let concept = document.querySelector("#concepts-edit").value
      let mood = document.querySelector("#dailyMood-edit").value
      let entry = document.querySelector("#journalEntry-edit").value
      let entryId = document.querySelector("#journal-id").value
      let editedEntry = entryFactory(date, concept, mood, entry)
      console.log(entryId)
      editedEntry.id = entryId
      editJournalEntry(editedEntry)
      .then( () => {
        getAndDisplay()
      })
    })
  }
