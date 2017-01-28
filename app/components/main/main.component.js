// nowy moduł node.js z komponentem

module.exports = {
  // pobranie pliku html jako template
  template: require('./main.template.html'),
  // inicjalizacja kontrolera
  controller: require('./main.controller')
}
