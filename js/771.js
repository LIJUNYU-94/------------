"use strict";
////最初に各要素を取り出して定義する
//流れ的に変わっていく部分
const whiteboardText = document.querySelector(".room771-whiteboard-text"); //ホワイトボードの解説
const charText = document.querySelector(".room-char-text"); //下の解説文

//screenの切り替え
const header = document.querySelector(".room771-screen-header-name");
const headerIcon = document.querySelector(".room771-screen-header-icon");

//headerの切り替え
const headerArray = [
  {
    name: "写真素材",
    icon: "../../img/logo-folder.png",
  },
  {
    name: "visual studio code",
    icon: "../../img/logos_visual-studio-codevs.png",
  },
  {
    name: "Google chrome",
    icon: "../../img/logo-chrome.png",
  },
];

//footerの切り替え
const footer = [...document.querySelectorAll(".room771-screen-footer-icon")]; //footerのiconを配列として取り出す
//passの切り替え定義の必要がない、常に変化しに行く
const mockFolder = document.querySelector(".mock-folder");
const mockVs = document.querySelector(".mock-vs");
const mockBrowser = document.querySelector(".mock-browser");
//三つの画面を取り出す

const mock = [mockFolder, mockVs, mockBrowser];
const passTitle = [...document.querySelectorAll(".room771-screen-pass-title")];
const passText = [...document.querySelectorAll(".room771-screen-pass-now")];
///footerのiconの切り替え
function footerSwitch(x) {
  for (let i = 0; i < 3; i++) {
    if (i === x) {
      footer[i].classList.add("open");
      header.innerHTML = headerArray[i].name;
      headerIcon.src = headerArray[i].icon;
      mock[i].style.display = "flex";
      passTitle[i].innerText = header.innerText;
      // passText[i].innerText = document.querySelector(
      //   ".room771-screen-nav-text.open"
      // ).innerText;
    } else {
      mock[i].style.display = "none";
      console.log((mock[i].style.display = "none"));
      footer[i].classList.remove("open");
    }
  }
}
footerSwitch(1);

////ページに入ってからの初期化
