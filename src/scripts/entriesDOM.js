const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++)
        document.querySelector(".entryLog").appendChild(makeJournalEntryComponent(entries[i]))
    }

function getAndDisplay() {
    entryLog.innerHTML = ""
    API.getJournalEntries()
    .then(renderJournalEntries)
}

