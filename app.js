// Shorthand for $( document ).ready()
$(function() {
  var apikEY = 'AIzaSyBQumRj1GI29PvcblSgu_TxtOcxscyrIeo';
  var apiURl = 'https://www.googleapis.com/youtube/v3/search';

  $('form').on('submit', function(evt) {
    evt.preventDefault();
    var searchTerm = $('#searchForm').val();

    //object data sent for the server
    youtubedata = {
      part: 'snippet',
      key: apikEY,
      q: searchTerm,
      maxResults: 25
    };

    var youtubeResults = function(data) {
      var videoList = '<ul class="list-unstyled">';

      $.each(data.items, function(i, results) {
        videoList += '<li>';
        videoList +=
          '<h3 class="h3 p-2 bg-dark text-white">' +
          results.snippet.title +
          '</h3>';
        videoList +=
          '<iframe src="' +
          results.snippet.thumbnails.medium.url +
          '"></iframe></li>';
        videoList += '<p>' + results.snippet.description + '</p>';
      });

      videoList += '</ul>';
      $('#search-out-put').html(videoList);
    };

    $.getJSON(apiURl, youtubedata, youtubeResults);
  });
});
