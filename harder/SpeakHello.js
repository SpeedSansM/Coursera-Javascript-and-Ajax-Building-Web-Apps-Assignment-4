(function (window) {
  var helloSpeaker = {};

  // DO NOT attach speakWord to helloSpeaker
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
