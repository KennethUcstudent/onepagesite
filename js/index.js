// -------------------------
// for one section of horizontally section.
//select all main data 
// Const scrollcontainer = document.queryselctor(‘main’);
//inside add event 
// Scrollcontainer.addventListener(‘wheel’, (evt) =>{
//the magical happen here. sroll down into positive number >right 
// scrollContainer.scrollLeft += evt.deltaY;
// });


// stikyContainer it work but some not sure how it work
(function () {
  init();

  var g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }
  // blind events have wheel and wheelhandler
  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }
  //setting the container size with height and width using 'main' 
  function setStickyContainersSize() {
    document.querySelectorAll('.sticky-container').forEach(function (container) {
      const stikyContainerHeight = container.querySelector('main').scrollWidth;
      container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
    });
  }
  //setting viewport 
  function isElementInViewport(el) {
    // The Element.getBoundingClientRect() method returns a DOMRect object
    //  providing information about the size of an element and its position relative to the viewport.
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }
  //wheelHandler 
  function wheelHandler(evt) {
    const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).
      filter(function (container) {
        return isElementInViewport(container);
      })[0];

    if (!containerInViewPort) {
      return;
    }

    var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;
    console.log(g_canScrollHorizontally);
    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
    }
  }
})();
// -------------------------
// nav hide and show block function
function myFunction(t) {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") { //mylinks style display as block//
    x.style.display = "none";//hide mylinks none
  } else {
    x.style.display = "block";//set back to display as list//
  }
}
//nav select all section-link
let topnav = document.querySelectorAll(".section-link");
for (let i = 0; i < topnav.length; i++) {//loop list item//
  topnav[i].addEventListener("click", goToSection);//topnav add a event 'click' and go to #section. 
}
// closenav
function goToSection() {
  closenav(); //when click #link it close navgation. 
}
function closenav() {
  let x = document.getElementById("myLinks");
  x.style.display = "none";
  x.style.display = "hide";
}
// -------------------------
//img

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) { //loop//
  var img = images[i];
  img.onclick = function (evt) {
    modal.style.display = "block"; // make modal style as block style//
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; //add text under img//
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Img end
