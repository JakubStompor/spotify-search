module.exports = function(spotifyService, $state, $stateParams, $timeout) {
  var self = this;
  $timeout(function(){
    self.artists = $stateParams.name;
  }, 0);

  self.search = function() {
    spotifyService.pause();
    if (self.artists) {
      $state.go('list', {
        name: self.artists
      });
    }
  };
  self.keypress = function(e) {
    if (e.which == 13) {
      this.search();
    }
  }
}
