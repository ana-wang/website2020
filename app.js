// show windows on click

var iconAbout = document.querySelector(".icon-about")
var iconProjects = document.querySelector(".icon-projects")
var iconTrash = document.querySelector(".icon-trash")
var windowAbout = document.querySelector(".about")
var windowProjects = document.querySelector(".projects")
var windowTrash = document.querySelector(".trash")


var desktopIcon = document.querySelector(".desktop-icon")
var windowClose = document.querySelectorAll(".window-close")
var desktopWindow = document.querySelectorAll(".hidden")

function showWindow() {


    iconAbout.addEventListener("click", function(){
        windowAbout.classList.add("show-window");
        windowAbout.style.zIndex = 3;
        windowProjects.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
       windowAbout.style.display = "block";

    })
    iconProjects.addEventListener("click", function(){
        windowProjects.classList.add("show-window");
        windowAbout.style.zIndex = 2;
        windowProjects.style.zIndex = 3;
        windowTrash.style.zIndex = 2;
        windowProjects.style.display = "block";

    })
    iconTrash.addEventListener("click", function(){
        windowTrash.classList.add("show-window");
        windowAbout.style.zIndex = 2;
        windowProjects.style.zIndex = 2;
        windowTrash.style.zIndex = 3;
        windowTrash.style.display = "block";
    })


}


showWindow();

desktopWindow.forEach((window, index) => {
    const onewindow = desktopWindow[index];
    windowClose.forEach((windowexit, index) => {
        windowexit.addEventListener('click', () => {
           onewindow.style.display = 'none';
        

    });
    });
  

  });

 

//function closeWindow() {
//    windowClose.addEventListener("click", function(){
 //  desktopWindow.style.display = "none";
//})
//}

//closeWindow();


// draggable windows


var container = document.querySelector(".windows");
var activeItem = null;


var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {

    if (e.target !== e.currentTarget) {
      active = true;

      // this is the item we are interacting with
      activeItem = e.target;

      if (activeItem !== null) {
        if (!activeItem.xOffset) {
          activeItem.xOffset = 0;
        }

        if (!activeItem.yOffset) {
          activeItem.yOffset = 0;
        }

        if (e.type === "touchstart") {
          activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
          activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
        } else {
          console.log("doing something!");
          activeItem.initialX = e.clientX - activeItem.xOffset;
          activeItem.initialY = e.clientY - activeItem.yOffset;
        }
      }
    }
  }

  function dragEnd(e) {
    if (activeItem !== null) {
      activeItem.initialX = activeItem.currentX;
      activeItem.initialY = activeItem.currentY;
    }

    active = false;
    activeItem = null;
  }

  function drag(e) {
    if (active) {
      if (e.type === "touchmove") {
        e.preventDefault();

        activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
        activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
      } else {
        activeItem.currentX = e.clientX - activeItem.initialX;
        activeItem.currentY = e.clientY - activeItem.initialY;
      }

      activeItem.xOffset = activeItem.currentX;
      activeItem.yOffset = activeItem.currentY;

      setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
