function add(x,y){
	return x+y;
}

function subtract(x,y){
	return x-y;
}

function multiply(x,y){
	return x*y;
}

function divide(n,d){
	return n/d;
}

function power(x,n){
	return x**n;
}

function identity(...args){
	return args[args.length-1];
}

function operate(num1,num2){
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	return operation(num1,num2);
}

temp = 0;
display = 0;
operation =""
function update(e){

	function tempNum(currentNum,btnNum){
		if (currentNum==0){return btnNum;}
		decimalPresent = currentNum%1!=0;
		if (btnNum =="." && decimalPresent){
			return currentNum;
		}
		return currentNum+ btnNum;
	}

	function execute_operation(){
		if (display == 0){
			display = temp;
			return;
		}
		display = operate(display,temp,operation);
		operation = "";
		temp =0;
	}


	const buttons = document.querySelectorAll("button")
	if (![...buttons].includes(e.target)){return;}
	btn = e.target;

	if(btn.className === 'digit'){
		temp = tempNum(temp,btn.id[1])
		if (operation ==""){display = temp}
	}

	else if (btn.className=="operation"){
		if (operation ==""){
			operation = eval(btn.id); //dangerous operation
			temp = 0;
		} else if(operation!=""){
			execute_operation();
			operation = eval(btn.id);
		}else{
			operation = eval(btn.id)
		}
		console.log(btn.id)
	}

	else if (btn.id == "clear"){
		if (temp ==0){display =0;} 
		temp=0;
	}

	if (btn.id==="equals"){
		if (operation ==""){
			display = temp;
		}
		execute_operation();

	}

	textDisplay = document.querySelector('#display')
	textDisplay.innerHTML = display;

	tempDisplay = document.querySelector('#temp-display')
	tempDisplay.innerHTML = temp;
}

window.addEventListener('click', update);
