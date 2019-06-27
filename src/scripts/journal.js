function sliderChange(value) {
    document.getElementById('sliderVal').innerHTML = value;
    }
document.getElementById('slider').value = 5;


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

API.getJournalEntries().then(renderJournalEntries)

let entryLog = document.querySelector(".entryLog")

document.querySelector("#submit-btn").addEventListener("click", event => {
    const journalDate = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const dailyMood = document.querySelector("#dailyMood").value
    const journalEntry = document.querySelector("#journalEntry").value
    const newJournalEntry = entryFactory(journalDate, concepts, dailyMood, journalEntry)
    
    
    saveJournalEntry(newJournalEntry)
    .then( data => data.json())
    .then( dataJS => {
        
        API.getJournalEntries().then(renderJournalEntries)
    })
    
})

function entryFactory (journalDate, concepts, dailyMood, journalEntry) {
    return {
        date: journalDate,
        concept: concepts,
        mood: dailyMood,
        entry: journalEntry
    }
}

const moodBtnElements = document.getElementsByName("mood-radio")
console.log(moodBtnElements)
moodBtnElements.forEach(radioButton =>{
    radioButton.addEventListener("click", event => {
        const mood = event.target.value
        console.log(mood)
        API.getJournalEntries().then(entries => {
            if (mood === "all") {
                entryLog.innerHTML = ""
                API.getJournalEntries().then(renderJournalEntries)

            } else {
                const filteredEntries = entries.filter(entry => entry.mood === mood) 
                entryLog.innerHTML = ""
                renderJournalEntries(filteredEntries)       
            } 
                
            })
            
        })
        
    })

