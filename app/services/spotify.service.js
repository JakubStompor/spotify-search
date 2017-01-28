var angular = require('angular');

module.exports = function ($http, $q) {
  function getData (response) {
    return response.data;
  }

  this.getArtists = function(query) {
      return $http.get('https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=artist').then(function(response) {
         return response.data.artists.items.map(function(artist) {
             return {
               id: artist.id,
               name: artist.name,
               image: artist.images.filter(function(img) {
                 return img.width <= 300;
               }).map(function(img) {
                 return img.url;
               })[0],
               genres: artist.genres
             }
        });
      });
  };
  this.getTopTracks = function(id) {
      var defer = $q.defer(); // dostajemy promise (nakladka na promise)
      $http.get('https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=SE').then(function(response) {
        var promises = response.data.tracks.slice(0,4).map(function(track) {
            return $http.get(track.album.href).then(function(response) {
              return {
                name: response.data.name,
                image: response.data.images.filter(function(image) {
                  return image.width <= 300;
                }).map(function(image) {
                  return image.url;
                })[0]
              }
            });
        });
        $q.all(promises).then(function(tracks) {
          defer.resolve(tracks);
        }).catch(function(error) {
          defer.reject();
        })
      });
      return defer.promise;
  };
}
