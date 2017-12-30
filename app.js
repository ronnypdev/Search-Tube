// Shorthand for $( document ).ready()
$(function() {

    var apikEY = 'AIzaSyBQumRj1GI29PvcblSgu_TxtOcxscyrIeo';
    var apiURl = 'https://www.googleapis.com/youtube/v3/search';

    $('form').on('submit', function(evt) {
        evt.preventDefault();
        var searchTerm = $('#searchForm').val();

        //object data sent for the server
        youtubeData = {

          part: 'snippet',
          key: apikEY,
          q: searchTerm

        };

        var youtubeResults = function(data) {

          var videoList = '<ul>';

          $.each(data.items, function(i, results) {
             videoList += '<li>';
             videoList += '<h3>' + results.snippet.title + '</h3>';
             videoList += '<img src="' + results.snippet.thumbnails + '"></li>';
          });

          videoList+= '</ul>';
          $('#search-out-put').html(videoList);

        };


        $.getJSON(apiURl, youtubeData, youtubeResults);
    });
});
