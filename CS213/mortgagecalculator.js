function validate(action) {
    "use strict";
    var i;
    var stop = false;
    for(i = 0; i < (document.getElementById("myForm").length -3); i++)
    {
        if(document.getElementById("myForm").elements[i].value == "" )
        {
            if(action == 2)
              {
                   alert("Please fill out " + document.getElementById("myForm").elements[i].name);
                    document.getElementById("myForm").elements[i].focus();
              }
            
            i = document.getElementById("myForm").length;
            stop = true;
        }
    }
    if(stop == false)
    {
        calculateMortgage();
    }
}

function calculateMortgage() {
    "use strict";
    var apr = document.getElementById("apr").value,
        term = document.getElementById("term").value,
        ammount = document.getElementById("ammount").value,
        mp = 0,
        monthlyInterest = apr / 1200;
    mp = ammount * monthlyInterest * (Math.pow((1 + monthlyInterest), (term * 12))) /
        (Math.pow((1 + monthlyInterest), (term * 12)) - 1);
    mp = mp.toFixed(2);
    document.getElementById("monthlyPayment").innerHTML = mp;
    document.getElementById("mp").value = mp;
}