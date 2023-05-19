let products = [
    {
        id: 1,
        price: 1800,
        discount: 10,
        name: "Electronics",
        img: "./public/img/8.jpeg",
        href: "pages/products.html"
    },


    {
        id: 2,
        price: 2000,
        discount: 10,
        name: "Electronics",
        img: "./public/img/7.jpeg",
        href: "pages/products.html"
    },

    {
        id: 3,
        price: 1000,
        discount: 10,
        name: "Electronics",
        img: "./public/img/6.jpeg",
        href: "pages/products.html"
    },


    {
        id: 4,
        price: 2000,
        discount: 10,
        name: "Electronics",
        img: "./public/img/7.jpeg",
        href: "pages/products.html"
    },

]

let watchs = [
    {
        id: 1,
        name: "Watch1",
        image: "./public/img/1.jpeg",
        discount: "10%sale",
    },
    {
        id: 2,
        name: "Watch2",
        image: "./public/img/3.jpeg",
    },
    {
        id: 3,
        name: "Watch3",
        image: "./public/img/2.jpeg",
        discount: "10%sale",
    },
    {
        id: 4,
        name: "Watch3",
        image: "./public/img/4.jpeg",
    },
]

let links = [
    {
        id: 1,
        name: "Computers",
        href: "#",
    },
    {
        id: 2,
        name: "Phones",
        href: "#",
    },
    {
        id: 3,
        name: "Sofas",
        href: "#",
    },
    {
        id: 4,
        name: "Food",
        href: "#",
    },
    {
        id: 5,
        name: "Chairs",
        href: "#",
    },
    {
        id: 6,
        name: "Customs",
        href: "#",
    },
    {
        id: 7,
        name: "Machines",
        href: "#",
    },
    {
        id: 8,
        name: "Furnuture",
        href: "#",
    },
    {
        id: 9,
        name: "Doors",
        href: "#",
    },
    {
        id: 10,
        name: "Bowls",
        href: "#",
    },

]

let images = [
    {
        id: 1,
        photo: "./public/img/slider-1.jpeg",
    },
    {
        id: 2,
        photo: "./public/img/slider-2.jpeg",
    },
    {
        id: 3,
        photo: "./public/img/slider-3.jpeg",
    },
]


displaytask();
bring_watchs();
page_links();
slider();

function displaytask() {

    let productsInner = document.getElementById("products");

    for (result of products) {
        let product1 = `
                <div id="${result.id}" class="col-lg-3 col-md-4 col-sm-6 ">
                <figure class="card shadow-lg product" >
                <a href="${result.href}" class="d-block bd">
                <span class="badge bg-success">Endirim</span>
                <img src="${result.img}"" alt="" class="my-fluid">
                </a>    
                <figcaption class="info-wrap border-top p-3">
                <a href="/" class="float-end border p-2 me-1">
                <i class="fa fa-heart"></i>
                </a>
                <a href="${result.href}" class="title text-truncate ">
              ${result.name}
                </a>
                <a href="${result.href}" class="price-wrap">
                <span style="margin-right:10px;" class="price"> ${result.price - (result.price * result.discount) / 100} <i class="fa-solid fa-manat-sign"></i></span>
                <del class="old-price"> ${result.price} <i class="fa-solid fa-manat-sign"></i></del>
                </a> 
                <ul class="border-top">
                <li>Istehsalçi: Apple</li>
                <li>Növ: Smartfon</li>
                <li>Operativ yaddaş: 16Gb</li>
                </ul>
                </figcaption>
               
                 

                </figure>
                
                   </div>   `;
        productsInner.insertAdjacentHTML("beforeend", product1);

    }
}
function bring_watchs() {

    let bringer = document.getElementById("products")

    for (taken_product of watchs) {
        let product2 = `
                <div id="${taken_product.id}" class="col-lg-3 col-md-4 col-sm-6 ">
                <figure class="card shadow-lg product" >
                <a href="#" class="d-block bd">
                <span class="badge bg-success">${taken_product.discount}</span>
                <img src="${taken_product.image}"" alt="" class="my-fluid">
                </a>    
                <figcaption class="info-wrap border-top p-3">
                <a href="/" class="float-end border p-2 me-1">
                <i class="fa fa-heart"></i>
                </a>
                <a href="#" class="title text-truncate ">
                   ${taken_product.name}
                </a>
                <a href="#" class="price-wrap">
                <span style="margin-right:10px;" class="price">180 man <i class="fa-solid fa-manat-sign"></i></span>
                <del class="old-price"> 200 man<i class="fa-solid fa-manat-sign"></i></del>
                </a> 
                <ul class="border-top watch">
                <li>Istehsalçi: Apple</li>
                <li>Növ: Saat</li>
                <li>Adapter muddeti: 8saat</li>
                </ul>
                </figcaption>

                </figure>
                
                 </div>   `;
        bringer.insertAdjacentHTML("beforeend", product2);
    }


}



function page_links() {

    let Innerproduct = document.getElementById("nav");

    for (linked of links) {
        var link = ` <a href="${linked.href}" id="${linked.id}" class="nav-link active">${linked.name}</a> `;
        Innerproduct.insertAdjacentHTML("beforeend", link);
    };


}


function slider() {
    let slide_img = document.getElementById("slides");
    for (changes of images) {

        var image = `
             <div id="${changes.id}"  class="carosel-item active "> 
                <img  src="${changes.photo}" class="d-block w-100"
                    alt="No">   
            </div>
        `;
        slide_img.insertAdjacentHTML("afterend", image);
    }
}


//   <img src="${images.photo}" class="d-block w-100"
//                 alt="Oops">
