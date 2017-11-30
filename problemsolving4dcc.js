"use strict";
function theUserInput(){
	let info = prompt("Type anything you want");
	return info;

}
function testIfPalindrome(userInput){
	let word = userInput; 
	let array = word.split("");
	let backString = array.join("");
	let change = array.reverse("");
	let oneMore = change.join("");
	let answer = [ ]
    if (backString === oneMore){
    		answer = true;
    	}
        else{
        	answer = false;
    }
    return answer 
     
}
let userInput = theUserInput();
let trial = testIfPalindrome(userInput);
console.log(trial);



