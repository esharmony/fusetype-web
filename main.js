$(function () {
  $('#start').on('click', function (e) {
    e.preventDefault();
    $('.toFade').css('visibility', 'hidden');
    $('#heroImg').addClass('animate');
  });

  $('#packagesWrap').on('click', 'input', function (e) {
    e.preventDefault();

    const savedVal = $(this).val();
    
    $(this).select();

    /* Copy the text inside the text field */
    navigator.clipboard.writeText($(this).val());
    $(this).val('Copied!');
    $(this).css('color', 'green');
    setTimeout(() => {
      $(this).val(savedVal);
      $(this).css('color', '#333');
    }, 1500);
  });

  $('#start').on('click', function (event) {
    $('#heroImg').animate(
      {
        height: 0,
        width: 0,
        top: 150,
        left:
          parseInt($('#heroImg').css('left')) +
          parseInt($('#heroImg').width() / 2),
      },
      {
        step: function (now, fx) {
          $(this).css('transform', 'scale(' + now + ', ' + now + ')');
        },
        duration: 350,
        easing: 'linear',
        done: function () {
          $('h2').css('margin-bottom', '6px');
          $(this)
            .siblings()
            .not('#heroImg')
            .animate(
              { height: 0, padding: 0 },
              {
                duration: 150,
                easing: 'linear',
                done: function () {
                  $('#start').children('span').remove();
                  $('#start').animate(
                    {
                      width: '100%',
                      height: parseInt($('#heroLogo').height() - 25),
                    },
                    { duration: 150, done: function () {} }
                  );
                },
              }
            );
          $(this).animate(
            { top: 0 },
            {
              duration: 300,
              easing: 'linear',
              done: function () {
                $('#start').css('border-color', 'lightgrey');
                $('#startContent').fadeIn();
              },
            }
          );
        },
      }
    );
  });
});
