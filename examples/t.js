var $ = require('jquery');
function transformValue(v) {
  if (v === 'false') {
    return false;
  }
  if (v === 'true') {
    return true;
  }
}
var scrollIntoView = require('../');
$('#scrollIntoView')[0].onclick = function () {
  scrollIntoView(document.getElementById('ex1'), document.getElementById('container'), {
    alignWithLeft: transformValue($('#alignWithLeft').val()),
    alignWithTop: transformValue($('#alignWithTop').val()),
    allowHorizontalScroll: transformValue($('#allowHorizontalScroll').val()),
    onlyScrollIfNeeded: transformValue($('#onlyScrollIfNeeded').val())
  });
};
