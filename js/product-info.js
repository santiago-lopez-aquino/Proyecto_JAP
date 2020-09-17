//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product = {};
var productComment = [];
var currentProductsArray = [];

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showComments() {
    let htmlContentToAppend = "";

    for (let i = 0; i < productComment.length; i++) {
        let comment = productComment[i];

        var stars = `<span class="fa fa-star checked"></span>`;
        var noStars = `<span class="fa fa-star"></span>`

        htmlContentToAppend += `
        
            <div class="list-gruop-item list-group-item-action">
                <div class="commentbox">
                    <div class="d-flex">
                        <div class"starRating">
                        ` + stars.repeat(comment.score) + noStars.repeat(5 - comment.score) + `
                        </div>
                    </div><br>
                    <span class=""><strong>` + comment.user + `</strong></span>
                    <p class=""><br>` + comment.description + `</p>
                    <small class="text-muted">` + comment.dateTime + `</small>
                </div>
            </div>
        `;
        document.getElementById("prod-list-comments").innerHTML = htmlContentToAppend;

    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj.data)
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
            let productCostAndCurrencyHTML = document.getElementById("productCostAndCurrency");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
            productCostAndCurrencyHTML.innerHTML = product.currency + " " + product.cost;
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);

        }
    });
});

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj.data)
            productComment = resultObj.data;
        }

        showComments();

    });
});