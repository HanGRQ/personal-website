(function($) {

  "use strict";

  $(document).ready(function() {
    
    // masonoary (瀑布流布局)
    initIsotope();

    // lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fitImagesInViewport': true
    });

    // Swiper 实例化
    var testimonialSwiper = new Swiper(".testimonial-swiper", {
      spaceBetween: 20,
      pagination: {
          el: ".testimonial-swiper-pagination",
          clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        }
      },
    });
  }); // End of a document ready

  // init Isotope
  var initIsotope = function() {
    // 确保每个grid都初始化Isotope
    $('.grid').each(function(){
      var $grid = $(this).isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });

      // 过滤按钮点击事件绑定
      $('.button-group').on('click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      // 改变过滤按钮的选中状态
      $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
    });
  }

})(jQuery);
