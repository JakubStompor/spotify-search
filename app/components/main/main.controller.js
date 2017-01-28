module.exports = function(spotifyService, $state, $stateParams, $timeout) {
  var self = this;
  $timeout(function(){
    self.artists = $stateParams.name;
  }, 0);

  self.search = function() {
    if (self.artists) {
      $state.go('list', {
        name: self.artists
      });
    }
  }
}
