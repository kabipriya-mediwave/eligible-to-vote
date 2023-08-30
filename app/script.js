
function checkEligibility() {
    var age = parseInt(document.getElementById("age").value);
    var resultDiv = document.getElementById("result");
    if (!isNaN(age)) {
      if (age >= 18) {
        resultDiv.textContent = "YOU ARE ELIGIBLE TO VOTE";
        resultDiv.style.color = "green";
      } else {
        resultDiv.textContent = "YOU ARE NOT ELIGIBLE TO VOTE";
        resultDiv.style.color = "red";
      }
    } else {
      resultDiv.textContent = "PLEASE ENTER VALID AGE";
      resultDiv.style.color = "black";
    }
  }
  function clearResult() {
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
    resultDiv.style.color = "black";
    document.getElementById("age").value = "";
  }