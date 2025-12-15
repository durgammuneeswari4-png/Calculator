let input = document.getElementById("input")

function val(n){
   input.value += n
}

function clr(){
    input.value = ""
}
function res(){
    input.value = eval(input.value)
}