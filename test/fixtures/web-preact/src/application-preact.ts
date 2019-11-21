/* eslint-env browser */
'use strict';
import {h, render} from 'preact';

const container = document.createElement('div');
container.setAttribute('id', 'hello');
document.body.appendChild(container);

render(
	h('article', {className: 'example'}, ['TS Hello World']),
	container
);