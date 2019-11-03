let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/diwali-image.jpg'){
		myImage.setAttribute('src','images/diwali-image1.jpg');
	}
	else{
		myImage.setAttribute('src','images/diwali-image.jpg');
	}
}

//let myButton = document.querySelector('button');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Please enter your name.');
	if(!myName || myName === null){
		setUserName();
	}
	else{
		localStorage.setItem('name',myName);
		myHeading.textContent = 'Diwali is cool, ' + myName;
	}	
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Diwali is cool, ' + storedName;
}

/*myButton.onclick = function(){
	setUserName();
}*/

myButton.onclick = function() {
  setUserName();
}