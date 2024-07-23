var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function () {/* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })
    /* smooth scrolling for scroll down */
    $('.scroll-down').click(function () {
        $('body,html').animate({scrollTop: $(window).scrollTop() + 800}, 1000);
    })

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({target: '#navbar'})


    var sampler = $('.header .sampler');

    $('li', sampler).on('click', function () {
        if ($(this).hasClass('selected')) {
            return false;
        }

        sampler.find('li').removeClass('selected');

        var target = $(this).attr('data-target');

        var code = sampler.find('.target-' + target).html();


        sampler.find('pre code.display').fadeOut(function () {
            $(this).html(code);
            $(this).fadeIn();
        });

        $(this).addClass('selected');
    });
});

}
/*
     FILE ARCHIVED ON 05:37:01 Jun 10, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:56:01 Jul 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.668
  exclusion.robots: 0.05
  exclusion.robots.policy: 0.037
  esindex: 0.012
  cdx.remote: 33.409
  LoadShardBlock: 162.886 (3)
  PetaboxLoader3.datanode: 72.065 (4)
  load_resource: 110.429
  PetaboxLoader3.resolve: 68.767
*/