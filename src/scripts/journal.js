import {renderJournalEntries, getAndDisplay} from "./entriesDOM.js";
import {API, saveJournalEntry} from "./data.js"

function sliderChange(value) {
    document.getElementById("sliderVal").innerHTML = value;
    }
document.getElementById("slider").value = 5;

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
        getAndDisplay()
    })
})

function entryFactory (journalDate, concept, dailyMood, journalEntry) {
    return {
        date: journalDate,
        concept: concept,
        moodId: dailyMood,
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
                getAndDisplay()

            } else {
                const filteredEntries = entries.filter(entry => entry.mood === mood)
                entryLog.innerHTML = ""
                renderJournalEntries(filteredEntries)
            }
        })
    })
})

const searchInput = document.querySelector("#search-input")
searchInput.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        console.log("keypress")
        const searchTerm = event.target.value
        API.getJournalEntries().then(entries => {
           const foundEntries = entries.filter(entry => {
                for (const value of Object.values(entry)) {
                    if (isNaN(value) && value.toLowerCase().includes(searchTerm.toLowerCase())) {
                        entryLog.innerHTML = ""
                        console.log(entry)
                        return entry
                    }
                }
            })
            renderJournalEntries(foundEntries)
        });
      }
    })

export {entryFactory}

// var today = new Date().toLocaleDateString("default", {
// 	month : 'short',
// 	day : 'numeric',
//     year : 'numeric',
//     hour: 'numeric',
//     minute: 'numeric'
// })
// console.log(today)