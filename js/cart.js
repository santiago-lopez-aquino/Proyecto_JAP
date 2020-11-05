//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var cantidad = [];
var variable = [];
var cartProducts = [];
var count = [];

function showSubtotal(cartProducts) {

}

function showCart() {
    let htmlContentToAppend = "";
    for (let i = 0; i < cartProducts.length; i++) {
        htmlContentToAppend += `
        <div class="row">
            <div class"col-md-2">
                <img src="` + cartProducts[i].src + `" alt="..." class="d-block w-100">
            </div>
            <p class="col-md-4">` + cartProducts[i].name + `</p>
            <p class="col-md-2">` + cartProducts[i].currency + `  ` + cartProducts[i].unitCost + `</p>
            <div class="col-md-2"><input class="form-control" type="number" onclick="updatePrice();" placeholder="` + cartProducts[i].count + `" id="count` + i + `" value="` + count[i] + `"></div>
            <p class="col">` + cartProducts[i].currency + ` <spam id=subtotal>` + cartProducts[i].unitCost * cartProducts[i].count + `</spam></p>
        </div>       
        <hr>
        `
    }
    document.getElementById("cart").innerHTML = htmlContentToAppend;
    //document.getElementById("subtotaltotal").innerHTML = variable;
}

function updatePrice() {
    for (let i = 0; i < cartProducts.length; i++) {
        cantidad = document.getElementById("count" + i).value;
        variable = cantidad * cartProducts[i].unitCost;

    }
    document.getElementById("subtotal").innerHTML = variable;
    document.getElementById("subtotaltotal").innerHTML = variable;
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === 'ok') {
            console.log(resultObj.data.articles)
            cartProducts = resultObj.data.articles;
        }

        showCart();


    });

});