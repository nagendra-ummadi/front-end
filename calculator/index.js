 // Function that display value 
 function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

//function that evaluate the results
function solve() {
    let x = document.getElementById("result").value;
    try {
        let y = eval(x); // Evaluate the expression (not recommended for production)
        document.getElementById("result").value = y;
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}


// Function that clear the display 
function clr() { 
    document.getElementById("result").value = "" 
} 