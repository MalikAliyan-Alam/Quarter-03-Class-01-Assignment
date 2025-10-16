function setNumber(num){
    var input = document.getElementById("number")
    input.value += num
}

function result(){
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}



function clearScreen() {
    var inputValue = document.getElementById("number")
    inputValue.value = " ";
}