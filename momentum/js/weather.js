//위치 정보를 줌 Wifi, 좌표 등등.,..

function onGeoOK(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const API_KEY = '1aa847432e2bcb8ff0c27767243b8a83';

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
			city.innerText = data.name;
		}); //JS가 대신 URL에 감.
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
