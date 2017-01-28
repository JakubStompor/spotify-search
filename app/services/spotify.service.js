var angular = require('angular');

module.exports = function ($http) {
  function getData (response) {
    return response.data;
  }

  this.getArtists = function(query) {
      return $http.get('https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=artist').then(getData);
  };
  this.getTopTracks = function(id) {
      return $http.get('https://api.spotify.com/v1/artists/' + id + '/top-tracks').then(getData);
  };
}
