import {API} from "./data.js"
import {makeJournalEntryComponent} from "./entryComponent.js"

const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++)
        document.querySelector(".entryLog").appendChild(makeJournalEntryComponent(entries[i]))
    }

function getAndDisplay() {
    document.querySelector(".entryLog").innerHTML = ""
    API.getJournalEntries()
    .then(renderJournalEntries)
}
export {renderJournalEntries, getAndDisplay}