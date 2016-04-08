$(document).ready(function(){
  function init() {
    var speed = 250,
        easing = mina.easeinout;

    [].slice.call (document.querySelectorAll('#navbar')).forEach(function(el){
      var s = Snap(el.querySelector('#s3')), path = s.select('path'),
      var t = Snap(el.querySelector('#s3link')), hoverPath = t.select('data-path-hover'),
      pathConfig = {
        from : path.attr('d'),
        to : hoverPath
      };

      $('#s3').addEventListener('mouseenter', function() {
        path.animate({'path' : pathConfig.to }, speed, easing);
      });
      $('#s3').addEventListener('mouseleave', function(){
        path.animate({'path' : pathConfig.from }, speed, easing);
      });
    });
  }
  init();
});

/*
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
