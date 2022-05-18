var images = ['../images/Ad/Render\ A', '../images/Ad/Render\ B', '../images/Ad/Render\ C' , '../images/Ad/Render\ D'],
    index  = 0,
    $top   = $('#Galeria');

setInterval(function() {
   $top.animate({ opacity: 0 }, 500, function() {
     $top.css('background-image', 'url('+images[++index]+'.png)');
     $top.animate({ opacity: 1 }, 500, function() {
       if(index === images.length) index = 0;
     });
   });
}, 3000);