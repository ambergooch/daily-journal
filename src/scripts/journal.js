function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val;
    }
document.getElementById('slider').value = 5;


/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalEntryArray = [];



journalEntryArray.push(journalEntries);


const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <div>
            <h3>Hello, this is my journal entry</h3>
            <strong>Date:</strong> ${journalEntry.date}
            <br>
            <strong>Concepts:</strong> ${journalEntry.concepts}
            <br>
            <strong>Mood:</strong> ${journalEntry.mood}
            <p>${journalEntry.entry}</p>
        <div>
    `
}

const renderJournalEntries = (entries) => {
    for (let i = 0; i < journalEntries.length; i++)
        document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries[i])
    }


// Invoke the render function
renderJournalEntries(journalEntries)