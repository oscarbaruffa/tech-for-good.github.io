// Creates and populates 'dataLayer' object.
window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-108372355-1');


// Create Google Hyperlink Events.
function trackOutboundLink(url) {
  ga(
    'send', 
    'event',
    'outbound',
    'click',
    url,
    {
      'transport': 'beacon',
      'hitCallback': function() {
        document.location = url;
      }
    }
  );
}

function trackAnchor(event) {
  return trackOutboundLink(event.srcElement.href);
};

var elements = document.getElementsByTagName('a');

for (var i = 0, len = elements.length; i < len; i++) {
  var el = elements[i];
  if (el.addEventListener) {
    el.addEventListener("click", trackAnchor, false);
  } else {
    el.attachEvent('onclick', trackAnchor);
  }
};
