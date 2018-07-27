function sum(){
    var y = document.getElementById("y").value;
    var x = document.getElementById("x").value;
    
    y = parseInt(y);
    x = parseInt(x);
   
    console.log(x + y);
    document.getElementById("answer").innerHTML = x+y;
}

function subtract(){
    var y = document.getElementById("y").value;
    var x = document.getElementById("x").value;
    
    y = parseInt(y);
    x = parseInt(x);
  
    console.log(x - y);
    document.getElementById("answer").innerHTML = x-y;
}
    function muiltply(){
        var y = document.getElementById("y").value;
        var x = document.getElementById("x").value;
        
        y = parseInt(y);
        x = parseInt(x);
       
        console.log(x * y);
        document.getElementById("answer").innerHTML = x*y;
    }

    function divide(){
        var y = document.getElementById("y").value;
        var x = document.getElementById("x").value;
        
        y = parseInt(y);
        x = parseInt(x);
       
        console.log(x / y);
        document.getElementById("answer").innerHTML = x/y;
    }    

















