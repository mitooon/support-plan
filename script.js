
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const backToTop = document.getElementById("backToTop");

  // スマホメニューの開閉
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "メニューを閉じる" : "メニューを開く"
      );
    });

    // メニュー内のリンクを押したら閉じる
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "メニューを開く");
      });
    });

    // PC表示に切り替えた際もメニュー状態をリセット
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "メニューを開く");
      }
    });
  }

  // スクロールに応じてページ上部ボタンを表示
  function updateBackToTop() {
    if (!backToTop) return;

    backToTop.classList.toggle(
      "visible",
      window.scrollY > 400
    );
  }

  window.addEventListener("scroll", updateBackToTop, {
    passive: true
  });

  updateBackToTop();

  // ページの先頭へ戻る
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
