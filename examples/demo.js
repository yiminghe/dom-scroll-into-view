require('./demo.less');
const $ = require('jquery');
const scrollIntoView = require('dom-scroll-into-view');

$('#__react-content').html(`
<button id='scrollIntoView'>scrollIntoView</button>
<br/>
<label>
 alignWithLeft:
 <select id="alignWithLeft">
 <option>undefined</option>
 <option>true</option>
 <option>false</option>
 </select>
</label><br/>
<label>
 alignWithTop:
 <select id="alignWithTop">
 <option>undefined</option>
 <option>true</option>
 <option>false</option>
 </select>
</label>
<label><br/>
 allowHorizontalScroll:
 <select id="allowHorizontalScroll">
 <option>undefined</option>
 <option>true</option>
 <option>false</option>
 </select>
</label><br/>
<label>
 onlyScrollIfNeeded:
 <select id="onlyScrollIfNeeded">
 <option>undefined</option>
 <option>true</option>
 <option>false</option>
 </select>
</label>

<div id="container" class="demo-container">
<div id="ex1" class="demo-box">
find me!
</div>
<div class="demo-placeholder">
container
</div>
</div>
`);

function transformValue(v) {
  if (v === 'false') {
    return false;
  }
  if (v === 'true') {
    return true;
  }
}

$('#scrollIntoView')[0].onclick = () => {
  scrollIntoView($('#ex1')[0], $('#container')[0], {
    alignWithLeft: transformValue($('#alignWithLeft').val()),
    alignWithTop: transformValue($('#alignWithTop').val()),
    allowHorizontalScroll: transformValue($('#allowHorizontalScroll').val()),
    onlyScrollIfNeeded: transformValue($('#onlyScrollIfNeeded').val()),
  });
};
