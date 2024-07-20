"use strict";
////最初に各要素を取り出して定義する
//流れ的に変わっていく部分
const whiteboardText = document.querySelector(".room771-whiteboard-text"); //ホワイトボードの解説
const charText = document.querySelector(".room-char-text"); //下の解説文

//////footerのアイコンを押したら画面に移る
//headerの切り替え
const header = document.querySelector(".room771-screen-header-name");
const headerIcon = document.querySelector(".room771-screen-header-icon");

//headerの切り替え配列
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

const footer = [...document.querySelectorAll(".room771-screen-footer-icon")]; //footerのiconを配列として取り出す
const mockFolder = document.querySelector(".mock-folder");
const mockVs = document.querySelector(".mock-vs");
const mockBrowser = document.querySelector(".mock-browser");
//三つの画面を取り出す

const mock = [mockFolder, mockVs, mockBrowser];
const passTitle = [...document.querySelectorAll(".room771-screen-pass-title")];
const passText = [...document.querySelectorAll(".room771-screen-pass-now")];
console.log(passText);
///footerのiconの切り替え
function footerSwitch(x) {
  for (let i = 0; i < 3; i++) {
    if (i === x) {
      footer[i].classList.add("open");
      header.innerHTML = headerArray[i].name;
      headerIcon.src = headerArray[i].icon;
      mock[i].style.display = "flex";
      passTitle[i].innerText = header.innerText;
    } else {
      mock[i].style.display = "none";
      console.log((mock[i].style.display = "none"));
      footer[i].classList.remove("open");
    }
  }
  if (x === 2) {
    runCode();
    navSwitch(6);
  }
  if (x === 1) {
    navSwitch(2);
  }
  if (x === 0) {
    navSwitch(0);
  }
}
footer.forEach((x, y) => {
  x.addEventListener("click", () => {
    footerSwitch(y);
  });
});
//////navを押したらそれぞれの部分に移る

const nav = [...document.querySelectorAll(".room771-screen-nav-text")]; //7つのnavを一緒に取り出す
//mock-image-switch 0 1   mock-vs-input 2 3 4 mock-chrome 5 6

const navFolder = [...document.querySelectorAll(".mock-image-switch")];
const navVS = [...document.querySelectorAll(".mock-vs-input")];
const navChrome = [...document.querySelectorAll(".mock-chrome")];
let navAll = navFolder.concat(navVS, navChrome);
console.log(navFolder);
console.log(navVS);
console.log(navChrome);
console.log(navAll);
function navSwitch(x) {
  for (let i = 0; i < nav.length; i++) {
    if (i === x) {
      nav[i].classList.add("open");
      navAll[i].classList.add("open");
      if (x < 2) {
        passText[0].innerText = nav[i].innerText;
      } else if (x < 5) {
        passText[1].innerText = nav[i].innerText;
      } else {
        passText[2].innerText = nav[i].innerText;
      }
    } else {
      nav[i].classList.remove("open");
      navAll[i].classList.remove("open");
    }
  }
}
nav.forEach((x, y) => {
  x.addEventListener("click", () => {
    navSwitch(y);
  });
});
////imgを用意する
const mockKeyMb = [
  "../../img/whiteboard2.png",
  "../../img/whiteboard2.png",
  "../../img/whiteboard2.png",
];
const mockImageMb = [
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
  "../../img/Rectangle56ibuki.png",
];
const mockKeyHobby = [
  "../../img/whiteboard5.png",
  "../../img/whiteboard5.png",
  "../../img/whiteboard5.png",
];
const mockImageHobby = [
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
  "../../img/pptfirstsite.png",
];
function runCode() {
  const htmlCode = document.getElementById("mock-html").value;
  const cssCode = document.getElementById("mock-css").value;
  const jsCode = document.getElementById("mock-js").value;
  const iframe = document.getElementById("output");
  iframe.srcdoc = `
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}<\/script>
  `;
}
const diaBro = "ブラウザ";
const diaFol = "フォルダ";

////ページに入ってからの初期化
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mockclass").style.height = "100vh";
  let nowPhase = "";
  whiteboardText.innerText = "ようこそ実技体験！";
  const nextButton = document.querySelector("#nextButton");
  const skipButton = document.querySelector("#skipButton");
  const dialogues = [
    "こんにちは！！本日の実技体験の担当齊藤音吹です！よろしくお願いします！いぶきって呼んでください！",
    "それぞれの役割はまだ覚えてますか？",
    "本日は、まずweb制作の基html,css,JavaScriptを簡単に理解できるように解説したいと思います",
    "デザインに関するは、写真素材を用意しておりますが、",
    "自分が作った画像とか、オンラインの写真とか、urlを貼り付ければ使用可能です！",
    "流れについては、二つのタイトルを選べます！まずは、企画体験に関わる　まいばすけっとおすすめ商品",
    "企画はまだ体験していなかったら隣に先に行った方がいいかもしれないね！",
    "そして、＜私の趣味＞も選べます！",
    "体験が始まる前に！一番大事なものかもしれませんが、サイトのレイアウトについて簡単に説明します！",
    "サイトのレイアウトとは、デザインや配置の仕方のことです",
    "ユーザーにわかりやすく情報を伝えるため、見た目がよいレイアウトが大事です！",
    "本日用意された体験用サイトは少しシンプルですが",
    "全部の流れが終わったら、自由にコードを見ることが可能です！もちろん、自由にサイトを編集するも可能です！",
    "最初に解説を聞きながら指示を応じてコードを入れて頂いて",
    "一つ目のシンプルなサイトを作ってみましょう！",
    "それでは！やりたいタイトル、そしてレイアウトを選んでください！",
  ];

  const dialoguesIntro = [
    "これは、最強のコードツール！visual studio code！です！",
    "ここは模擬ツールだから、多分そんなに強くないかも（笑）",
    "しかもこの模擬ツールもvisual studio codeでhtml,css,jsを使って作ったよ！",
    "やっぱり最強でしょう！",
    "今の画面は、htmlの編集画面です！",
    "下にあるアイコンを押したら、画面の切り替えができます！",
    `${diaFol}には、用意された画像を選べます！`,
    "もちろん、urlを貼り付けることでオンライン素材も使えますよ",
    `${diaBro}のchromeには、vsにあるコードをそのままで反映する！`,
    "コーディングをしながら、実際の効果もそこで確認しましょう！",
    "それでは、ちょっと２秒くらい待ってください！今日の体験用サンプルを書きます！",
  ];
  const dialoguesHtml = [
    `できた！早いでしょう？俺の後輩になったらすぐにこのスピードでできるぞ！（笑）`,
    `htmlは骨組みです！ここでたくさん書いてあるけど、${diaBro}に確認してみたら--`,
    "多分何もない(笑)、copyrightの小文字しかない",
    "今からここで、それぞれのコンテンツを入れましょう！",
    "教室のホワイトボードに書き方もあるので、参考してください！",
    "まずは！h1タグの中で、タイトルを入れましょう！",
    "早い！次は画像を入れましょう！このサンプルサイトには画像４枚が必要です！",
    "タイトルの下にあるキービジュアルの大きめの画像、下にそれぞれのパーツも１枚ずつが必要です",
    `じゃ、${diaFol}には、${nowPhase}に関する自分が好きな写真を選んでください！`,
    `もう入れましたか？`,
    `それでは、三つの画像に対して、そのパーツの見出しを入れましょう！`,
    `h2タグが三つあるから、全部入れましたか？`,
    `よくできたね！次は、三つのpタグの中に、自分が考えた説明文などを入れましょう！`,
    `それで全部入れましたね！じゃどうなったのか${diaBro}に見て見ましょう！`,
    `文字だけ散乱しているんでしょう？cssを使えば！見た目が整えるよ！`,
    `今回も2秒くらい待っててね！`,
  ];
  const dialoguesCssJs = [
    `お待たせ！もうできましたよ！`,
    `${diaBro}に見て見ましょう！`,
    `先選んだレイアウトのように反映しているんでしょう！`,
    `それは！飾りの機能です！`,
    `ちょっと編集してみましょう！`,
    `まず、上にあるcssボタンを押して、コードの様子を見て見ましょう`,
    `注釈の部分の説明文は多分結構詳しいと思います、一生懸命書きましたよね`,
    `何かわからなかったら、ぜひ気軽に聞い...あ--ここダメか、じゃぜひ来校して気軽に聞いてください！（笑）`,
    `今日の体験は、まずh1の背景色を変えて見ましょう！`,
    `bodyのところに見て見ましょう、background-color: bisqueのような設定されたから、今の背景はbisque色です！`,
    `もちろんそこ変えても大丈夫です！（笑）`,
    `同じような書き方で、h1の{}にbackground-color:を追加しましょう！後ろの色ならなんでもいい、英語まちがえなかったら``マックとスペリングも注意しないとね、間違えたら反応してくれないよ`,
    `じゃ次は下の文字を片付けましょう、真ん中に行ったら方がいいでしょう？`,
    `footer部分を見て見ましょう！その中にpタグ一個あるよ,htmlに確認してみてください`,
    `この文字列はpタグの中にあるんでしょう！footer pの書き方は、footerの中のp要素を調整する意味です！`,
    `その中にpタグの中にある文字を真ん中にしましょう、ホワイトボードに書き方あるよ`,
    `いかかでしょうか？いろんなプロパティを使って、いろんな効果を作れるよ`,
    `ちなみにこの模擬教室の見た目もcssで作りました`,
    `凄いでしょう！入学したら短い期間でここまで作れるよ`,
    `最後はJavaScript、サイトの動く機能です！簡単に体験してみましょう！``簡単に言えば、何をしたら何を起こす、今の続きボタン押したら次の台詞に行くような感じです`,
    `もちろんここでの全部の操作要素がJSで作られた！苦戦してたね！`,
    `JavaScriptで、今回は簡単にボタン機能付けましょう！`,
    `今すでに書かれてるコードの機能は、htmlの中にh1を取り出した、そしてここで使う`,
    `h1を押したら、、何かの`,
  ];

  const charPpt = document.querySelector(".room771-ppt-img");
  const ppt = [
    "../../img/Rectangle56ibuki.png",
    "../../img/htmlcssjsall.png",
    "../../img/shikumi.png",
    "../../img/honwoyomu_doubutu_kuma.png",
    "../../img/httpwww.png",
    "../../img/mbppt.png",
    "../../img/772ppt.png",
    "../../img/ppthobby.png",
    "../../img/layout.png",
    "../../img/layout.png",
    "../../img/layout.png",
    "../../img/layout.png",
    "../../img/pptdekiru.png",
    "../../img/pptdekiru.png",
    "../../img/pptfirstsite.png",
    "../../img/pptfirstsite.png",
  ];
  let count = 0;
  let currentDialogue = 0;

  function displayText() {
    if (count < dialogues[currentDialogue].length) {
      charText.innerText += dialogues[currentDialogue].charAt(count);
      charPpt.src = ppt[currentDialogue];
      count++;
    } else {
      clearInterval(interval);
      nextButton.style.display = "block";
      skipButton.style.display = "block";
    }
    if (currentDialogue == dialogues.length - 1) {
      skipButton.style.display = "none";
    }
  }
  let interval = setInterval(displayText, 30);

  function startDialogue() {
    charText.innerText = ""; // 前の台詞をクリア
    count = 0; // インデックスをリセット
    nextButton.style.display = "none"; // ボタンを非表示
    skipButton.style.display = "none"; // ボタンを非表示

    interval = setInterval(displayText, 30); //
  }
  nextButton.addEventListener("click", function () {
    currentDialogue++;
    if (currentDialogue < dialogues.length) {
      startDialogue();
    } else {
      charText.innerText =
        "やりたいタイトル、お好きなレイアウトを選んでください！";
      whiteboardText.innerText = "タイトル選択";
      nextButton.style.display = "none"; // ボタンを隠す
      skipButton.style.display = "none"; // ボタンを非表示
      charPpt.style.display = "none";
      choise();
    }
  });
  skipButton.addEventListener("click", function () {
    currentDialogue = dialogues.length - 1;
    startDialogue();
  });
  function choise() {
    const pptFrame = document.querySelector(".room771-ppt");
    pptFrame.style.backgroundImage = 'url("../../img/pptback.png")';
    const selectArea = document.createElement("div");
    let selecta = document.createElement("p");
    selecta.innerText = "私の趣味";
    let selectb = document.createElement("p");
    selectb.innerText = "まいばすけっとおすすめ商品";
    pptFrame.appendChild(selectArea);
    selectArea.classList.add("selectarea");
    selectArea.appendChild(selecta);
    selectArea.appendChild(selectb);
    const mockKey = [...document.querySelectorAll(".mock-key img")];
    const mockImage = [...document.querySelectorAll(".mock-image img")];
    const chromeIntro = [...document.querySelectorAll(".chrome-intro-text")];
    selecta.addEventListener("click", function () {
      for (let i = 0; i < mockKey.length; i++) {
        mockKey[i].src = mockKeyHobby[i];
      }
      for (let i = 0; i < mockImage.length; i++) {
        mockImage[i].src = mockImageHobby[i];
      }
      nowPhase = "私の趣味";
      whiteboardText.innerText = "レイアウト選択";
      selectArea.removeChild(selecta);
      selectArea.removeChild(selectb);
      const selectLayouta = document.createElement("img");
      selectLayouta.src = "../../img/layout1.png";
      const selectLayoutb = document.createElement("img");
      selectLayoutb.src = "../../img/layout2.png";

      selectArea.appendChild(selectLayouta);
      selectArea.appendChild(selectLayoutb);

      chromeIntro[0].classList.add("open");
      selectLayouta.addEventListener("click", function () {
        layoutElected(1);
      });
      selectLayoutb.addEventListener("click", function () {
        layoutElected(2);
      });
    });
    selectb.addEventListener("click", function () {
      for (let i = 0; i < mockKey.length; i++) {
        mockKey[i].src = mockKeyMb[i];
      }
      for (let i = 0; i < mockImage.length; i++) {
        mockImage[i].src = mockImageMb[i];
      }
      nowPhase = "まいばすけっとおすすめ商品";
      whiteboardText.innerText = "レイアウト選択";
      selectArea.removeChild(selecta);
      selectArea.removeChild(selectb);
      const selectLayouta = document.createElement("img");
      selectLayouta.src = "../../img/layout1.png";
      const selectLayoutb = document.createElement("img");
      selectLayoutb.src = "../../img/layout2.png";

      selectArea.appendChild(selectLayouta);
      selectArea.appendChild(selectLayoutb);

      chromeIntro[1].classList.add("open");
      selectLayouta.addEventListener("click", function () {
        layoutElected(1);
      });
      selectLayoutb.addEventListener("click", function () {
        layoutElected(2);
      });
    });
  }

  function layoutElected() {
    //1/2どちかの生成サイトを書き込み、終わったらscreenを900pxにする、
    //screenが出る、pptが消える
    document.querySelector(".mockclass").style.height = "900px";
    whiteboardText.innerText = `本日のタイトル：${nowPhase}`;
    document.querySelector(".room771-ppt").style.display = "none";
    document.querySelector(".room771-screen").style.display = "flex";
    footerSwitch(1);
    navSwitch(2);
  }
});

//screenが出てきたら
// document.querySelector(".mockclass").style.height = "900px";
