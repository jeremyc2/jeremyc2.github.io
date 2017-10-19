
function resetAndFocus() {
    document.getElementById("myForm").elements[0].focus();
    document.getElementById("total").innerHTML = "$0.00";
    var x = document.getElementsByClassName("album");
    for (i = 11; i < (document.getElementById("myForm").length); i++) {
        x[i - 11].style.boxShadow = "0px 0px 0px 15px rgba(0,0,0,0.5)";
    }
        
}
function validate() {
    var i,
        x = document.getElementsByClassName("error"),
        input = document.getElementsByClassName("input");
    for (i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            x[i].style.visibility = "visible";
            input[i].focus();
            return false;
        }
        else{
            x[i].style.visibility = "hidden";
        }
        if (!tstphonenum() && !tstcreditcard() && !tstcreditcarddate())
            return false;
    }
    return true;
}

function checkout() {
    var i,
        total = 0;
    for (i = 11; i < (document.getElementById("myForm").length); i++) {
        var x = document.getElementsByClassName("album");
        if (document.getElementById("myForm").elements[i].checked) {
            x[i - 11].style.boxShadow = "0px 0px 0px 15px rgba(255,0,0,0.5)";
            total += 5;
        }
        else
            x[i - 11].style.boxShadow = "0px 0px 0px 15px rgba(0,0,0,0.5)";
    }
     document.getElementById("total").innerHTML = "$" + total + ".00";
}

function tstphonenum() {
    var ok = num.search(/\d{3}[\-]\d{3}[\-]\d{4}$/),
        x = document.getElementsByClassName("error"),
        num = document.getElementById("phone").value;
    if (num == "") {
        x[3].style.visibility = "hidden";
        x[3].innerHTML = "Please fill out your phone number";
        return false;
    }
    if (ok != 0) {
        x[3].innerHTML = "Invalid format for phone number (ex. 394-699-4311)";
        x[3].style.visibility = "visible";
        return false;
    }
    else {
        x[3].style.visibility = "hidden";
        x[3].innerHTML = "Please fill out your phone number";
        return true;
    }
}

function tstcreditcard() {
    var ok = num.search(/\d{16}/),
        num = document.getElementById("creditcard").value,
        x = document.getElementsByClassName("error");
    if (num == "") {
        x[5].style.visibility = "hidden";
        x[5].innerHTML = "Please fill out your Credit Card number";
        return false;
    }
    if (ok != 0) {
        x[5].innerHTML = "Invalid format for Credit Card number (ex. 3948102203849581)";
        x[5].style.visibility = "visible";
        return false;
    }
    else {
        x[5].style.visibility = "hidden";
        x[5].innerHTML = "Please fill out your Credit Card number";
        return true;
    }
}

function tstcreditcarddate(num) {
    var ok = num.search(/(0[1-9]|1[012])[- /.](20)(([1][1-9])|([2-9][0-9]))/),
        num = document.getElementById("creditcardexpirationdate").value,
        x = document.getElementsByClassName("error");
    if (num == "") {
        x[6].style.visibility = "hidden";
        x[6].innerHTML = "Please fill out your Credit Card expiration date";
        return false;
    }
    if (ok != 0) {
        x[6].innerHTML = "Invalid format for Credit Card expiration date (ex. 12/2020)";
        x[6].style.visibility = "visible";
        return false;
    }
    else {
        x[6].style.visibility = "hidden";
        x[6].innerHTML = "Please fill out your Credit Card expiration date";
        return true;
    }
}
