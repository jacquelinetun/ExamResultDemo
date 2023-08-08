function calculate() {
    let subj1 = parseInt(document.getElementById("subj1").value);
    let subj2 = parseInt(document.getElementById("subj2").value);
    let subj3 = parseInt(document.getElementById("subj3").value);
    let subj4 = parseInt(document.getElementById("subj4").value);
    let subj5 = parseInt(document.getElementById("subj5").value);
    let subj6 = parseInt(document.getElementById("subj6").value);
    let total = subj1 + subj2 + subj3 + subj4 + subj5 + subj6;

 

    document.getElementById("line").innerHTML = "Result: <br> ==================";

    if (subj1 > 100 || subj1 <0){
        document.getElementById("mmerrorMsg").style.display = "block";
        document.getElementById("total").innerText = "Invalid Result";
        document.getElementById("allResults").style.display = "none";
    }

    if (subj2 > 100 || subj2 <0){
        document.getElementById("engerrorMsg").style.display = "block";
        document.getElementById("total").innerText = "Invalid Result";
        document.getElementById("allResults").style.display = "none";
    }

    if (subj3 > 100 || subj3 <0){
        document.getElementById("matherrorMsg").style.display = "block";
        document.getElementById("total").innerText = "Invalid Result";
        document.getElementById("allResults").style.display = "none";
    }

    if (subj4 > 100 || subj4 <0){
        document.getElementById("phyerrorMsg").style.display = "block";
        document.getElementById("total").innerText = "Invalid Result";
        document.getElementById("allResults").style.display = "none";
    }

    if (subj5 > 100 || subj5 <0){
        document.getElementById("cheerrorMsg").style.display = "block";
        document.getElementById("total").innerText = "Invalid Result";
        document.getElementById("allResults").style.display = "none";
    }

    if (subj6 > 100 || subj6 <0){
        document.getElementById("bioerrorMsg").style.display = "block";
        document.getElementById("total").innerText = "Invalid Result";
        document.getElementById("allResults").style.display = "none";
    }

    // let Results = [subj1, subj2, subj3, subj4, subj5, subj6];

    // let hasInvalidResult = Results.some(Results => isNaN(Results) || Results > 100 || Results < 0);

    //     if (hasInvalidResult) {
    //         document.getElementById("errorMsg").style.display = "block";
    //         document.getElementById("total").innerText = "Invalid Result";

    //     }
        
    else{
        if (subj1){
            if(subj1<40){
                document.getElementById("result1").innerText = "Myanmar: " + subj1 + " (fail)";
            }
            else if(subj1>=75){
                document.getElementById("result1").innerText = "Myanmar: " + subj1 + " (pass with distinction)";
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
                document.getElementById("result2").innerText = "English: " + subj2 + " (pass with distinction)";
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
                document.getElementById("result3").innerText = "Mathematics: " + subj3 + " (pass with distinction)";
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
                document.getElementById("result4").innerText = "Physics: " + subj4 + " (pass with distinction)";
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
                document.getElementById("result5").innerText = "Chemistry: " + subj5 + " (pass with distinction)";
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
                document.getElementById("result6").innerText = "Biology: " + subj6 + " (pass with distinction)";
            }
            else{
                document.getElementById("result6").innerText = "Biology: " + subj6 + " (pass)";
            }
        } 
        document.getElementById("total").innerText = "Total: " + total;
    }
    
    }

    