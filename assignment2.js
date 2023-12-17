// today's assignment 
 
// Assignment: Interactive Word Counter
// Create a web page with a textarea element and a button. 
//The goal is to implement a word counter that counts the number of words entered in the textarea when the button is clicked. 
//Additionally, implement the following features:
// Ignore leading and trailing whitespace when counting words.
// Display the word count below the textarea.
// Highlight the longest word in the textarea by wrapping it with <span> tags.


//Global variables
let count=0;
let longestWord="";
let maxLength=0;

function countWords()
{


    //Retrieve input text

    //The .trim() returns a new string with the leading and trailing whitespace removed.
    let editableText=document.getElementById("editableTextArea");
    let inputText = (editableText.innerText || editableText.textContent).trim();
    




    //Split into words based on spaces
    let words = inputText.split(/\s+/).filter(word => word !== '');
    
 
    //word count
    count=words.length;
    


    //Longest word
    words.forEach(word =>  {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;

    }
    });


    //&nbsp;

    //Set the words count
    let countTag=document.getElementById("count");
    countTag.innerHTML=count;

  


    //Highlight
    let highlightedText = inputText.replace(new RegExp(longestWord, "g"), `<span  class="highlight">${longestWord}</span>`);


    //Check if last word
    if(longestWord==words[words.length-1])
    {
        highlightedText+="&nbsp;";
    }


    //add the text
    editableText.innerHTML = highlightedText;
    

}

