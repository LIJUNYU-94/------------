"use strict";
const students = [
  {},
  //空き要素
  {
    fullname: "秋山 陽菜乃",
    name: "秋山",
    image: "../../img/female1.png",
    serif: ["秋山 陽菜乃です！よろしくお願いします", "よろしくね"],
  },
  //   1
  {
    fullname: "新井 明里",
    name: "新井",
    image: "../../img/female2.png",
    serif: ["新井 明里です！よろしくお願いします", "よろしくね"],
  },
  //   2
  {
    fullname: "アンドロノフ コンスタンチン",
    name: "コスチャ",
    image: "../../img/male1.png",
    serif: [
      "アンドロノフ コンスタンチンです！ロシア出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   3
  {
    fullname: "李　康九",
    name: "李(イ)",
    image: "../../img/male3.png",
    serif: [
      "李　康九（イ　カング）です！韓国出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   4
  {
    fullname: "易　松静",
    name: "易",
    image: "../../img/female1.png",
    serif: [
      "易　松静（イ　ソウセイ）です！中国出身です！よろしくお願いします",
      "よろしくね",
      "ハハハハハハハハハハハハハハハハハハハハ（意味不明）",
    ],
  },
  //   5
  {
    fullname: "飯島 かほ",
    name: "飯島",
    image: "../../img/female2.png",
    serif: ["飯島 かほです！よろしくお願いします", "よろしくね"],
  },
  //   6
  {
    fullname: "石川 満貴",
    name: "石川",
    image: "../../img/male1.png",
    serif: [
      "石川 満貴です！よろしくお願いします",
      "よろしくね",
      "俺の髪型はどう？15000円かかったよ",
    ],
  },
  //   7
  {
    fullname: "猪野迫 日菜",
    name: "猪野迫",
    image: "../../img/female1.png",
    serif: ["猪野迫（いのさこ） 日菜です！よろしくお願いします", "よろしくね"],
  },
  //   8
  {
    fullname: "イリヤシェンコ ナタリア",
    name: "ナタリア",
    image: "../../img/female1.png",
    serif: [
      "イリヤシェンコ ナタリアです！ロシア出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   9
  {
    fullname: "宇治野 恵維",
    name: "宇治野",
    image: "../../img/female1.png",
    serif: ["宇治野 恵維です！よろしくお願いします", "よろしくね"],
  },
  //   10
  {
    fullname: "小澤 一輝",
    name: "小澤",
    image: "../../img/male1.png",
    serif: ["小澤 一輝です！よろしくお願いします", "よろしくね"],
  },
  //   11
  {
    fullname: "オスマン スアド",
    name: "スアド",
    image: "../../img/female1.png",
    serif: [
      "オスマン スアドです！ウクライナ出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   12
  {
    fullname: "加瀬 俊太",
    name: "加瀬",
    image: "../../img/male1.png",
    serif: ["加瀬 俊太です！よろしくお願いします", "よろしくね"],
  },
  //   13
  {
    fullname: "神田 祐歌",
    name: "神田",
    image: "../../img/female2.png",
    serif: [
      "神田 祐歌です！よろしくお願いします",
      "よろしくね",
      "色彩検定二級受けるのは私一人しかないか...",
    ],
  },
  //   14
  {
    fullname: "熊谷 琉二",
    name: "熊谷",
    image: "../../img/male1.png",
    serif: [
      "熊谷 琉二です！よろしくお願いします",
      "よろしくね",
      "留学生大好きですね",
    ],
  },
  //   15
  {
    fullname: "江 瀾",
    name: "江",
    image: "../../img/female1.png",
    serif: ["江 瀾（こう　らん）です！よろしくお願いします", "よろしくね"],
  },
  //   16
  {
    fullname: "斉藤 衣織",
    name: "斉藤",
    image: "../../img/male1.png",
    serif: ["斉藤 衣織です！よろしくお願いします", "よろしくね"],
  },
  //   17
  {
    fullname: "齊藤 音吹",
    name: "齊藤",
    image: "../../img/male2.png",
    serif: [
      "齊藤 音吹です！よろしくお願いします",
      "よろしくね",
      "css何点くらい取れると思う？俺３点だよ(満点50点)",
    ],
  },
  //   18
  {
    fullname: "齋藤 栞",
    name: "齋藤",
    image: "../../img/female1.png",
    serif: ["齋藤 栞です！よろしくお願いします", "よろしくね"],
  },
  //   19
  {
    fullname: "佐藤 優介",
    name: "佐藤",
    image: "../../img/male1.png",
    serif: ["佐藤 優介です！よろしくお願いします", "よろしくね"],
  },
  //   20
  {
    fullname: "",
    name: "",
    image: "",
    serif: "",
  },
  //21空き
  {
    fullname: "ジィン ウィン リー",
    name: "リー",
    image: "../../img/female1.png",
    serif: [
      "ジィン ウィン リーです！ミャンマー出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   22
  {
    fullname: "塩澤 桃佳",
    name: "塩澤",
    image: "../../img/female1.png",
    serif: ["塩澤 桃佳です！よろしくお願いします", "よろしくね"],
  },
  //   23
  {
    fullname: "清水 北斗",
    name: "清水",
    image: "../../img/male3.png",
    serif: ["清水 北斗です！よろしくお願いします", "よろしくね"],
  },
  //   24
  {
    fullname: "沈 霸",
    name: "沈",
    image: "../../img/male3.png",
    serif: [
      "沈 霸（シン　ハ）です！中国出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   25
  {
    fullname: "ス ヤダナー ライ",
    name: "スー",
    image: "../../img/female1.png",
    serif: [
      "ス ヤダナー ライです！ミャンマー出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   26
  {
    fullname: "徐 銀逵 ",
    name: "ソ",
    image: "../../img/female1.png",
    serif: [
      "徐 銀逵(ソ　ウンギュ)です！よろしくお願いします",
      "よろしくね",
      "生きろ。そなたは...ほら...あれだ！",
    ],
  },
  //   27
  {
    fullname: "田本 龍之助",
    name: "田本",
    image: "../../img/male1.png",
    serif: ["田本 龍之助です！よろしくお願いします", "よろしくね"],
  },
  //   28
  {
    fullname: "チョー ニャン リン",
    name: "リン",
    image: "../../img/male2.png",
    serif: [
      "チョー ニャン リンです！ミャンマー出身です！よろしくお願いします",
      "よろしくね",
      "お酒大好き！！！（仲間求む）",
      "眠い...帰りたい",
    ],
  },
  //   29
  {
    fullname: "陳 麗而",
    name: "陳",
    image: "../../img/female2.png",
    serif: [
      "陳 麗而（チン　リア）です！台湾出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   30
  {
    fullname: "中田 大暉",
    name: "中田",
    image: "../../img/male1.png",
    serif: ["中田 大暉です！よろしくお願いします", "よろしくね"],
  },
  //   31
  {
    fullname: "平井 晴奈",
    name: "平井",
    image: "../../img/female1.png",
    serif: ["平井 晴奈です！よろしくお願いします", "よろしくね"],
  },
  //   32
  {
    fullname: "藤田 香織",
    name: "藤田",
    image: "../../img/female1.png",
    serif: [
      "藤田 香織です！よろしくお願いします",
      "よろしくね",
      "adoの新曲聞いた？",
    ],
  },
  //   33
  {
    fullname: "前山 渉",
    name: "前山",
    image: "../../img/male2.png",
    serif: [
      "前山 渉です！よろしくお願いします",
      "よろしくね",
      "はい皆さんこんにちは～！",
      "今日は日専祭制作チームの打ち合わせがありそうね！",
    ],
  },
  //   34
  {
    fullname: "宮本 怜",
    name: "宮本",
    image: "../../img/male1.png",
    serif: [
      "宮本 怜です！よろしくお願いします",
      "よろしくね",
      "トイレは...悪くはないね、わかる？",
    ],
  },
  //   35
  {
    fullname: "村田 拓未",
    name: "村田",
    image: "../../img/male1.png",
    serif: ["村田 拓未です！よろしくお願いします", "よろしくね"],
  },
  //   36
  {
    fullname: "目黒 陽生",
    name: "目黒",
    image: "../../img/male3.png",
    serif: [
      "目黒 陽生です！よろしくお願いします",
      "よろしくね",
      "やぎせんもできなかったらどうしようもないじゃん",
    ],
  },
  //   37
  {
    fullname: "矢代 敦大",
    name: "矢代",
    image: "../../img/male1.png",
    serif: ["矢代 敦大です！よろしくお願いします", "よろしくね"],
  },
  //   38
  {
    fullname: "山田 羽根",
    name: "山田",
    image: "../../img/male3.png",
    serif: [
      "山田 羽根です！よろしくお願いします",
      "よろしくね",
      "今日もコロッケ６個食べた！うまかった！",
      "今日もコロッケ６個食べた！うまかった！",
      "今日もコロッケ６個食べた！うまかった！",
    ],
  },
  //   39
  {
    fullname: "籃 予彤",
    name: "籃",
    image: "../../img/female1.png",
    serif: [
      "籃 予彤（ラン　ユ　トン）です！台湾出身です！よろしくお願いします",
      "よろしくね",
    ],
  },
  //   40
  {
    fullname: "李　軍宇",
    name: "李(リ)",
    image: "../../img/male1.png",
    serif: [
      "李　軍宇（リ　グンウ）です！中国出身です！よろしくお願いします",
      "よろしくね",
      "今日は日専祭制作チームの打ち合わせがありそうね！",
    ],
  },
  //   41
  {
    fullname: "刘 佩玉",
    name: "劉",
    image: "../../img/male2.png",
    serif: [
      "刘 佩玉(リュウ　ハイギョク)です！中国出身です！よろしくお願いします",
      "よろしくね",
      "最近毎日(めいにち)一蘭食べている",
      "最近毎日(めいにち)一蘭食べている",
      "最近毎日(めいにち)一蘭食べている",
      "最近毎日(めいにち)一蘭食べている",
    ],
  },
  //   42
  {
    fullname: "高橋 快人",
    name: "高橋",
    image: "../../img/male3.png",
    serif: ["高橋 快人です！よろしくお願いします", "よろしくね"],
  },
  //   43
  // 最初のところが空いている、それで番号と人と対応できる
];
const nakayoshi = [];
//仲良しさんチームの組み合わせ
const whiteboard = [
  "../../img/whiteboard1.png",
  "../../img/whiteboard2.png",
  "../../img/whiteboard3.png",
  "../../img/whiteboard4.png",
  "../../img/whiteboard5.png",
  "../../img/whiteboard6.png",
  "../../img/whiteboard7.png",
];
//写真素材はまだ揃っていない-------------------------------------7.17
//whiteboardにあるランダム要素

//重複なしの数字生成する
window.onload = function loadIn() {
  //教室の各要素を読み込む
  const currentStudent = [...document.querySelectorAll(".life-mock-img")]; //ランダム学生を受け取る
  const currentName = [...document.querySelectorAll(".life-mock-name")]; //ランダム学生の背中の名前を受け取る
  const currentNum = document.querySelector(".life-mock-serif-num"); //出てきた学生の数
  const serifName = document.querySelector(".life-mock-serif-name"); //ランダム学生の台詞の名前fullname,押したら表示させるもの
  const serifText = document.querySelector(".life-mock-serif-text"); //ランダム学生の台詞
  //ランダム学生のルールを決める
  whiteboardRandom();
  document
    .querySelector(".life-mock-switch")
    .addEventListener("click", mockSwitch); //switch暗くなる機能を与える
  const currentRule = Math.floor(Math.random() * 10 + 1);
  // if (currentRule <= 12) {
  //今仲良しがないから全部randomにする、作れたから４/10にする------------------------------
  let randomUX = createNums(8);
  // } else {
  //   const randomUX = selectNakayoshi();
  // }
  randomUX = randomUX.filter((item) => item !== 21);
  currentNum.innerText = randomUX.length;
  console.log(randomUX);
  if (randomUX.includes(41) || randomUX.includes(18)) {
    document.querySelector(".life-mock-game-switch").style.display = "block";
  } else {
    document.querySelector(".life-mock-game-switch").style.display = "none";
  }
  //41,18番の人が居るならおみくじ引ける
  document
    .querySelector(".life-mock-game-switch-button")
    .addEventListener("click", function () {
      document.querySelector(".omikuji").style.display = "block ";
      document.querySelector(".life-mock-gamewindow-text").style.display =
        "none ";
      document.querySelector(".life-mock-game-switch-button").style.display =
        "none ";
    });
  //ボタン押したらボタンが消える、おみくじが出る
  let serifNow = [];
  for (let i = 0; i < randomUX.length; i++) {
    currentStudent[i].src = students[randomUX[i]].image;
    currentName[i].innerHTML = students[randomUX[i]].name;
    serifNow.push({
      fullname: students[randomUX[i]].fullname,
      serif: students[randomUX[i]].serif,
    });
    currentStudent[i].addEventListener("click", function () {
      serifName.innerText = serifNow[i].fullname;
      const x = Math.floor(Math.random() * serifNow[i].serif.length);
      serifText.innerText = serifNow[i].serif[x];
      document.querySelector(".life-mock-game-switch").style.display = "none";
    });
  }
  console.log(serifNow);
};
function createNums(y) {
  const randomArray = [];
  let randomU = [];
  for (let i = 0; randomU.length < y; i++) {
    const studentsR = Math.floor(Math.random() * 43 + 1);
    randomArray[i] = studentsR;
    randomU = Array.from(new Set(randomArray));
  }
  return randomU;
}
//完全にランダムで42人が出てくる
//21番が空いている
function selectNakayoshi() {}
//仲良しさんチームが出てくる
function mockSwitch() {
  const classRoom = document.querySelector(".life-mock-classroom");
  classRoom.style.opacity = "0.15";
  document.querySelector(".life-mock-serif-name").innerText = "みんな：";
  document.querySelector(".life-mock-serif-text").innerText = "えー？？？？";
  document.querySelector(".life-mock-game-switch").style.display = "none";
  setTimeout(() => {
    classRoom.style.opacity = "0.3";
  }, 2500);
  setTimeout(() => {
    classRoom.style.opacity = "1";

    document.querySelector(".life-mock-serif-name").innerText =
      document.querySelector(".name2").innerText;
    document.querySelector(".life-mock-serif-text").innerText =
      "人がいるときに教室の照明を消さないでください！先生に怒られちゃうよ！！！";
  }, 3500);
}
//教室にあるswitchを押したら5秒くらい暗くなる
function whiteboardRandom() {
  const whiteboardCurrent = Math.floor(Math.random() * whiteboard.length);
  document.querySelector(".life-mock-whiteboardimg").src =
    whiteboard[whiteboardCurrent];
}
//whiteboardの内容がランダムで変更する、教室に入る時に読み込む

function omikuji() {
  const img = document.querySelector(".omikuji-img");
  const resultText = document.querySelector(".omikuji-text");
  const num = Math.floor(Math.random() * 100 + 1);
  const btn = document.querySelector(".omikuji-btn");
  resultText.style.top = "230px";
  if (num <= 10) {
    img.src = "../../img/omikuji2.png";
    resultText.innerText = "今日の運勢は大吉です！";
  } else if (num <= 30) {
    img.src = "../../img/omikuji3.png";
    resultText.innerText = "今日の運勢は中吉です！";
  } else if (num <= 50) {
    img.src = "../../img/omikuji4.png";
    resultText.innerText = "今日の運勢は末吉です！";
  } else if (num <= 80) {
    img.src = "../../img/omikuji5.png";
    resultText.innerText = "今日の運勢は小吉です！";
  } else if (num <= 88) {
    img.src = "../../img/omikuji6.png";
    resultText.innerText = "今日の運勢は凶です！";
  } else {
    img.src = "../../img/omikuji1.png";
    resultText.innerText = "今日の運勢はいぶきです！いぶきを押して見て！";
    img.addEventListener("click", function () {
      document.querySelector(".omikuji").style.display = "none";
      document.querySelector(".omikuji-video").style.display = "block";
    });
  }
  btn.style.display = "none";
}
