let products = [
    {
        id: 1,
        price: 123,
        discount: 10,
        name: "picture1",
        img: "./public/img/8.jpeg",
        href: "pages/products.html"
    },
    {
        id: 2,
        price: 123,
        discount: 10,
        name: "picture1",
        img: "./public/img/8.jpeg",
        href: "pages/products.html"
    },
    {
        id: 3,
        price: 123,
        discount: 10,
        name: "picture1",
        img: "./public/img/3.jpeg",
        href: "pages/products.html"
    },
    {
        id: 4,
        price: 123,
        discount: 10,
        name: "picture1",
        img: "./public/img/8.jpeg",
        href: "pages/products.html"
    },
    {
        id: 5,
        price: 123,
        discount: 10,
        name: "picture1",
        img: "./public/img/7.jpeg",
        href: "pages/products.html"
    },
    {
        id: 6,
        price: 123,
        discount: 10,
        name: "picture1",
        img: "./public/img/8.jpeg",
        href: "pages/products.html"
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
        name: "Funuture",
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
        photo: "public/img/slider-1.jpeg",
    },
    {
        id: 2,
        photo: "public/img/slider-2.jpeg",
    },
    {
        id: 3,
        photo: "public/img/slider-3.jpeg",
    },
]


displaytask();
page_links();
slider();

function displaytask() {

    let productsInner = document.getElementById("products");

    for (result of products) {
        let product = `
                <div id="${result.id}" class="col-lg-3 col-md-4 col-sm-6 ">
                <figure class="card shadow">
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
                <span class="price"> ${result.price - (result.price * result.discount) / 100} AZN</span>
                <del class="old-price"> ${result.price} AZN</del>
                </a>
                </figcaption>
                </figure>
              
    `;

        productsInner.insertAdjacentHTML("beforeend", product);
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

        let image = `
             <div id="${changes.id}"  class="carosel-item active "> 
                <img  src="${changes.photo}" class="d-block w-100"
                    alt="No">   
            </div>
        `;
        slide_img.insertAdjacentHTML("beforeend", image);
    }
}


//   <img src="${images.photo}" class="d-block w-100"
//                 alt="Oops">
