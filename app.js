var calc= document.getElementById('calc');
    function bmi(){
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    if(h>0&&w>0){
        var bmi = w/(h/100*h/100);
        var bmio = (bmi.toFixed(2));
        document.getElementById('result').innerHTML="You BMI is "+bmio;
        }
    else{
        document.getElementById('result').innerHTML="Enter The Weight and Height pleas"
        }
    }

