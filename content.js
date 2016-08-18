$(document).ready(function(){
    $('*').click(function(e){

      e.stopPropagation();
      e.preventDefault();
      $(this).remove();

    });

    $('*').hover(function() {
      $( this ).addClass( "raygun-selected" );
    }, function() {
      $( this ).removeClass( "raygun-selected" );
    }
);
});
