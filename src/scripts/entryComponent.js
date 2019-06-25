const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <div>
            <h3>Hello, this is my journal entry</h3>
            <strong>Date:</strong> ${journalEntry.date}
            <br>
            <strong>Concepts:</strong> ${journalEntry.concept}
            <br>
            <strong>Mood:</strong> ${journalEntry.mood}
            <p>${journalEntry.entry}</p>
        <div>
    `
}

// const component = Object.create(makeJournalEntryComponent)
