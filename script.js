
// var mainContent = document.getElementById("mainContent");
// mainContent.setAttribute("align", "right");

// var mainTitle = document.getElementById("mainTitle");
// console.log(mainTitle.innerHTML);

// var newHeading = document.createElement("h1");
// var newParagraph = document.createElement("p");

// newHeading.innerHTML = "Did you know?";
// newParagraph.innerHTML = "California produces over 17 million gallons of win each year!";


// use the commented-out code for reference, or just write your own.

//document.onclick = function() {
//  alert("You clicked somewhere in the document");
//};

//function prepareEventHandlers() {
//  var myImage = document.getElementById("mainImage");
//  myImage.onclick =  function() {
//      alert("You clicked the image");
//  }
//}

//window.onload = function() {
    // prep anything we need to
//  prepareEventHandlers();
//};

// document.onclick = function() {
// 	alert("You clicked somewhere in the document");
// };

// function prepareEventHandlers() {
// 	var myImage = document.getElementById("mainImage");
// 	myImage.onclick = function() {
// 		alert("You clicked the image");
// 	};
// }

// window.onload = function() {
// 	prepareEventHandlers();
// };

// Two methods for timers - setTimeout and SetInterval (single / repeating)

// function simpleMessage() {
//     alert("This is just an alert box");
// }

// // settimeout is in milliseconds
// setTimeout(simpleMessage,5000);

// var myImage = document.getElementById("mainImage");

// var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
//                   "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
// var imageIndex = 0;

// function changeImage() {
//     myImage.setAttribute("src",imageArray[imageIndex]);
//     imageIndex++;
//     if (imageIndex >= imageArray.length) {
//         imageIndex = 0;
//     }
// }

// // setInterval is also in milliseconds
// var intervalHandle = setInterval(changeImage,5000);

// myImage.onclick =  function() {
//     clearInterval(intervalHandle);
// };


// // setInterval is also in milliseconds
// setInterval(changeImage,5000);


// var messageArray = ["The true heart of California","Tours as diverse as California itself","Explore our world your way"];
// var messageIndex = 0;

// function deeperFunction() {
//     // perform loop
//     for (var i = 0; i < 500; i++) {
//         // do stuff.
//         var foo = i * (Math.random());
//         var bar = foo;
//         // more exciting code.
//     }
// }

// function simpleFunction() {
//     // jump into a deeper function
//     deeperFunction();
//     // now grab the message and change it.
//     var newMessage = messageArray[messageIndex];
//     var messageElement = document.getElementById("mainMessage");
//     messageElement.innerHTML = newMessage;
//     messageIndex++;
//     if (messageIndex > messageArray.length) {
//         messageIndex = 0;
//     }
// }

// function changeMessage() {
//     simpleFunction();
// }

// window.onload = function() {
//     setInterval(changeMessage,4000);
// };



// countdown.html
// two global variables
var secondsRemaining;
var intervalHandle;

function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}

function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");

    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;

    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
    // subtract from seconds remaining
    secondsRemaining--;
}

function startCountdown() {
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
    // check if not a number
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }
    // how many seconds?
    secondsRemaining =  minutes * 60;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    // hide the form
    document.getElementById("inputArea").style.display = "none";
}

// as soon as the page is loaded...
window.onload =  function () {
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};



// // resize example
// function adjustStyle() {
//     var width = 0;
//     // get the width.. more cross-browser issues
//     if (window.innerHeight) {
//         width = window.innerWidth;
//     } else if (document.documentElement && document.documentElement.clientHeight) {
//         width = document.documentElement.clientWidth;
//     } else if (document.body) {
//         width = document.body.clientWidth;
//     }
//     // now we should have it
//     if (width < 600) {
//         document.getElementById("myCSS").setAttribute("href", "_css/narrow.css");
//     } else {
//         document.getElementById("myCSS").setAttribute("href", "_css/main.css");
//     }
// }

// // now call it when the window is resized.
// window.onresize = function () {
//     adjustStyle();
// };



