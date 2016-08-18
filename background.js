var raygun = "disarmed";


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  raygun = "disarmed";
});

chrome.tabs.onCreated.addListener(function(tab) {
   raygun = "disarmed";
});


chrome.browserAction.onClicked.addListener(function(tab) {

  if (raygun == "armed") {
    raygun = "disarmed";
    chrome.browserAction.setIcon({
      path : "icon.png"
    });

    //send off message
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {raygun: "off"}, function(response) {
        console.log(response.raygun);
      });

    });

  }else{
    //Arm raygun
    raygun = "armed";
    chrome.browserAction.setIcon({
      path : "icon-on.png"
    });

    // Send on msg
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {raygun: "on"}, function(response) {
        console.log(response.raygun);
      });
    });

  }

});
