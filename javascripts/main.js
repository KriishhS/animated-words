'use strict';

$(document).ready(function() {
  $.getJSON('/data/words.json', function(words) {
    $.each(words, function(i, entry) {
      var container = $('<div>');

      container.text(entry.word);

      $('body').append(container);
    });
  });
});
