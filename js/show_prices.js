function hangar_price_toggle() {
  var x = document.getElementById("trade_price_list");
  if (x.style.display === "block") {
    x.style.display = "none";
    x.style.gridTemplateColumns = "100%";
    x.style.gridTemplateRows = "7";
    x.style.gap ="0.5em";
    x.style.paddingLeft = "0";
  } 
  else {
    x.style.display = "block";
  }
  var y = document.getElementById("button_text");
  if (x.style.display === "block" && y.innerHTML === "Show list of trade prices"){
    y.innerHTML = "Hide list of trade prices";
  }
  else{ y.innerHTML = "Show list of trade prices";
  }
}