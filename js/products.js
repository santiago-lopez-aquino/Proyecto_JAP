//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e) {});

var currentProductsArray = [];

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj);
            //sortAndShowProducts(ORDER_ASC_BY_NAME, resultObj.data);
            currentProductsArray = resultObj.data;
        }
        showProductsList();
    })

});

function showProductsList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductsArray.length; i++) {
        let products = currentProductsArray[i];

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + products.name + `</h4>
                            <small class="text-muted">` + products.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + products.description + `</p>
                    </div>
                </div>
            </a>
            `
    }

    document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;

}