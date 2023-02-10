function hangar_price_toggle() {
  var x = document.getElementById("trade_price_list");
  if (x.style.display === "grid") {
    x.style.display = "none";
    x.style.gridTemplateColumns = "100%";
    x.style.gridTemplateRows = "7";
    x.style.gap ="0.5em";
    x.style.paddingLeft = "0";
  } 
  else {
    x.style.display = "grid";
  }
}