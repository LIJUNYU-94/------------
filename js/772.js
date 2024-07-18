"use strict";
//下の部分の背景
document
  .querySelector(".room772-ban")
  .animate(
    [{ backgroundPosition: "0 0 " }, { backgroundPosition: "-100% 0" }],
    {
      duration: 14000,
      iterations: Infinity,
    }
  );
