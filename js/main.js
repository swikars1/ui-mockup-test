  window.onload = function () {
    lax.init()
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    lax.addElements('.circle-container-2', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY"],
          [-550, 0],
        ],
        opacity: [
          ["elInY", "elCenterY"],
          [0, 1]
        ]
      }
    })
    lax.addElements('.circle-container-3', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [-1100, 0, 0],
        ],
        opacity: [
          ["elInY", "elCenterY"],
          [0, 1]
        ]
      }
    })
    $('.faux-select').click(function(){
      let counter = 0
      $('.start-form').find('.faux-select').each(function (){
        if($(this).children().first().children().children('span').text() !== 'Select one') counter++
      })
      if(Number(counter) === 10) 
        $('.submit-form-btn').css({
          'pointer-events': 'unset',
          'cursor': 'pointer',
          'background': '#0E8E00'
        })
      $('.percent-val').text(`${Number(counter)*10}%`)
      $(this).toggleClass('open');
      $('.options', this).toggleClass('open');
      $('.progress-unit').css({
        width: `calc(${Number(counter)*10}% - 2px)`,
        border: Number(counter) > 0 ? '1px solid white' : 'none'
      })
    });
    
    $('.options li').click(function(){
      var selection = $(this).text();
      $(this).parent().parent().children().first().text(selection);
    });
    $('.submit-form-btn').click(function() {
      $('.login-modal').css("display", "block")
      $('.page-wrapper').css({
        'pointer-events': 'none',
        'user-select': 'none',
        'filter': 'blur(7px)'
      })
      $('html').css({
        'overflow': 'hidden'
      })
    })
    $('.close-button').click(function() {
      $('.login-modal').css("display", "none")
      $('.page-wrapper').css({
        'pointer-events': 'unset',
        'user-select': 'unset',
        'filter': 'unset'
      })
      $('html').css({
        'overflow': 'auto'
      })
    })




//
//
//click outside

    window.addEventListener('click', function(e){   
      if (document.querySelector('.options > *').contains(e.target)){
        //nothing
      } 
      else
      {
        if (e.target.nodeName !== 'LI') {
          $('.faux-select').removeClass('open');
          $('.options').removeClass('open');
        }
      }
    });

  }