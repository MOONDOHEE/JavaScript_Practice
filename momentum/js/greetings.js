const loginForm = document.querySelector('#login-form');
//const loginForm = document.getElementById("login-form");
//둘 다 같은 의미

const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

//위와 같이 쓰고 싶지 않다면
//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
//처럼 써도 괜찮다.

function handleLoginBtnClick() {
	const userName = loginInput.value;
	/* html에서 maxlength와 required를 주면 밑의 작업이 필요없어짐
  if  (userName === '') {
		alert('Please Write Your Name');
	} else if (userName.length > 15) {
		alert('Your Name is toooooo long :(');
	}
  */
}
loginButton.addEventListener('click', handleLoginBtnClick);

//form을 submit하면 새로고침을 자동으로 함. ^JS에서는 function뒤에 ()를 붙이면 자동으로 실행시켜버린다^
//function의 첫 번째 매개변수(argument)는 방금 무슨 일이 일어났는지에 대한 event 정보를 제공한다.

//실수를 하고 싶지 않을 때 상수 대문자로 저장해놓으면 좋다.
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function paintGreetings() {
	const savedUserName = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${savedUserName}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
	event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 //
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	paintGreetings();
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
//유저 정보를 저장
if (savedUserName === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden class가 지워질 것임.
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings();
}

/*
function handlelinkClick(event) {
	event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 //
	//alert('click!'); //alert는 모든 동작을 정지시켜서 쓰는 사람이 드물다.
}
const link = document.querySelector('a');
link.addEventListener('click', handlelinkClick);
*/
