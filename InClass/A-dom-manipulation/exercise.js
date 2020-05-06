/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

var allPElements = document.querySelectorAll("p");
console.log(allPElements);

var firstDivElement = document.querySelector("div");
console.log(firstDivElement);

var elementIdJumbotromText = document.querySelector("#jumbotron-text");
console.log (elementIdJumbotromText);

var pElementsInsidePrimaryContentClass = document.querySelectorAll (".primary-content p");
console.log (pElementsInsidePrimaryContentClass);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("DONE!!!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var bgrChangeButton = document.querySelector("#bgrChangeBtn");
bgrChangeButton.addEventListener("click", bgrChangeFunction);

function bgrChangeFunction() {
    
    var body = document.querySelector("body");
    body.style.backgroundColor = "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addTextFunction);

function addTextFunction() {
    
var paragraph = document.createElement("p"); 

var learnMoreDiv= document.querySelector("#mainArticles");
learnMoreDiv.appendChild(paragraph);
paragraph.innerText = "TEXT TEXT TEXT";

}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", largerLinksFunction);

function largerLinksFunction() {
    
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++){
    links[i].style.fontSize = "20px";
    }
} 

/*
Task 6
======
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

