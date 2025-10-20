var input = document.getElementById('displayInputs');
var output = document.getElementById('displayOutput');


function calc(val){
    input.value += val;
    var numbers = input.value;
    var opt = "/*-+/.";
    
    for(var i = 0; i < numbers.length ; i++){
        if(opt.includes(numbers[i]) && opt.includes(numbers[i + 1])){
            input.value = input.value.slice(0 , -1);
            return
        }
    }
}

function ac(){
    input.value = ""
    output.value = ""
    return
}

function del(){
    input.value = input.value.slice(0 , -1)
}

function equal(){
    var numbers = input.value;
    var opt = "/*-+/.";
    
    

    if(numbers === ""){
        input.value = "";
        alert("Please add an number and operator")
        return
    }else if(opt.includes(numbers[0]) || opt.includes(numbers[numbers.length -1])){
        output.value = "Error";
        return       
    }

    var isErrorFound = false;

    for(var i= 0; i < numbers.length -1; i++){
        if(opt.includes(numbers[i]) && opt.includes(numbers[i + 1])){
            isErrorFound = true;
            break
        }
    }

    
    
    if(isErrorFound){
        output.value = "Error";
        return
    }else{
        output.value = eval(numbers)
    }

}