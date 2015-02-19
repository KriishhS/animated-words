'use strict';

$(document).ready(function() {
  $.getJSON('/data/words.json', function(words) {
    $.each(words, function(i, entry) {

      var container = $('<div>');

      container.text(entry.word);
      container.addClass('word');
      container.attr("onclick", "changeImage" + entry.word + "()")
      container.attr("data-ref", entry.word);
      $('body').append(container);
    });

    $(".word").hover(function() {
      $(this).css("background-color", "#993399");
      var imageId = "#" + $(this).attr('data-ref');
      $(imageId).animate({'width':'100%', 'height':'100%'});
    }, 
    function() {
      $(this).css("background-color", "#FF5050");
      var imageId = "#" + $(this).attr('data-ref');
      $(imageId).animate({'width':'50%', 'height':'50%'});    

    });

  });

});  