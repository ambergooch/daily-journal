const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++)
        document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries[i])
    }

