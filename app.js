// show windows on click

var startAbout = document.querySelector(".start-about")
var startGoodbye = document.querySelector(".start-goodbye")
var startHelpBox = document.querySelector(".start-help")

// desktop icons
//var iconAbout = document.querySelector(".icon-about")
var iconImages = document.querySelector(".icon-images")
var iconTrash = document.querySelector(".icon-trash")
var iconDocuments = document.querySelector(".icon-documents")
var iconEmails = document.querySelector(".icon-emails")

// desktop windows
var allWindows = document.querySelector(".hidden")
var windowAbout = document.querySelector(".about")
var windowImages = document.querySelector(".images")
var windowTrash = document.querySelector(".trash")
var windowMood =  document.querySelector(".mood")
var windowDocuments = document.querySelector(".documents")
var windowEmails = document.querySelector(".emails")
var boxGoodbye = document.querySelector(".goodbye")
var boxEmailAna = document.querySelector("section.help")

var desktopIcon = document.querySelector(".desktop-icon")
var windowClose = document.querySelectorAll(".window-close")
var desktopWindow = document.querySelectorAll(".hidden")


function showWindow() {

    startAbout.addEventListener("click", function(){
        windowAbout.classList.toggle("show-window");
        windowAbout.classList.toggle("hide-window");
        windowMood.style.zIndex = 2;
        windowAbout.style.zIndex = 3;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
        boxEmailAna.style.zIndex = 2;
        boxGoodbye.style.zIndex = 2;
    })

  //  iconAbout.addEventListener("click", function(){
    //    windowAbout.classList.toggle("show-window");
      //  windowAbout.classList.toggle("hide-window");
       // windowAbout.style.zIndex = 3;
        //windowProjects.style.zIndex = 2;
        //windowTrash.style.zIndex = 2;
       
       

 //   })
 iconImages.addEventListener("click", function(){
    windowImages.classList.toggle("show-window");
    windowImages.classList.toggle("hide-window");
   windowMood.style.zIndex = 2;
      windowAbout.style.zIndex = 2;
    windowDocuments.style.zIndex = 2;
    windowImages.style.zIndex = 3;
   windowTrash.style.zIndex = 2;
     windowEmails.style.zIndex = 2;
       boxEmailAna.style.zIndex = 2;
      boxGoodbye.style.zIndex = 2;
      

  })
    iconTrash.addEventListener("click", function(){
        windowTrash.classList.toggle("show-window");
        windowTrash.classList.toggle("hide-window");
        windowMood.style.zIndex = 2;
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 3;
        windowEmails.style.zIndex = 2;
        boxEmailAna.style.zIndex = 2;
        boxGoodbye.style.zIndex = 2;
      
    })
    iconDocuments.addEventListener("click", function(){
        windowDocuments.classList.toggle("show-window");
        windowDocuments.classList.toggle("hide-window");
        windowMood.style.zIndex = 2;
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 3;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
        boxEmailAna.style.zIndex = 2;
        boxGoodbye.style.zIndex = 2;
      
    })

    iconEmails.addEventListener("click", function(){
        windowEmails.classList.toggle("show-window");
        windowEmails.classList.toggle("hide-window");
        windowMood.style.zIndex = 2;
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowEmails.style.zIndex = 3;
        boxEmailAna.style.zIndex = 2;
        boxGoodbye.style.zIndex = 2;

    })
    startGoodbye.addEventListener("click", function(){
        windowMood.style.zIndex = 2;
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
        boxEmailAna.style.zIndex = 2;
        boxGoodbye.style.zIndex = 3;
    })
    startHelpBox.addEventListener("click", function(){
        windowMood.style.zIndex = 2;
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
        boxEmailAna.style.zIndex = 3;
        boxGoodbye.style.zIndex = 2;
    })
   
}


showWindow();

// hide window on x button

var aboutX = document.querySelector(".about .window-close")
var moodX = document.querySelector(".mood .window-close")
var imagesX = document.querySelector(".images .window-close")
var trashX = document.querySelector(".trash .window-close")
var documentsX = document.querySelector(".documents .window-close")
var emailsX = document.querySelector(".emails .window-close")
var helpX = document.querySelector(".help .window-close")
var goodbyeX = document.querySelector(".goodbye .window-close")

function exitAbout() {
    aboutX.addEventListener("click", function(){
        windowAbout.classList.remove("show-window");
        windowAbout.classList.add("hide-window");
    })
}
function exitDocuments() {
    documentsX.addEventListener("click", function(){
        windowDocuments.classList.remove("show-window");
        windowDocuments.classList.add("hide-window");
    })
}
function exitImages() {
    imagesX.addEventListener("click", function(){
        windowImages.classList.remove("show-window");
        windowImages.classList.add("hide-window");
    })
}
function exitTrash() {
    trashX.addEventListener("click", function(){
        windowTrash.classList.remove("show-window");
        windowTrash.classList.add("hide-window");
    })
}
function exitMood() {
    moodX.addEventListener("click", function(){
        windowMood.classList.remove("show-window");
        windowMood.classList.add("hide-window");
    })
}
function exitHelp() {
    helpX.addEventListener("click", function(){
        boxEmailAna.style.display = "none";
    })
}

function exitGoodbye() {
    goodbyeX.addEventListener("click", function(){
        boxGoodbye.style.display = "none";
    })
}


function exitEmails() {
    emailsX.addEventListener("click", function(){
        windowEmails.classList.remove("show-window");
        windowEmails.classList.add("hide-window");
    })
}

exitAbout()
exitImages()
exitDocuments()
exitTrash()
exitMood()
exitEmails()
exitHelp()
exitGoodbye()

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

  // show start menu on click
  var startMenu = document.querySelector(".start")
  var startLogo = document.querySelector(".logo")
 

function classToggle() {
    startMenu.classList.add("show-start");
    startMenu.classList.remove("hide-start");

}

function removeToggle() {
    startMenu.classList.remove("show-start");
    startMenu.classList.add("hide-start");

}


function menuToggle() {
    startLogo.addEventListener("mouseenter", function(){
        classToggle()
        startSettingsMenu.classList.remove("show-start")
        startSettingsMenu.classList.add("hide-start")
        startRecentMenu.classList.remove("show-start");
        startRecentMenu.classList.add("hide-start");
    })

    startMenu.addEventListener("mouseleave", function(){
        removeToggle()
        startSettingsMenu.classList.remove("show-start")
        startSettingsMenu.classList.add("hide-start")
        startRecentMenu.classList.remove("show-start");
        startRecentMenu.classList.add("hide-start");
    })


}

menuToggle()

// show settings start menu on click 

var startSettingsMenu = document.querySelector(".start-settings-menu")
var startSettingsLogo = document.querySelector(".start-settings")
var startRecentMenu = document.querySelector(".start-recent-menu")
var startRecentLogo = document.querySelector(".start-recent")
var startHelpBox = document.querySelector(".start-help")
var startGoodbye = document.querySelector(".start-goodbye")

function settingsClassToggle() {
    startSettingsMenu.classList.add("show-start");
    startSettingsMenu.classList.remove("hide-start");
    
  
}

function settingsMenuToggle() {
    startSettingsLogo.addEventListener("mouseenter", function(){
        settingsClassToggle();
        startRecentMenu.classList.remove("show-start");
        startRecentMenu.classList.add("hide-start");
       
    })
    
}

settingsMenuToggle()

function recentClassToggle() {
    startRecentMenu.classList.add("show-start");
    startRecentMenu.classList.remove("hide-start");
  

}

function recentMenuToggle() {
    startRecentLogo.addEventListener("mouseenter", function(){
        recentClassToggle();
        startSettingsMenu.classList.remove("show-start")
        startSettingsMenu.classList.add("hide-start")
       
    } )
  
}

recentMenuToggle()

function recentMenuShow() {
    startSettingsMenu.addEventListener("mouseenter", function(){
        startMenu.classList.add("show-start")
        startMenu.classList.remove("hide-start")
    })
}

recentMenuShow()

function openHelpBox() {
    startHelpBox.addEventListener("click", function(){
        boxEmailAna.style.display = "block";
    })
}

openHelpBox();

function openGoodbye() {
    startGoodbye.addEventListener("click", function(){
        boxGoodbye.style.display = "block";
    })
}

openGoodbye();


// open windows from minimized menu bar

var menuAbout = document.querySelector(".min-about")
var menuDocuments = document.querySelector(".min-documents")
var menuImages = document.querySelector(".min-images")

function openMinimized() {
    menuAbout.addEventListener("click", function(){
        windowAbout.classList.add("show-window");
        windowAbout.style.zIndex = 3;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowMood.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
      

    })
    menuDocuments.addEventListener("click", function(){
        windowDocuments.classList.add("show-window");
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 3;
        windowImages.style.zIndex = 2;
        windowTrash.style.zIndex = 2;
        windowMood.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
    
    
    })
    menuImages.addEventListener("click", function(){
        windowImages.classList.add("show-window");
        windowAbout.style.zIndex = 2;
        windowDocuments.style.zIndex = 2;
        windowImages.style.zIndex = 3;
        windowTrash.style.zIndex = 2;
        windowMood.style.zIndex = 2;
        windowEmails.style.zIndex = 2;
    
    })
}

openMinimized()

// toggle open windows closed if clicked again

function openAndCloseAbout() {
    windowAbout.classList.toggle("show-window");
    windowAbout.classList.toggle("hide-window");
   }
function openAndCloseDocuments() {
    
    windowDocuments.classList.toggle("show-window");
    windowDocuments.classList.toggle("hide-window");
   }
function openAndCloseImages() {
    windowImages.classList.toggle("show-window");
    windowImages.classList.toggle("hide-window");
   }

function minToggle() {
    menuAbout.addEventListener("click", openAndCloseAbout)
    menuDocuments.addEventListener("click", openAndCloseDocuments)
    menuImages.addEventListener("click", openAndCloseImages)
 }

minToggle()


// maximize background

var makeThisBig = document.querySelector("div.max-bg span.ok")
var closeMakeThisBig = document.querySelector("div.max-bg span.cancel")
var boxMakeThisBig = document.querySelector("div.max-bg")
var bodyBg = document.querySelector("body")

function makeBgBig() {
    makeThisBig.addEventListener("click", function(){
        bodyBg.style.backgroundImage = "url('images/anawang-default.gif')";
        bodyBg.style.backgroundSize = "cover";
        windowMood.classList.remove("show-window");
        windowMood.classList.add("hide-window");
    })
}

function closeBigBox() {
    closeMakeThisBig.addEventListener("click", function(){
        boxMakeThisBig.style.display = "none";
    })
}

makeBgBig();
closeBigBox();

// Help alert

var emailAna = document.querySelector("section.help span.ok")
var closeEmailAna = document.querySelector("section.help span.cancel")
var boxEmailAna = document.querySelector("section.help")

function letsEmailAna() {
    emailAna.addEventListener("click", function(){
        window.open('mailto:ana@anawang.com?subject=Hello');
    })
}

function closeEmailAnaBox() {
    closeEmailAna.addEventListener("click", function(){
        boxEmailAna.style.display = "none";
    })
}
letsEmailAna();
closeEmailAnaBox();

// Goodbye alert





// bring active window to front

function aboutToFront(){windowAbout.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "3";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "2";
  
})
}

function documentsToFront(){windowDocuments.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "3";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "2";
})
}

function imagesToFront(){windowImages.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "3";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "2";
})
}

function moodToFront(){windowMood.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "3";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "2";
})
}

function emailsToFront(){windowEmails.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "3";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "2";
})
}
function trashToFront(){windowTrash.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "3";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "2";
})
}
function goodbyeToFront(){boxGoodbye.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "3";
    boxEmailAna.style.zIndex = "2";
})
}
function helpToFront(){boxEmailAna.addEventListener("mousedown", function(){
    windowImages.style.zIndex = "2";
    windowDocuments.style.zIndex = "2";
    windowEmails.style.zIndex = "2";
    windowMood.style.zIndex = "2";
    windowTrash.style.zIndex = "2";
    windowAbout.style.zIndex = "2";
    boxGoodbye.style.zIndex = "2";
    boxEmailAna.style.zIndex = "3";
})
}

aboutToFront()
documentsToFront()
imagesToFront()
moodToFront()
emailsToFront()
trashToFront()
goodbyeToFront()
helpToFront()

//background start effect on hover

var startImage = document.querySelector(".logo img")
function bgStart() {
    startImage.addEventListener("mouseover", function(){
       
        bodyBg.style.backgroundImage = 'url(images/start.svg)';
        bodyBg.style.backgroundSize = 'contain';
        bodyBg.style.backgroundPosition = 'center';
    })
    startImage.addEventListener("mouseout", function(){
        
        bodyBg.style.backgroundImage = 'none';
    })
}

bgStart()

// background effect on images hover




// emails

var emailsChanel = document.querySelector(".chanel")

function chanelMood() {
    emailsChanel.addEventListener("mouseover", function(){
     windowMood.style.backgroundImage = 'url(https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fcfef5bb8-c435-4ace-bfc1-61b7c2f65952_599x800.jpeg)';
     windowMood.style.backgroundSize = 'cover';
  windowMood.style.backgroundPosition = 'center';
  
    })
    emailsChanel.addEventListener("mouseout", function(){
        
        windowMood.style.backgroundImage = '';
        windowMood.innerHTML = '';
    })
}

chanelMood()