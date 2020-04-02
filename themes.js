// for each theme:
// 1. open mood and bring to front
// 2. change bg on mood window
// 3. when ok button on mood window is clicked, close window and change body backgroubd
// 4. change all colors

var bodyBg = document.querySelector("body")
var header = document.querySelector("header")
var desktopIconDocumentsText = document.querySelector(".desktop-icon:nth-child(1) p")
var desktopIconDocuments = document.querySelector(".desktop-icon:nth-child(1) .folder")
var desktopIconDocumentsTab = document.querySelector(".desktop-icon:nth-child(1) .folder-tab")
var desktopIconPicturesText = document.querySelector(".desktop-icon:nth-child(2) p")
var desktopIconPictures = document.querySelector(".desktop-icon:nth-child(2) .folder")
var desktopIconPicturesTab = document.querySelector(".desktop-icon:nth-child(2) .folder-tab")
var desktopIconEmailsText = document.querySelector(".desktop-icon:nth-child(3) p")
var desktopIconEmails = document.querySelector(".desktop-icon:nth-child(3) .folder")
var desktopIconEmailsTab = document.querySelector(".desktop-icon:nth-child(3) .folder-tab")
var desktopIconTrashText = document.querySelector(".desktop-icon:nth-child(4) p")
var startMenu = document.querySelector(".start")
var startSettings = document.querySelector(".start-settings-menu")
var startRecent = document.querySelector(".start-recent-menu")

var windowAbout = document.querySelector(".about")
var windowImages = document.querySelector(".images")
var windowTrash = document.querySelector(".trash")
var windowMood =  document.querySelector(".mood")
var windowDocuments = document.querySelector(".documents")
var windowEmails = document.querySelector(".emails")
var boxGoodbye = document.querySelector(".goodbye")
var boxEmailAna = document.querySelector("section.help")

var menuAbout = document.querySelector(".min-about")
var menuDocuments = document.querySelector(".min-documents")
var menuImages = document.querySelector(".min-images")




// THEME 1: world in bloom - march 31, 2020

// this is the darker color 
var worldInBloomColor = "#094932"
// this is the background color (lighter)
var worldInBloomColorAccent = "FCF1FF"
// this is the minimized window color
var worldInBloomColorHighlight = "#A3E2BA"

var menuWorldInBloom = document.querySelector(".world-in-bloom")

function worldInBloom() {
    menuWorldInBloom.addEventListener("mouseover", function(){
            windowMood.classList.add("show-window");
            windowMood.classList.remove("hide-window");
            windowMood.style.zIndex = 3;
            windowAbout.style.zIndex = 2;
            windowDocuments.style.zIndex = 2;
            windowImages.style.zIndex = 2;
            windowTrash.style.zIndex = 2;
            windowEmails.style.zIndex = 2;
            boxEmailAna.style.zIndex = 2;
            boxGoodbye.style.zIndex = 2;
            windowMood.style.backgroundImage = "url(images/anawang-default.gif)";
            bodyBg.style.backgroundColor = worldInBloomColorAccent;
          
            header.style.backgroundColor = worldInBloomColor;
            desktopIconDocumentsText.style.backgroundColor = worldInBloomColorAccent;
            desktopIconPicturesText.style.backgroundColor = worldInBloomColorAccent;
            desktopIconEmailsText.style.backgroundColor = worldInBloomColorAccent;
            desktopIconDocuments.style.backgroundColor = worldInBloomColor;
            desktopIconPictures.style.backgroundColor = worldInBloomColor;
            desktopIconEmails.style.backgroundColor = worldInBloomColor;
            desktopIconDocumentsTab.style.backgroundColor = worldInBloomColor;
            desktopIconPicturesTab.style.backgroundColor = worldInBloomColor;
            desktopIconEmailsTab.style.backgroundColor = worldInBloomColor;
            desktopIconTrashText.style.backgroundColor = worldInBloomColorAccent;
            startMenu.style.backgroundColor = worldInBloomColor;
            startSettings.style.backgroundColor = worldInBloomColor; 
            startRecent.style.backgroundColor = worldInBloomColor; 
            windowAbout.style.borderTop = `30px solid ${worldInBloomColor}`; 
            windowImages.style.borderTop = `30px solid ${worldInBloomColor}`; 
            windowTrash.style.borderTop = `30px solid ${worldInBloomColor}`; 
            windowMood.style.borderTop = `30px solid ${worldInBloomColor}`; 
            windowDocuments.style.borderTop = `30px solid ${worldInBloomColor}`; 
            windowEmails.style.borderTop = `30px solid ${worldInBloomColor}`; 
            boxGoodbye.style.borderTop = `30px solid ${worldInBloomColor}`; 
            boxEmailAna.style.borderTop = `30px solid ${worldInBloomColor}`; 

            menuAbout.style.backgroundColor = worldInBloomColorHighlight;
            menuDocuments.style.backgroundColor = worldInBloomColorHighlight;
            menuImages .style.backgroundColor = worldInBloomColorHighlight;

    })
}

worldInBloom()


