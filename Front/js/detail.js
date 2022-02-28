document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById("btn-submit");
    var loan = document.forms['loan-form']['loan'];
    var rate = document.forms['loan-form']['rate'];

    btnSubmit.onclick = function (){
        var loanValue = loan.value;
        var rateValue = rate.value;
        var dataToSend = {
            "loanLeft": loanValue,
            "rate": rateValue,
        }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
                var data = JSON.parse(xmlHttpRequest.responseText)
                var calculated = document.getElementById("calculate-loan");
                calculated.innerHTML = `<h1>Số tiền cần trả: ${data.toFixed()}</h1>`
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/emi/beforeTerm', false);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})