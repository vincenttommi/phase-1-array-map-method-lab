const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

function titleCased() {


  //This function uses the map method of the Array object to create a new 
  //array by iterating through each element in the tutorials array.
  // For each tutorial, it splits the string into an array of words using the 
  //split method and then uses the map method again to iterate through each word in the array. For each word, it capitalizes the first letter using the charAt and toUpperCase methods and then appends the rest of the word using the slice method. Finally, it joins the words back into a string using the join method and returns the title-cased tutorial name.
  return tutorials.map(function(tutorial) {
    return tutorial.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}
