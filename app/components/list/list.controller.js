module.exports = function(spotifyService, $stateParams) {
  var self = this;
  spotifyService.getArtists($stateParams.name).then(function(data) {
    self.artists = data;
    self.artists.forEach(function(artist) {
      spotifyService.getTopTracks(artist.id).then(function(songs) {
        artist.songs = songs;
      })
    })
  })
};
