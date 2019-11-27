/* eslint-env browser */
'use strict';
import * as shared from './shared';

const myvariable = {
	hello: 'APP1'
};

const container = document.createElement('div');
container.setAttribute('id', 'hello');
container.innerText = `[ENTRIES IMPORT STAR] Value is ${JSON.stringify(myvariable)}`;
document.body.appendChild(container);

console.log('typeof shared', typeof shared);
