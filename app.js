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
          maxResults: 25,
          order: viewCount

        };

        var youtubeResults = function(data) {

          var videoList = '<ul>';

          $.each(data.items, function(i, results) {
             videoList += '<li>';
             videoList += '<h3>' + results.snippet.title + '</h3>';
             videoList += '<iframe src="'+ results.snippet.thumbnails.standard  + '"></iframe></li>';
          });

          videoList+= '</ul>';
          $('#search-out-put').html(videoList);
          console.log(youtubedata.key);

        };


        $.getJSON(apiURl, youtubedata, youtubeResults);
    });
});
