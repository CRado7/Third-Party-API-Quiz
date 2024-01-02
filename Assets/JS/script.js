
//  Quiz Questions
// var questions = [
//   {
//       prompt: "The Full form of CSS is:",
//       choices: ["Cascading Style Sheets", "Colored Special Sheets", "Color and Style Sheets", "None of the above"],
//       answer: "Cascading Style Sheets"
//   },

//   {
//       prompt: "How can we change the background color of an element",
//       choices: ["background-color", "color", "background-image", "background"],
//       answer: "background-color"
//   },

//   {
//       prompt: "How can we change the text color of an element?",
//       choices: ["background-color", "color", "font-color", "text-background"],
//       answer: "color"
//   },

//   {
//       prompt: "How can CSS be written?",
//       choices: ["Inline", "External", "Internal", "All of the above"],
//       answer: "All of the above"
//   },

//   {
//       prompt: "What type of CSS is the following code?: <h1 style='color:blue;'>A Blue Heading</h1>",
//       choices: ["Inline", "External", "Internal", "All of the above"],
//       answer: "Inline"
//   },

//   {
//       prompt: "What type of CSS is generally recommended for designing large web pages?",
//       choices: ["Inline", "External", "Internal", "None of the above"],
//       answer: "External"
//   },

//   {
//       prompt: "Which HTML tag is used to declare internal CSS?",
//       choices: ["<style>", "<link>", "<script>", "<a>"],
//       answer: "<style>"
//   },

//   {
//       prompt: "How can we select an element with a specific ID in CSS?",
//       choices: ["#", ".", "</>", "{}"],
//       answer: "#"
//   },

//   {
//       prompt: "How can we select an element with a specific Class in CSS?",
//       choices: ["#", ".", "</>", "{}"],
//       answer: "."
//   },

//   {
//       prompt: "How can we write comments in CSS?",
//       choices: ["/* */", "//", "#", "All of the above"],
//       answer: "/* */"
//   },

//   {
//       prompt: "In the below code snippet, in what order will the margins be added?: margin: 25px 50px 75px 100px;",
//       choices: ["Top, Right, Bottom, Left", "Top, Left, Bottom, Right", "Bottom, Right, Top, Left", "Left, Right, Bottom, Top"],
//       answer: "Top, Right, Bottom, Left"
//   },

//   {
//       prompt: "In the below code snippet, in what order will the margins be added?: margin: 25px 50px 75px 100px;",
//       choices: ["Top, Right, Bottom, Left", "Top, Left, Bottom, Right", "Bottom, Right, Top, Left", "Left, Right, Bottom, Top"],
//       answer: "Top, Right, Bottom, Left"
//   },

//   {
//       prompt: "Can negative values be allowed in padding property",
//       choices: ["Yes", "No", "Depends on the property", "None of the above"],
//       answer: "No"
//   },

//   {
//       prompt: "The CSS property used to specify the transparency of an element is?",
//       choices: ["opacity", "visibility", "filter", "None of the above"],
//       answer: "opacity"
//   },

//   {
//       prompt: "How can we specify the spacing between each letter in a text in CSS?",
//       choices: ["alpha-spacing", "letter-spacing", "character-spacing", "None of the above"],
//       answer: "letter-spacing"
//   },

//   {
//       prompt: "How can we specify the spacing between each letter in a text in CSS?",
//       choices: ["alpha-spacing", "letter-spacing", "character-spacing", "None of the above"],
//       answer: "letter-spacing"
//   },

//   {
//       prompt: "Inside which HTML element do we put the JavaScript?",
//       choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
//       answer: "<script>"
//   },

//   {
//       prompt: "How do you call a function named myFunction?",
//       choices: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction"],
//       answer: "myFunction()"
//   },

//   {
//       prompt: "How does a for loop start?",
//       choices: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", " for (i <= 5; i++)"],
//       answer: "for (i = 0; i <= 5; i++)"
//   },

//   {
//       prompt: "In JavaScript, which of the following is a logical operator?",
//       choices: ["|", "&&", "%", "/"],
//       answer: "&&" 
//   },

//   {
//       prompt: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
//       choices: ["method", "assignment operator", "variable", "string"],
//       answer: "variable"
//   }
// ];

var startBtn = document.querySelector("#start");
var timerCount = document.querySelector("#count");

var startTime = 60;

function quizStart() {
    document.getElementById("quiz_info").style.display = "none";
    timerCount.textContent = startTime;
}

// Start Quiz
startBtn.onclick = quizStart;
