function calculate() {

    var subj1 = parseInt(document.getElementById("subj1").value);
    var subj2 = parseInt(document.getElementById("subj2").value);
    var subj3 = parseInt(document.getElementById("subj3").value);
    var subj4 = parseInt(document.getElementById("subj4").value);
    var subj5 = parseInt(document.getElementById("subj5").value);
    var subj6 = parseInt(document.getElementById("subj4").value);
    var total = subj1 + subj2 + subj3 + subj4 + subj5 + subj6;

    document.getElementById("line").innerHTML = "Result: <br> ==================";

    if (subj1>100 ||subj2>100 ||subj3>100 || subj4>100 || subj5>100 || subj6>100 ) {
        document.getElementById("total").innerText = "Invalid Result ";
    }
    else if (subj1<0 ||subj2<0 ||subj3<0 || subj4<0 || subj5<0 || subj6<0 ){
        document.getElementById("total").innerText = "Invalid Result ";
    }

    else {
        if (subj1){
            if(subj1<40){
                document.getElementById("result1").innerText = "Myanmar: " + subj1 + " (fail)";
            }
            else if(subj1>=75){
                document.getElementById("result1").innerText = "Myanmar: " + subj1 + " (distinction)";
            }
            else {
                document.getElementById("result1").innerText = "Myanmar: " + subj1 + " (pass)";
            }
        }
        
        if (subj2){
            if(subj2<40){
                document.getElementById("result2").innerText = "English: " + subj2 + " (fail)";
            }
            else if(subj2>=75){
                document.getElementById("result2").innerText = "English: " + subj2 + " (distinction)";
            }
            else {
                document.getElementById("result2").innerText = "English: " + subj2 + " (pass)";
            }
        }
           
        if (subj3){
            if(subj3<40){
                document.getElementById("result3").innerText = "Mathematics: " + subj3 + " (fail)";
            }
            else if(subj3>=80){
                document.getElementById("result3").innerText = "Mathematics: " + subj3 + " (distinction)";
            }
            else{
                document.getElementById("result3").innerText = "Mathematics: " + subj3 + " (pass)";
            }
        }

        if (subj4){
            if(subj4<40){
                document.getElementById("result4").innerText = "Physics: " + subj4 + " (fail)";
            }
            else if(subj4>=80){
                document.getElementById("result4").innerText = "Physics: " + subj4 + " (distinction)";
            }
            else{
                document.getElementById("result4").innerText = "Physics: " + subj4 + " (pass)";
            }
        }
           

        if (subj5){
            if(subj5<40){
                document.getElementById("result5").innerText = "Chemistry: " + subj5 + " (fail)";
            }
            else if(subj5>=80){
                document.getElementById("result5").innerText = "Chemistry: " + subj5 + " (distinction)";
            }
            else{
                document.getElementById("result5").innerText = "Chemistry: " + subj5 + " (pass)";
            }
        }

        if(subj6){
            if(subj6<40){
                document.getElementById("result6").innerText = "Biology: " + subj6 + " (fail)";
            }
            else if (subj6>=75){
                document.getElementById("result6").innerText = "Biology: " + subj6 + " (distinction)";
            }
            else{
                document.getElementById("result6").innerText = "Biology: " + subj6 + " (pass)";
            }
        }       
        
        document.getElementById("total").innerText = "Total: " + total;
    }

    }