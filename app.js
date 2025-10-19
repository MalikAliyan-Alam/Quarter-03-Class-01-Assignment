var input = document.getElementById('displayInputs');
var output = document.getElementById('displayOutput');

function calc(val){
    input.value += val;
    return 
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
    var text = input.value;
    var opt = "/*-+/.";
    

    if(text === ""){
        input.value = "";
        alert("Please add an number and operator")
        return
    }else if(opt.includes(text[0]) || opt.includes(text[text.length -1])){
        output.value = "Error";
        return       
    }

    var errorFound = false;

    for(var i= 0; i < text.length -1; i++){
        if(opt.includes(text[i]) && opt.includes(text[i + 1])){
            errorFound = true;
            break;
        }
    }
    
    if(errorFound){
        output.value = "Error";
        return
    }else{
        output.value = eval(text)
    }
}