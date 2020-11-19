const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const PRODUCTS_AWS_URL = "http://ec2-18-191-222-30.us-east-2.compute.amazonaws.com:3000/product/";

var showSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url) {
    var result = {};
    showSpinner();
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    //document.getElementById("user").innerHTML += localStorage.getItem('user_logg');
    //document.getElementById("dropDownMenuButton").innerHTML += localStorage.getItem('user_logg');

    let htmlContentToAppend = "";
    htmlContentToAppend += `
            <div class="dropdown">
                <button class="btn dropdown-toggle dropbutton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ` +
        localStorage.getItem('user_logg') +
        `
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
                    <a class="dropdown-item" href="cart.html">Carrito</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="index.html" onclick="deleteItem();">Cerrar Sesión</a>
                    </div>
            </div>
            `
    document.getElementById("dropDownMenuButton").innerHTML = htmlContentToAppend;
});

function deleteItem() {

    localStorage.removeItem('user_logg')

}