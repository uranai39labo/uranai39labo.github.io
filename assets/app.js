// タイムスタンプで埋め込み動画を移動／復習チェックをこの端末に保存
(function () {
  var player = document.getElementById('player');
  if (player) {
    var base = player.src.split('?')[0];
    document.querySelectorAll('.ts a[data-sec]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        player.src = base + '?rel=0&autoplay=1&start=' + a.dataset.sec;
        player.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  document.querySelectorAll('.check input[data-key]').forEach(function (box) {
    var key = 'nk-check-' + box.dataset.key;
    try { box.checked = localStorage.getItem(key) === '1'; } catch (e) {}
    box.addEventListener('change', function () {
      try { localStorage.setItem(key, box.checked ? '1' : '0'); } catch (e) {}
    });
  });

})();
