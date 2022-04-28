window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */

let height = parseInt(document
.querySelector("#height").value);

/* Getting input from user into weight variable.
Input is string so typecasting is necessary.*/
let weight = parseInt(document
.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		
let bmi = (weight / ((height * height) / 10000)).toFixed(2);

// Dividing as per the bmi conditions
if (bmi < 18.6) result.innerHTML =
`Under Weight : <span>${bmi}</span>`;
else if (bmi >= 18.6 && bmi < 24.9)
result.innerHTML =
				`Normal : <span>${bmi}</span>`;

else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}




// var weight = parseInt(document.getElementById("weight").value);
//     document.getElementById("weight-val").textContent = weight + " kg";

//     var height = parseInt(document.getElementById("height").value);
//     document.getElementById("height-val").textContent = height + " cm";

//     var result = document.getElementById("txt");

//     var bmi;
//     bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
//     result.textContent = bmi;

//     if(bmi < 18.5){
//         category = "Underweight 😒";
//     }

//     else if( bmi >= 18.5 && bmi <= 24.9 ){
//         category = "Normal Weight 😍";
//     }

//     else if( bmi >= 25 && bmi <= 29.9 ){
//         category = "Overweight 😮";
//     }

//     else{
//         category = "Obese 😱";
//   }





// var weight = parseFloat(prompt('Enter your weight in kg'));

// var height = parseFloat(prompt('Enter your height in cm'));

// var txt = document.getElementById("txt");

// function bmi(){

// var bmiResult = weight / (height*height);

// var finalResult = Math.round(bmiResult * 100);

// if (finalResult < 18.5)
// var output = "Your BMI is " + finalResult + ", Clearly, you are underweight. See a Doctor.";
// }
// else if (finalResult >= 18.5 && finalResult <= 24.9){
// var output = "Your BMI is " + finalResult + ", Kudos, you are within the normal range. Drink water regularly";
// }
// else if (finalResult > 24.9 && finalResult <= 29.9){
// var output = "Your BMI is " + finalResult + ", You can do better, you are overweight. Register into a gym and follow through";
// }
// else {
// var output = "Your BMI is " + finalResult + ", You are obese. See a Dr immediately";
// }
// return output;
// }
//          txt.innerHTML = bmi();

         




         ​//second assignment 
 ​// var msg = document.getElementById("msg") 
 ​// var age = 16; 
 ​// var accompanied = false; 
 ​// function movie(){ 
 ​    
 ​// if (age >=13 || accompanied === true){ 
 ​//     var output2 = "You are allowed in."; 
 ​// } 
 ​// else { 
 ​//     var output2 = "You are not allowed in"; 
 ​// } 
 ​//     return output2; 
 ​// } 
 ​// msg.innerHTML = movie()






















