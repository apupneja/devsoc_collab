var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true
});

$(window).on('load' , function () {
  $("table").each(function () {
      var $this = $(this);
      var newrows = [];
      $this.find("tr").each(function () {
          var i = 0;
          $(this).find("td,th").each(function () {
              i++;
              if (newrows[i] === undefined) {
                  newrows[i] = $("<tr></tr>");
              }
              newrows[i].append($(this));
          });
      });
      $this.find("tr").remove();
      $.each(newrows, function () {
          $this.append(this);
      });
  });

  return false;
});