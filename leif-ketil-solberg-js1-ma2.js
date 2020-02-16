//Question 1

const myFunctionExpression = function() {
  console.log("Leif Ketil Solberg");
}

myFunctionExpression();



//Question 2

const buttonClass = document.querySelector(".btn1");

const callback = function callAfterButtonClick() {
    console.log("I was clicked");
};

buttonClass.addEventListener("click", callback);



//Question 3

const textInput = document.querySelector("#firstName");

function callAfterKeyIsReleased() {
    console.log("Q3: A key was released");
};

textInput.addEventListener("keyup", callAfterKeyIsReleased);



//Question 4

const addButtonClass = document.querySelector("button");

function addClassOnMouseover() {
  addButtonClass.classList.add(".hover");
}

addButtonClass.addEventListener("mouseover", addClassOnMouseover());



//Question 5

const removeButtonClass = document.querySelector("button");

function removeClassOnMouseover() {
  removeButtonClass.classList.remove(".hover");
}

removeButtonClass.addEventListener("mouseout", removeClassOnMouseover());



//Question 6

/*Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.

The callback function should log the value of the data attribute on each element when the cursor moves over it.

<ul>
    <li data-animal="goose">Animal 1</li>
    <li data-animal="frog">Animal 2</li>
    <li data-animal="elephant">Animal 3</li>
</ul>*/

const liTags = document.getElementsByTagName("LI");
 
const callback = function callAfterButtonClick() {
    console.log(liTags);
};

liTags.addEventListener("mouseover", callback);


//Question 7

const animal = "cow";

switch (animal) {
  
  case "cat":
    console.log("Meow");
    break;
    
  case "cow":
    console.log("Moo");
    break;
      
  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}


//Question 8

const sheeps = ["Malcolm", "Anders", "Marie"];

sheeps.forEach(function(sheep) {
  console.log(sheep);
});



//Question 9

function logText() {

    console.log("hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;

}

let counter = 0;

const intervalId = setInterval(logText, 500);



//Question 10

const div = document.querySelector(".container");

const existingHTML = div.innerHTML;
const newHTML = "Text updated"

function logUpdate() {

  div.innerHTML = newHTML;

    if(counter === 0) {
        clearInterval(intervalId);
    }
}

let counter = 0;

const intervalId = setInterval(logUpdate, 2000);
