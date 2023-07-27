let products = [
    {
        id: 1,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Iphone",
        img: "./public/img/8.jpeg",
        href: "pages/products.html"
    },


    {
        id: 2,
        price: 2000,
        discount: 9,
        category: "phone",
        brand: "Apple",
        name: "Iphone",
        img: "./public/img/7.jpeg",
        href: "pages/products.html"
    },

    {
        id: 3,
        price: 1000,
        discount: 10,
        category: "phone",
        brand: "Apple",
        name: "Iphone",
        img: "./public/img/6.jpeg",
        href: "pages/products.html"
    },


    {
        id: 4,
        price: 2000,
        discount: 10,
        category: "phone",
        brand: "Apple",
        name: "Iphone",
        img: "./public/img/7.jpeg",
        href: "pages/products.html"
    },
    {
        id: 5,
        price: 1800,
        name: "Watch1",
        category: "watch",
        brand: "Apple",
        img: "./public/img/1.jpeg",
        discount: 30,
        href: "pages/products.html"
    },
    {
        id: 6,
        price: 1800,
        name: "Watch2",
        category: "watch",
        brand: "Apple",
        img: "./public/img/3.jpeg",
        discount: 0,
        href: "pages/products.html"
    },
    {
        id: 7,
        price: 1800,
        name: "Watch3",
        brand: "Apple",
        category: "watch",
        img: "./public/img/2.jpeg",
        discount: 10,
        href: "pages/products.html"
    },
    {
        id: 8,
        name: "Watch3",
        price: 1800,
        category: "watch",
        brand: "Apple",
        img: "./public/img/4.jpeg",
        discount: 0,
        href: "pages/products.html"
    },

]
products.sort((a, b) => a.discount - b.discount);

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


getProducts();
page_links();
slider();

function getProducts() {

    let productsInner = document.getElementById("products");

    for (product of products) {
        let product1 = `
                <div id="${product.id}" class="col-lg-3 col-md-4 col-sm-6 ">
                <figure class="card my-shadow product" >
                <a href="${product.href}" class="d-block bd">
                <span class="badge bg-success ${product.discount ? '' : 'd-none'}">Endirim</span>
                <img src="${product.img}"" alt="" class="my-fluid">
                </a>    
                <figcaption class="info-wrap border-top p-3">
                <a href="/" class="float-end border p-2 me-1">
                <i class="fa fa-heart"></i>
                </a>
                <a href="${product.href}" class="title text-truncate ">
              ${product.name}
                </a>
                <a href="${product.href}" class="price-wrap">
                <span  class="price ${product.discount ? '' : 'd-none'}"> ${product.price - (product.price * product.discount) / 100} <i class="fa-solid fa-manat-sign"></i></span>
                <span class="${product.discount ? 'old-price' : ''}"> ${product.price} <i class="fa-solid fa-manat-sign"></i></span>
                </a> 
                </figcaption>
                <div class="product-detail my-shadow">
                <ul class="">
                <li>Istehsalçi: ${product.brand}</li>
                <li>Növ: ${product.category}</li>
                <li>Operativ yaddaş: 16Gb</li>
                </ul>
                </div>
                </figure>
                
                   </div>   `;
        productsInner.insertAdjacentHTML("beforeend", product1);

    }
}

function page_links() {

    let categories = document.getElementById("categories");

    for (let item of links) {
        var link = ` <a href="${item.href}" id="${item.id}" class="nav-link active">${item.name}</a> `;
        categories.insertAdjacentHTML("beforeend", link);
    };

}


function slider() {
    let slide_img = document.getElementById("sliders");
    for (slideImage of images) {

        var image = `
             <div id="${slideImage.id}" class="carousel-item ${slideImage.id == 2 ? 'active' : ' '}"> 
                <img  src="${slideImage.photo}" class="d-block w-100"
                    alt="No">   
            </div>
            
        `;
        slide_img.insertAdjacentHTML("beforeend", image);
    }
}
