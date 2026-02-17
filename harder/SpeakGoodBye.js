(function (window) {
  var byeSpeaker = {};

  // DO NOT attach speakWord to byeSpeaker
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
