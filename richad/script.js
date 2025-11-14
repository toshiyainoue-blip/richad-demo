window.addEventListener("load", () => {

  const teaser = document.getElementById("teaser");

  // スワイプ誘導 → 5秒後に非表示
  setTimeout(() => {
    teaser.style.display = "none";
  }, 5000);

});
