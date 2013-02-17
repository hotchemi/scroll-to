(function($) {
  test('デフォルト初期表示の位置確認', function() {
    expect(5);
    var $element = $('.scrollTo');
    deepEqual($element.css('bottom'), '10px', 'bottom is 10px.');
    deepEqual($element.css('right'), '10px', 'right is 10px.');
    deepEqual($element.css('cursor'), 'pointer', 'cursor is pointer.');
    deepEqual($element.css('position'), 'fixed', 'position is fixed.');
    deepEqual($element.css('display'), 'none', 'display is none.');
  });

  test('最下部までスクロールした時の表示確認', function() {
    var $element = $('.scrollTo');
    window.scroll(0, 1200);
    stop();
    setTimeout(function () {
      expect(1);
      deepEqual($element.css('display'), 'block', 'display is block now!');
      start();
      window.scroll(0, 0);
    }, 500);
  });

  test('Click時にTopまでScrollしている', function() {
    var $element = $('.scrollTo');
    window.scroll(0, 1200);
    stop();
    setTimeout(function () {
      expect(1);
      $element.click();
      deepEqual(document.documentElement.scrollTop , 0, 'scrollTop is 0.');
      start();
    }, 500);
  });
}(jQuery));
