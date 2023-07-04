let result= document.getElementById("resultat");
let numberOne=0;
let numberTwo=0;
let operator="";

function getId(e){

    return e.getAttribute("id");
}

function getNumber(n){

    if(result.textContent == "0")
    {
        result.textContent="";
    }
    let idVar=getId(n);
    console.log(idVar)
    result.textContent += document.getElementById(idVar).textContent;

}
function getOperator(e){
    numberOne= parseFloat(result.textContent);
    console.log(numberOne);
    let idVar= getId(e);
    let myOp= document.getElementById(idVar).textContent;
    result.textContent += document.getElementById(idVar).textContent;
    operator= myOp;
    return myOp;
}

function equals(){

    numberTwo= parseFloat(result.textContent.split(operator)[1]);
    result.textContent= eval(numberOne + operator + numberTwo);
    console.log(numberTwo);
}
function clearScreen(){
    result.textContent= "0";
}