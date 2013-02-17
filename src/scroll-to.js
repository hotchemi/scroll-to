/*
 * scroll-to 1.0.0.
 *
 * Copyright (C) 2013 Shintaro Katafuchi.
 * All Rights Reserved.
 * Licensed under the GPL license.
 */
;(function($) {
  $.fn.scrollTo = function(options) {
    var setting = {
        'speed': 500,
        'topDistance': 30,
        'inSpeed': 200,
        'outSpeed': 200,
        'direction': 'top',
        'location': 'right-bottom'
      },
      css = {
        'cursor': 'pointer',
        'position': 'fixed',
        'display': 'none'
      },
      element = this,
      $window = $(window),
      container = $('body, html'),
      animation,
      topDistance,
      speed,
      direction,
      inSpeed,
      outSpeed;

    options && $.extend(setting, options);
    animation = setting.animation;
    topDistance = setting.topDistance;
    inSpeed = setting.inSpeed;
    outSpeed = setting.outSpeed;
    speed = setting.speed;
    direction = setting.direction;

    switch (setting.location) {
      case 'right-top':
        css.top = '10px';
        css.right = '10px';
        break;
      case 'right-middle':
        css.top = '50%';
        css.right = '10px';
        break;
      case 'right-bottom':
        css.bottom = '10px';
        css.right = '10px';
        break;
      case 'left-top':
        css.top = '10px';
        css.left = '10px';
        break;
      case 'left-middle':
        css.top = '50%';
        css.left = '10px';
        break;
      case 'left-bottom':
        css.bottom = '10px';
        css.left = '10px';
        break;
      case 'center-top':
        css.top = '10px';
        css.right = '50%';
        break;
      case 'center-bottom':
        css.bottom = '10px';
        css.right = '50%';
        break;
    }
    element.css(css);

    $window.scroll(function() {
      if (animation === "fade") {
        $window.scrollTop() > topDistance ? element.fadeIn(inSpeed) : element.fadeOut(outSpeed);
      } else if (animation === "slide") {
        $window.scrollTop() > topDistance ? element.slideDown(inSpeed) : element.slideUp(outSpeed);
      } else {
        $window.scrollTop() > topDistance ? element.show(0) : element.hide(0);
      }
    });

    element.click(function() {
      if(!direction || direction === 'top') {
        container.animate({scrollTop: 0}, speed);
      } else if (direction === 'bottom') {
        container.animate({scrollTop: $window.height()}, speed);
      }
      return false;
    });

    return this;
  };
})(jQuery);