var Initialamount = prompt("Enter Initial Amount : ")
    var Years = prompt("Enter Number of years(Time Period) : ")
    var Percentage = prompt("Enter Interest Rate(In percentage) : ")
    Initialamount = parseFloat(Initialamount);
    Years = parseFloat(Years);
    Percentage = parseFloat(Percentage);
    if (!isNaN(Initialamount) && !isNaN(Years) && !isNaN(Percentage) && Initialamount>=1000 && Years>=1 && Percentage<=100)
    {
        var TotalProfitObtained = 0;
        var TotalAmountInTheEnd = Initialamount;

    for (var presentyear = 1; presentyear <= Years ; presentyear++) {
      var Thisyearinterest = (TotalAmountInTheEnd * Percentage) / 100;
      
      TotalProfitObtained += Thisyearinterest;
      TotalAmountInTheEnd += Thisyearinterest;
      
      document.body.innerHTML += "<p>" + presentyear + " Year<br>" +
    "Total profit : " + TotalProfitObtained.toFixed(2) + "<br>" +
    "Total Amount: " + TotalAmountInTheEnd.toFixed(2) + "</p>";

      
    }
    alert("Total profit : " + TotalProfitObtained.toFixed(2) +
          "\nTotal Amount: " + TotalAmountInTheEnd.toFixed(2));
    }
    else {
    alert("Invalid input data");
  }