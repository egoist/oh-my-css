$('.oh-main').anchorific({
    navigation: '.anchorific', // position of navigation
    speed: 200, // speed of sliding back to top
    anchorClass: 'anchor', // class of anchor links
    anchorText: '', // prepended or appended to anchor headings
    top: '.top', // back to top button or link class
    spy: true, // scroll spy
    position: 'append', // position of anchor text
    spyOffset: 0 // specify heading offset for spy scrolling
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop && st > 40){
       $('.anchorific').css('top','0');
   } else {
      //up
      if(st < 20){
        $('.anchorific').css('top','auto');
        $('.anchorific li').removeClass('active');
      }
   }
   lastScrollTop = st;
});