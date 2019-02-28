// 1. Use JavaScript to obtain a reference to the first 
// section with the class of article_header and change its 
// text with the textContent property to "Welcome to the {insert your name here} blog"
const name = "Michael's";
const elHeader = document.querySelector(".article__header").textContent = "Welcome to " + name + " Blog";

// 2. Use JavaScript to obtain a reference to all article__header 
// elements and change their classList property value to article__header important.
const articleHeadArray = document.querySelectorAll(".article__header");
for (let i = 0; i < articleHeadArray.length; i++) {
    articleHeadArray[i].classList.add("important");
}

// 3.Obtain a reference the element with a class of dashed and remove it.
const elDashed = document.querySelector(".dashed");
elDashed.classList.remove("dashed");

// 4. Obtain a reference the element with a class of 
// article_footer and add the class of goldenrod it.
const elFooter = document.querySelector(".article__footer");
elFooter.classList.add("goldenrod");