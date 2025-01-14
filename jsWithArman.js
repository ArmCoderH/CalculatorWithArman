let input = document.getElementById('result');
let btn = document.querySelectorAll('button'); // This is a NodeList

let string = '';

// Add event listeners to each button
btn.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1)
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ''
            input.value = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string;
        }
        else{
            string += e.target.innerHTML; // Concatenate button text to the string
            input.value = string;
        }
    });

});

