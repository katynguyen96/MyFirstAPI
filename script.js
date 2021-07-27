var button = document.getElementById('enter');
var input = document.getElementById("user input");

const urls = [
		'http://numbersapi.com/random/year?json'
];

function enter(){
	fetch(urls).then(resp=>resp.json()).then(result=>{
		document.getElementById('h').innerHTML = result.text;
	}).catch(()=>console.log("Can't get data"));
}

button.addEventListener("click", enter);



