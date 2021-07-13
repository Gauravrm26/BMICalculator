
document.getElementById("btn").addEventListener("click", bmiCalculator);
function bmiCalculator(){
    var kg = parseFloat(document.getElementById("kg").value);
    var cm = parseFloat(document.getElementById("cm").value);
    var finalBmi = (kg * 10000) / (cm * cm) ;
    document.getElementById("output").value = finalBmi;
};


// $("btn").click(bmiCalculator);
//     function bmiCalculator(){
//     var cm = parseFloat($("cm").value);
//     var kg = parseFloat($("cm").value);