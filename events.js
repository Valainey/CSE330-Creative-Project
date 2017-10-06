var el = $("selector").emojioneArea();

  // attach event handler
  el[0].emojioneArea.on("emojibtn.click", function(button, event) {
    console.log('event:emojibtn.click, emoji=' + button.children().data("name"));
  });
  // unset all handlers attached to event
  el[0].emojioneArea.off("emojibtn.click");

  // like in jQuery you can specify few events separated by space
  el[0].emojioneArea.off("focus blur");

  // set & unset custom handler
  var eventHandler1 = function(button, event) {
    console.log('event1');
  };
  var eventHandler2 = function(button, event) {
    console.log('event2');
  };
  // attach event handlers
  el[0].emojioneArea.on("click", eventHandler1);
  el[0].emojioneArea.on("click", eventHandler2);
  // unset eventHandler1
  el[0].emojioneArea.off("click", eventHandler1);