$(document).ready(function(){
  function raygunOn() {
    console.log('raygun on!');

    // $('*').hover(function() {
    //   $( this ).addClass( "raygun-selected" );
    // }, function() {
    //   $( this ).removeClass( "raygun-selected" );
    // });

    $( "*:not(#raygun-off)" ).not('#raygun-off').on( "mouseenter.raygun mouseleave.raygun", function( event ) {
      $( this ).toggleClass( "raygun-selected" );
    });

    $('*').not('#raygun-off').on('click.raygun', function(e){
      e.stopPropagation();
      e.preventDefault();
      $(this).remove();
      // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      //   console.log(response.farewell);
      // });
    });
  };

  function  raygunOff(){
    $('*').off('.raygun');
    console.log('raygun disarmed');
  };

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    console.log(request.raygun);
    if (request.raygun == "on"){

      sendResponse({raygun: "Raygun is ready to kill DOM elements!"});
      raygunOn();

    }
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    console.log(request.raygun);
    if (request.raygun == "off"){

      sendResponse({raygun: "Raygun is disarmed"});
      raygunOff();

    }
  });


});
