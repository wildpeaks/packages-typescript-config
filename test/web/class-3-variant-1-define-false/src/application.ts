const container = document.createElement('div');
container.setAttribute('id', 'hello');
document.body.appendChild(container);

class BaseClass {
	public myproperty: string;
	constructor() {
		this.myproperty = 'BASE';
	}
}
class ChildClass extends BaseClass {
}

const myobj = new ChildClass();
const before = String(myobj.myproperty);
myobj.myproperty = 'MODIFIED';
const after = String(myobj.myproperty);
container.innerText = `[CLASS 3 VARIANT 1 DEFINE FALSE] ${before} ${after}`;

export {};
