 .on(events, handler);
  // - events
  //   Type: String
  //   One or more space-separated event types and optional namespaces
  // - handler
  //   Type: Function(jQuery Element, Event eventObject [, Anything extraParameter ] [, ... ] )
  //   A function to execute when the event is triggered.

  .off(events[, handler]);
  // - events
  //   Type: String
  //   One or more space-separated event types and optional namespaces
  // - handler
  //   Type: Function(jQuery Element, Event eventObject [, Anything extraParameter ] [, ... ] )
  //   A handler function previously attached for the event(s)

  // built-in events:
  //   "mousedown", "mouseup", "click", "keyup", "keydown", "keypress"
  //   "filter.click", "emojibtn.click", "arrowLeft.click", "arrowRight.click",
  //   "focus", "blur", "paste", "resize", "change"

  .setText(str);
  // - str
  //   Type: String
  //   Set text

  .getText();
  //   Get text

  // Usage methods, example:
  var el = $("selector").emojioneArea();
  el[0].emojioneArea.on("emojibtn.click", function(btn, event) {
    console.log(btn.html());
  });