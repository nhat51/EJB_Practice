document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById("btn-submit");
    var loan = document.forms['loan-form']['loan'];
    var rate = document.forms['loan-form']['rate'];
    var term = document.forms['loan-form']['term'];

    btnSubmit.onclick = function (){
        var loanValue = loan.value;
        var rateValue = rate.value;
        var termValue = term.value;
        var dataToSend = {
            "loan": loanValue,
            "rate": rateValue,
            "term": termValue,
        }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                var data = JSON.parse(xmlHttpRequest.responseText)
                var calculated = document.getElementById("calculate-loan");
                calculated.innerHTML = `<h1>Loan calculate: ${data.toFixed()}</h1>`
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/emi/totalLoan', false);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})