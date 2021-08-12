const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	//우리가 클릭한 li.id와 (삭제 버튼을 누른 li는 제외하고) 다른 todo는 남겨놓고싶다.
	saveToDos();
}

function paintTodo(newTodo) {
	const newli = document.createElement('li');
	newli.id = newTodo.id;

	const span = document.createElement('span');
	span.innerText = newTodo.text;

	const button = document.createElement('button');
	button.innerText = '❌';

	newli.appendChild(span);
	newli.appendChild(button);
	toDoList.appendChild(newli);

	button.addEventListener('click', deleteTodo);
}

function hendleToDoSubmit(event) {
	event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 //
	const newTodo = toDoInput.value;
	toDoInput.value = '';
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveToDos();
}

//localstorage가 Array형식으로 저장된다.
//stringify로 Array 자체를 문자열로 만들고 ["뭐시기","저시기"] ==> "["뭐시기","저시기"]"
//나중에 localstorage에서 가지고 온 다음 parse로 문자열을 Array 로 만들어서 불러들이는 걸로 하는거 같아요

toDoForm.addEventListener('submit', hendleToDoSubmit);
const savedToDo = localStorage.getItem(TODOS_KEY);

/*
function sayHello(item) {
	console.log('오늘의 할 일 -> ' + item);
}
*/

if (savedToDo !== null) {
	const parsedToDos = JSON.parse(savedToDo);
	toDos = parsedToDos;
	parsedToDos.forEach(paintTodo);
	//위와 같이 쓰지 않아도 다른 방법으로도 사용 가능하다.
	//parsedToDos.forEach((item) => console.log("오늘의 할 일 -> ", item));
}

//filter -> 선택옵션
function sexyFilter(item) {
	//반드시 true를 리턴해야한다. 만약 새 array에서도 기존 array를 포함하고 싶다면.
	//제외를 시키려면 false를 리턴한다.
}
//Array.filter(Function명)
//const Array명 = [{text:"lalala"}, {text: "lololo"}] 처럼 Array 변수가 있다고 할 때
//function sexyFilter(item) { return item.text != "lololo"} 라고 선언하고
//Array명.filter(Function명(즉 sexyFilter))하게되면 lololo가 사라지고 난 후 lalala만 새로 생기게 된다.
