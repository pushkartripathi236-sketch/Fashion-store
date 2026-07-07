// ===============================
// TRIPATHI'S Fashion Store
// JavaScript Part-1
// ===============================

// Cart Counter

let cartCount = 0;

const cartIcon = document.querySelector(".fa-cart-shopping");

const cartButtons = document.querySelectorAll(".product-info button");

cartButtons.forEach((button)=>{

button.addEventListener("click",()=>{

cartCount++;

cartIcon.setAttribute("data-count",cartCount);

showToast("🛒 Product Added Successfully");

});

});


// ===============================
// Wishlist
// ===============================

const hearts=document.querySelectorAll(".fa-heart");

hearts.forEach((heart)=>{

heart.addEventListener("click",()=>{

heart.classList.toggle("fa-solid");

heart.classList.toggle("fa-regular");

heart.style.color="#ff3f6c";

showToast("❤️ Added To Wishlist");

});

});


// ===============================
// Toast Notification
// ===============================

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},500);

},2500);

}



// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
 

// ===============================
// Product Hover Animation
// ===============================

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});



// ===============================
// Console Message
// ===============================

console.log("🔥 Welcome To TRIPATHI'S Fashion Store");
// ===============================
// TRIPATHI'S Fashion Store
// JavaScript Part-2
// ===============================


// ===============================
// Dark Mode
// ===============================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.className="dark-mode-btn";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

darkBtn.innerHTML="☀️";

showToast("Dark Mode Enabled");

}else{

darkBtn.innerHTML="🌙";

showToast("Light Mode Enabled");

}

});


// ===============================
// Search
// ===============================

const search = document.querySelector(".fa-magnifying-glass");

if (search) {

    search.addEventListener("click", () => {

        let value = prompt("Search Product");

        if (value) {
            showToast("Searching : " + value);
        }

    });

}


// ===============================
// Loading Screen
// ===============================

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.className="loader";

loader.innerHTML="TRIPATHI'S";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},700);

},1200);

});


// ===============================
// Reveal Animation
// ===============================

const revealItems=document.querySelectorAll(

".feature-box,.category-card,.product-card,.testimonial-card,.stat-box"

);

window.addEventListener("scroll",()=>{

const trigger=window.innerHeight-100;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("active");

}

});

});


// ===============================
// Offer Popup
// ===============================

setTimeout(()=>{

showToast("🎉 Flat 50% OFF Today Only");
},3000);

// ===============================
// Auto Scroll Animation
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

    }
    else {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Newsletter
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

showToast("📧 Thanks For Subscribing");

});

}


// ===============================
// Welcome Message
// ===============================

setTimeout(()=>{

showToast("👋 Welcome To TRIPATHI'S");

},1000);
// ===============================
// REAL SHOPPING CART
// ===============================

let cart = JSON.parse(localStorage.getItem("tripathiCart")) || [];

const buttons = document.querySelectorAll(".product-info button");

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const card = btn.parentElement.parentElement;

        const image = card.querySelector("img").src;

        const name = card.querySelector("h3").innerText;

        const price = parseInt(
            card.querySelector(".price").innerText.replace(/[^\d]/g, "")
        );

        const product = {

            image,
            name,
            price,
            quantity:1

        };

        const existing = cart.find(item => item.name === name);

        if(existing){

            existing.quantity++;

        }

        else{

            cart.push(product);

        }

        localStorage.setItem("tripathiCart", JSON.stringify(cart));

        showToast("🛒 Product Added Successfully");

        updateCartCount();

    });

});

function updateCartCount(){

    const icon=document.querySelector(".fa-cart-shopping");

    if(icon){

        icon.setAttribute("data-count",cart.length);

    }

}

updateCartCount();
// =========================
// Wishlist System
// =========================

let wishlist =
JSON.parse(localStorage.getItem("tripathiWishlist")) || [];

document.querySelectorAll(".fa-heart").forEach((heart)=>{

heart.addEventListener("click",()=>{

const card=heart.closest(".product-card");

if(!card) return;

const product={

image:card.querySelector("img").src,

name:card.querySelector("h3").innerText,

price:card.querySelector(".price").innerText

};

const already=wishlist.find(item=>item.name===product.name);

if(!already){

wishlist.push(product);

localStorage.setItem("tripathiWishlist",
JSON.stringify(wishlist));

showToast("❤️ Added To Wishlist");

}

});

});

const wishlistContainer=document.getElementById("wishlistContainer");

if(wishlistContainer){

if(wishlist.length===0){

wishlistContainer.innerHTML=

'<p class="empty-message">Your Wishlist is Empty ❤️</p>';

}else{

wishlist.forEach(item=>{

wishlistContainer.innerHTML+=`

<div class="product-card">

<div class="product-image">

<img src="${item.image}">

</div>

<div class="product-info">

<h3>${item.name}</h3>

<p class="price">${item.price}</p>

<button>Add To Cart</button>

</div>

</div>

`;

});

}

}
// =========================
// LIVE SEARCH
// =========================

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

const products = document.querySelectorAll(".product-card");

products.forEach(product=>{

const name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}

// ===============================
// PRODUCT MODAL
// ===============================

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");

if (modal && modalImage && modalTitle && modalPrice) {

    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("click", () => {

            modal.style.display = "flex";

            modalImage.src = card.querySelector("img").src;
            modalTitle.innerText = card.querySelector("h3").innerText;
            modalPrice.innerText = card.querySelector(".price").innerText;

        });

    });

    const closeModal = document.querySelector(".close-modal");

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

}

// ===============================
// HERO SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

// Show Slide
function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active-dot");
    });

    if(index >= slides.length){
        currentSlide = 0;
    }

    if(index < 0){
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");

    if(dots.length){
        dots[currentSlide].classList.add("active-dot");
    }

}

// Next Slide

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// Previous Slide

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length-1;

    }

    showSlide(currentSlide);

}

// Auto Slider

function startSlider(){

    autoSlide = setInterval(nextSlide,4000);

}

function stopSlider(){

    clearInterval(autoSlide);

}

// Buttons

if(nextBtn){

nextBtn.addEventListener("click",()=>{

nextSlide();

stopSlider();

startSlider();

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

prevSlide();

stopSlider();

startSlider();

});

}

// Dots

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentSlide=index;

showSlide(currentSlide);

stopSlider();

startSlider();

});

});

// Pause On Hover

const slider=document.querySelector(".hero-slider");

if(slider){

slider.addEventListener("mouseenter",stopSlider);

slider.addEventListener("mouseleave",startSlider);

}

// Start

showSlide(currentSlide);

startSlider();
//==========================
// FLASH SALE COUNTDOWN
//==========================

const targetDate = new Date();

targetDate.setDate(targetDate.getDate()+5);

const timer = setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML =
String(days).padStart(2,"0");

document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");

if(distance<0){

clearInterval(timer);

}

},1000);
