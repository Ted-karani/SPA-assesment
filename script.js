// the user should search for a word then retrieve the words definition
//search for word
//display definition
//style page
//also retrieve the words info that is definition synonyms and source details
// save favorite terms
// error message if the word not found or no word clicked
// also audio playback * not sure about this

// also  use preventdefault to prevent refreshing

const dictionary = document.querySelector('#search')
const results = document.querySelector('#searchResults')
const audio = document.querySelector('#audioclass')
const searchButton = document.querySelector('#searchButton')
const audioButton = document.querySelector('#playButton')
const definition = document.querySelector('#definition')


searchButton.addEventListener('click', me => {
    me.preventdefault()
    retrieveWord
})
audioButton.addEventListener('click', you => {
    you.preventDefault()
    retrieveWord
    
})

async function retrieveWord (word){
    try{
        
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if(!response.ok){
            throw Error("enter a word to search please")
        }
        
        displayWord(data);

    }
    catch (error){
        console.error("invalid request to get word")
    }}

    function displayWord(data){
        definition.textContent = `${word} details`

    }
    

// .then(response => response.json())
// .then( data => console.log(data))
// .catch(error => console.error("error failed to get the word", error))
// }

