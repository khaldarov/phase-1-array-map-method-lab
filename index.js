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
// USE FOR OF LOOP
function titleCased() {
  const answer = tutorials.toString().split(",").map(char => char[0].toUpperCase() + char.substring(1)).toString().split(" ").map(char => char[0].toUpperCase() + char.substring(1)).join(" ").split(",");
  /* for (const tutorial of tutorials) {
    return tutorial.split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ')
  } */
  
  /*
  const lowerCase = tutorials.toLowerCase();
  const splitter = lowerCase.split(' ');
  const mapping = splitter.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  const answer = mapping.join(' ');
  // const uppers = ["Oo", "Api", "Jsonp"];
  // for (let i = 0; i < uppers.length; i++) {
  //   answer = answer.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), 
  //     uppers[i].toUpperCase());
  // }
  for (const word of tutorials) {
    if (word === "Oo") {
      return "OO";
    } else if (word === "Api") {
      return "API";
    } else if (word === "Jsonp") {
      return "JSNOP";
    } else if (word === "Nan") {
      return "NaN"
    }
  }
  // const uppers = ["Oo", "Api", "Jsonp"];
  // uppers = ["OO", "API", "JSONP"]
  // const consts = ["Nan"]
  // consts = ["NaN"]
  return answer */
  return answer
}
const myFunc = titleCased()
console.log(myFunc)
// console.log(titleCased())