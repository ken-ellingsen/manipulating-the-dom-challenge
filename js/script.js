var firstListItem = document.querySelector("ul li");
firstListItem.style.textTransform = "uppercase";
// console.log(firstListItem.outerHTML);

var moreReasons = document.querySelector(".more-reasons");
moreReasons.style.fontSize = "2.5em";
// console.log(moreReasons.outerHTML);

var whyJS = document.querySelector(".intro h3");
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
var highlight = document.querySelector(".highlight");
highlight.style.background = "#ffff82";
// console.log(whyJS.outerHTML);

var mainImage = document.querySelector("img");
mainImage.src = "../img/js-code.png";
mainImage.alt = "JavaScript code example";
// console.log(mainImage.outerHTML);
