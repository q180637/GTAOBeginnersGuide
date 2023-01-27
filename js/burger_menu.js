function burger_flyout() 
{
    var x = document.getElementById("mobile_links");
    if (x.style.display === "none") {
      x.style.display = "block",
      x.style.gridColumn = "1 / span 2"
    } else {
      x.style.display = "none";
    }
}