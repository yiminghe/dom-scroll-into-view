# dom-scroll-into-view@1.x
---

<button id='scrollIntoView'>scrollIntoView</button>
<br/>
<label>
 alignWithLeft: <select id="alignWithLeft"><option>undefined</option><option>true</option><option>false</option></select>
</label><br/>
<label>
 alignWithTop: <select id="alignWithTop"><option>undefined</option><option>true</option><option>false</option></select>
</label>
<label><br/>
 allowHorizontalScroll: <select id="allowHorizontalScroll"><option>undefined</option><option>true</option><option>false</option></select>
</label><br/>
<label>
 onlyScrollIfNeeded: <select id="onlyScrollIfNeeded"><option>undefined</option><option>true</option><option>false</option></select>
</label>

````html
<div id='container' style='height:100px;position:relative;overflow:auto;border:1px solid black;'>
<div id='ex1' style='height:60px;width:60px;border:1px solid red;position:absolute;left:10px;top:200px;'>
find me!
</div>
<div style='height:1000px'>
container
</div>
</div>
````

````js
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
````