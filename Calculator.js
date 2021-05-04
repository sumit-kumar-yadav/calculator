var button = document.getElementsByTagName('th');
var display = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        // var value = this.innerHTML;
        console.log(value);
        // var text = display.textContent.trim();
        
        if(value == "/" || value == "*" || value == "-" || value == "+"){
           // perform operation
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        else if(value == "="){
            // display result
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            console.log(result);
            // display.innerText = result;
            if(result == Infinity){
                display.innerText = "Error";
            }
            else if (result || result == 0) {
                display.innerText = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else if(value == "AC"){
            // clear screen
            display.innerText = "";
            // display.innerText = null;
        }
        else if(value == "+/-"){
            // toggle sign
            if(display.textContent == "" || display.textContent == "Error"){
                display.innerText = "Error";
            }
            else{
                operand1 = parseFloat(display.textContent);
                operand1 = -1 * operand1;
                display.innerText = operand1;
            }
        }
        else if(value == "%"){
            // display 0.number
            if(display.textContent == "" || display.textContent == "Error"){
                display.innerText = "Error";
            }
            else{
                operand1 = parseFloat(display.textContent);
                operand1 = operand1 / 100;
                display.textContent = operand1;
            }
        }
        else if (value == ".") {
            if (display.textContent.length && !display.textContent.includes('.')) {
                display.innerText = display.textContent + '.';
            }
        }
        else{
            // concatenate them
            if(display.textContent == "Error"){
                display.innerText = "";
            }
            display.innerText += value;
        }
    });
}