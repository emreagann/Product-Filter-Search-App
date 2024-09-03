let products = {
    data:[
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image: "white-tshirt.jpg"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "50",
            image: "short-skirt.jpg"
        },
        {
            productName: "Sporty Smart Watch",
            category: "Watch",
            price: "100",
            image: "sporty-smartwatch.jpg"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "30",
            image: "knitted-top.jpg"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "250",
            image: "black-leather-jacket.jpg"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "90",
            image: "pink-trousers.jpg"
        },
        {
            productName: "Brown Men's Jacket ",
            category: "Jacket",
            price: "190",
            image: "brown-jacket.jpg"
        },
        {
            productName: "Comfy Gray Pants ",
            category: "Bottomwear",
            price: "50",
            image: "comfy-gray-pants.jpg"
        },
    ],
};
for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div");
    container.classList.add("container");
    let price = document.createElement("h6")
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button)=> {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}
document.getElementById("search").addEventListener("click",() =>{
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element,index)=>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
});
window.onload = () => {
    filterProduct("all");
};