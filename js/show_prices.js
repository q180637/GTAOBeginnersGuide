function hangar_price_toggle() {
  var x = document.getElementById("trade_price_list");
  if (x.style.display === "none") {
    x.style.display = "grid";
    x.style.gridTemplateColumns = "50% 50%";
    x.style.gridTemplateRows = "7";
    x.style.gap ="0.5em";
  } else {
    x.style.display = "none";
  }
}