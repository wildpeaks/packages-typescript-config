const container = document.createElement("div");
container.setAttribute("id", "hello");
document.body.appendChild(container);

class BaseClass {
	public myproperty: string;
}
class ChildClass extends BaseClass {
	public myproperty: string;
}

const myobj = new ChildClass();
const before = String(myobj.myproperty);
myobj.myproperty = "MODIFIED";
const after = String(myobj.myproperty);
container.innerText = `[CLASS 1 VARIANT 2 DEFINE TRUE] ${before} ${after}`;

export {};
