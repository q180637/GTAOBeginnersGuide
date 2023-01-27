const element = document.getElementsByClassName("show_prices");

element.addEventListener("click", hangar_price_toggle());

function hangar_price_toggle()
{
    document.getElementsById("trade_price_list").style.display = "block";
};