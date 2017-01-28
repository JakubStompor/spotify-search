// nowy moduł node.js z komponentem
require('./main.css');

module.exports = {
  // pobranie pliku html jako template
  template: require('./main.template.html'),
  // inicjalizacja kontrolera
  controller: require('./main.controller'),
  controllerAs: 'ctrl'
}
