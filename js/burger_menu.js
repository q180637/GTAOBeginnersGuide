function burger_flyout() 
{
    var x = document.getElementById("mobile_links");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}