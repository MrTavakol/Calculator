let button;
let display = document.getElementById('display');

let buttons= document.getElementsByClassName('button');

let buttonsArr = Array.from(buttons);

buttonsArr.forEach((item) => {
	item.addEventListener('click',(e) => {
		try{
			switch(e.target.innerText){
				case "C":
					display.innerText = "";
					break;
					
				case "←":
					display.innerText = display.innerText.slice(0, -1);
					break;
					
				case "=":
					display.innerText = eval(display.innerText);
					break;
					
				default:
					display.innerText += e.target.innerText;
			}
		}
		catch{
			display.innerText = "Error!";
		}
	})
});
