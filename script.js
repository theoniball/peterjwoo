var s = Snap(500, 500),
    sec3 = s.rect(0,0,300,100),
    sec2 = s.rect(0,0,250,100),
    sec1 = s.rect(0,0,200,100),
    sec0 = s.rect(0,0,150,100);
    //nav = s.group(sec3, sec2, sec1, sec0);

sec3.attr({
  id : 'sec3',
  fill : '#bfbfbf',
  data-orig-w : 300,
});
sec2.attr({
  id : 'sec2',
  fill : '#808080',
  data-orig-w : 250,
});
sec1.attr({
  id : 'sec1',
  fill : '#404040',
  data-orig-w : 200,
});
sec0.attr({
  id : 'sec0',
  fill : '#000000',
});
//sec0.hover(hovExtend(0), hovRetract(0));
$(document).ready(function(){

  sec1.hover(testExtend,testRetract);
  sec2.hover(testExtend,testRetract);
  sec3.hover(testExtend,testRetract);

  function testExtend(){
    switch(this.attr('id')){
      case 'sec1':
        sec1.animate({width: (parseInt(sec1.attr('width')) + 50)},200);
        sec2.animate({width: (parseInt(sec2.attr('width')) + 50)},200);
        sec3.animate({width: (parseInt(sec3.attr('width')) + 50)},200);
        break;
      case 'sec2':
        sec2.animate({width: (parseInt(sec2.attr('width')) + 50)},200);
        sec3.animate({width: (parseInt(sec3.attr('width')) + 50)},200);
        break;
      case 'sec3':
        sec3.animate({width: (parseInt(sec3.attr('width')) + 50)},200);
        break;
    }
  }
  function testRetract(sectionID){
    switch(this.attr('id')){
      case 'sec1':
        sec1.animate({width: parseInt(sec1.attr('data-orig-w'))},200);
        sec2.animate({width: parseInt(sec2.attr('data-orig-w'))},200);
        sec3.animate({width: parseInt(sec3.attr('data-orig-w'))},200);
        break;
      case 'sec2':
        sec2.animate({width: parseInt(sec2.attr('data-orig-w'))},200);
        sec3.animate({width: parseInt(sec3.attr('data-orig-w'))},200);
        break;
      case 'sec3':
        sec3.animate({width: parseInt(sec3.attr('data-orig-w'))},200);
        break;
    }
  }
});
//sec1.hover(hovExtend(1), hovRetract(1));
//sec2.hover(hovExtend(2), hovRetract(2));
//sec3.hover(hovExtend(3), hovRetract(3));


/*
function hovExtend(sectionID){
  switch(sectionID){
    case 1:
      sec1.animate({width: 250},200);
      break;
    default:
      break;
  }
}
function hovRetract(sectionID){
}
/*
----------------------
------Javascript------
----------------------

(function() {

     function init() {
    var speed = 250,
        easing = mina.easeinout;

    [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
        var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
       pathConfig = {
           from : path.attr( 'd' ),
           to : el.getAttribute( 'data-path-hover' )
       };

        el.addEventListener( 'mouseenter', function() {
       path.animate( { 'path' : pathConfig.to }, speed, easing );
        } );

        el.addEventListener( 'mouseleave', function() {
       path.animate( { 'path' : pathConfig.from }, speed, easing );
        } );
    } );
     }

     init();

      })();

--------------------
--------HTML--------
--------------------

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script src="http://lethalsilicon.com/resources/js/snap.svg-min.js"></script>
          <!--[if IE]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
          <![endif]-->
          <!--Image courtesy of http://cargocollective.com/isaac317-->
        </head>
        <style>

        </style>
        <body>
          <section id="grid" class="grid clearfix">
         <a href="https://twitter.com/SamAlegria" data-path-hover="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z">
           <figure>
             <img src="http://lethalsilicon.com/resources/img/skelly.png" />
             <svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="m 0,0 0,171.14385 c 24.580441,15.47138 55.897012,24.75772 90,24.75772 34.10299,0 65.41956,-9.28634 90,-24.75772 L 180,0 0,0 z"/></svg>
             <figcaption>
          <h2>El Terrible</h2>
          <p>Hola Amigo! Que tipo de CSS quieres usar?</p>
          <button>View</button>
             </figcaption>
           </figure>
         </a>
          </section>
        </body>
      </html>


*/
