// the user should search for a word then retrieve the words definition
//search for word
//display definition
//style page
//also retrieve the words info that is definition synonyms and source details
// save favorite terms
// error message if the word not found or no word clicked
// also audio playback * not sure about this

// also  use preventdefault to prevent refreshing
const eventListener = document.querySelector("#usersSearchForm");
const writeHere = document.querySelector('#typingWord');
const audio = document.querySelector('#audioclass')
const audioButton = document.querySelector('#playButton')
const searchedWord = document.querySelector('#searchedWord')
const definitionPart = document.querySelector('#definitionPart')



function retrieveWord(word){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data =>{
        searchedWord.textContent = word;

    const theWordsDictionary = data[0].meanings;
    theWordsDictionary.forEach(someWords => 
        {someWords.definitions.forEach(miranda => {definitionPart.innerHTML += 
        `<p> ${miranda.definition}</p>`;})
        
    });
})

    .catch(() => { definitionPart.innerHTML = "there is a problem with your word";
    
})
} 
eventListener.addEventListener('submit', me => {
    me.preventDefault();
    const word = writeHere.value;
    if (word ===""){
        definitionPart.innerHTML = "cmon enter something"
        return;
    }
    retrieveWord(word);

    // console.log('button clicked')
    
})
audioButton.addEventListener('click', you => {
    you.preventDefault(); 
})

// async function retrieveWord (word){
//     try{
        
//         const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//         const data = await response.json();

//         if(!response){
//             throw Error("please enter a word to search please")
//         }
        
//         displayWord(data);

//     }
//     catch (error){
//         console.error("invalid request to get word")
//     }}

//     function displayWord(data){
//         definition.textContent = `${word} details`

//     }
    

// .then(response => response.json())
// .then( data => console.log(data))
// .catch(error => console.error("error failed to get the word", error))
// }

