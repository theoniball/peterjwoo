var h = Snap("#home"),
    logo = h.path("M50,89 A45,45 0 1,1 110,89 q-3 2 -5 -5 l -5 -15 q-2.5 -3 -5 0 l-5 15 c -2 9 -5 5 -5 0 l -3 -20 q-2 -5 5 -5 c35 -5 15 -30 -20 -30 q-5 0 -5 5 l -2 52 c 0 6 -5 8 -11 2 Z")
    b = Snap("#blog"),
    bhighlight = b.rect(0,0,40,20,5,5),
    p = Snap("#portfolio"),
    phighlight = p.rect(0,0,65,20,5,5),
    a = Snap("#about"),
    ahighlight = a.rect(0,0,65,20,5,5),
    c = Snap("#collections"),
    chighlight = c.rect(0,0,70,20,5,5),
    l = Snap("#login"),
    lhighlight = l.rect(0,0,40,20,5,5);
    //nav = s.group(sec3, sec2, sec1, sec0);

logo.attr({
  id: 'logo',
  class: 'animatein',
  //fill: "#fff",
});
logo.transform('t-17, 0');
bhighlight.attr({
  class: 'highlight',
});
bhighlight.transform('t-8,-17');
phighlight.attr({
  class: 'highlight',
});
phighlight.transform('t-7,-17');
ahighlight.attr({
  class: 'highlight',
});
ahighlight.transform('t-5,-17');
chighlight.attr({
  class: 'highlight',
});
chighlight.transform('t-5,-17');
lhighlight.attr({
  class: 'highlight',
});
lhighlight.transform('t-6,-17');


/*b.hover(hoverin, hoverout);

function hoverin(){
  $(this).rect.animate({opacity:1});
}
function hoverout(){
  $(this).rect.animate({opacity:0});
}*/

//sec0.hover(hovExtend(0), hovRetract(0));
/*$(document).ready(function(){

  sec1.hover(testExtend,testRetract);
  sec2.hover(testExtend,testRetract);
  sec3.hover(testExtend,testRetract);
  sec0.hover(testExtend,testRetract);

  function testExtend(){
    switch(this.attr('id')){
      case 'sec1':
        sec1.animate({width: 225},200);
        sec2.animate({width: 275},200);
        sec3.animate({width: 325},200);
        break;
      case 'sec2':
        sec2.animate({width: 275},200);
        sec3.animate({width: 325},200);
        break;
      case 'sec3':
        sec3.animate({width: 325},200);
        break;
      case 'sec0':
        pulseLogo();
        break;
    }
  }
  function testRetract(sectionID){
    switch(this.attr('id')){
      case 'sec1':
        sec1.animate({width: 175},200);
        sec2.animate({width: 225},200);
        sec3.animate({width: 275},200);
        break;
      case 'sec2':
        sec2.animate({width: 225},200);
        sec3.animate({width: 275},200);
        break;
      case 'sec3':
        sec3.animate({width: 275},200);
        break;
      case 'sec0':
        logo.stop().attr({opacity:1});
        break;
    }
  }

  function pulseLogo(){
    logo.animate({opacity: .50},700,function(){
      logo.attr({opacity: 1});
      pulseLogo();
    });
  }
});
*/
