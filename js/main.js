// 鹿云先生设计 · 首屏
// 兼容旧浏览器：以 100dvh 优先，兜底使用窗口高度。
(function () {
  var hero = document.getElementById('hero');
  if (!hero) return;
  var setHeight = function () {
    hero.style.minHeight = '';
    if (window.visualViewport && visualViewport.height) {
      hero.style.height = visualViewport.height + 'px';
    }
  };
  setHeight();
  window.addEventListener('resize', setHeight);
})();
