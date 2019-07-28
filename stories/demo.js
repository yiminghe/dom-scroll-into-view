import $ from 'jquery';
import React from 'react';
import scrollIntoView from '../src/';
import { storiesOf } from '@storybook/react';

function run() {
  scrollIntoView($('#ex1')[0], $('#container')[0], {
    alignWithLeft: transformValue($('#alignWithLeft').val()),
    alignWithTop: transformValue($('#alignWithTop').val()),
    allowHorizontalScroll: transformValue($('#allowHorizontalScroll').val()),
    onlyScrollIfNeeded: transformValue($('#onlyScrollIfNeeded').val()),
    offsetTop: parseInt($('#offsetTop').val(), 10) || 0,
    offsetLeft: parseInt($('#offsetLeft').val(), 10) || 0,
    offsetBottom: parseInt($('#offsetBottom').val(), 10) || 0,
    offsetRight: parseInt($('#offsetRight').val(), 10) || 0,
  });
}

const style = `
 .demo-container {
      height: 200px;
      width: 200px;
      position: relative;
      overflow: auto;
      border: 1px solid black;
    }

      .demo-box {
      height: 60px;
      width: 60px;
      border: 1px solid red;
      position: absolute;
      left: 100px;
      top: 200px;
    }

      .demo-placeholder {
      height:1000px;width:1000px;
    }`;

const Demo = () => (
  <div>
    <style>{style}</style>
    <button onClick={run}>scrollIntoView</button>
    <br />
    <label>
      alignWithLeft:
      <select id="alignWithLeft">
        <option>undefined</option>
        <option>true</option>
        <option>false</option>
      </select>
    </label>
    <br />
    <label>
      alignWithTop:
      <select id="alignWithTop">
        <option>undefined</option>
        <option>true</option>
        <option>false</option>
      </select>
    </label>
    <label>
      <br />
      allowHorizontalScroll:
      <select id="allowHorizontalScroll">
        <option>undefined</option>
        <option>true</option>
        <option>false</option>
      </select>
    </label>
    <br />
    <label>
      onlyScrollIfNeeded:
      <select id="onlyScrollIfNeeded">
        <option>undefined</option>
        <option>true</option>
        <option>false</option>
      </select>
    </label>
    <br />
    <label>
      offsetTop:
      <input defaultValue="0" id="offsetTop" />
    </label>
    <br />
    <label>
      offsetBottom:
      <input defaultValue="0" id="offsetBottom" />
    </label>
    <br />
    <label>
      offsetLeft:
      <input defaultValue="0" id="offsetLeft" />
    </label>
    <br />
    <label>
      offsetRight:
      <input defaultValue="0" id="offsetRight" />
    </label>
    <br />
    <div id="container" className="demo-container">
      <div id="ex1" className="demo-box">
        find me!
      </div>
      <div className="demo-placeholder">container</div>
    </div>
  </div>
);

function transformValue(v) {
  if (v === 'false') {
    return false;
  }
  if (v === 'true') {
    return true;
  }
}

storiesOf('demo', module).add('simple', () => <Demo />);
