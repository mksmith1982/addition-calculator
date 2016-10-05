

//connects buttons and answer to html//


//connects components to html//
var calcBtn = document.getElementById("calculate-button");
var answer = document.getElementById("answer");


// beginning of the calculate function//
var calculate = function (event) {
	event.preventDefault();
var x = document.getElementById("value-one");
var y =	document.getElementById("value-two");
//making x and y a number//
var x = Number(x.value);
var y = Number(y.value);

//defining the sum//
var sum = x + y ;
	event.preventDefault()
	answer.innerHTML=sum;
}; // end of calculate function //
	


calcBtn.addEventListener("click", calculate);







