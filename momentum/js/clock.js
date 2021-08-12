const clock = document.querySelector('#clock');

//interval -> 매 초 혹은 반복적으로 발생하는 EVENT

//글자.padStart(MaxLength, '맨 앞에 붙일 글자');
//글자.padEnd(MaxLength, '맨 끝에 붙일 글자');
function intervalTime() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

intervalTime();
setInterval(intervalTime, 1000);
