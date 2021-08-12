const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const chooseImages = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `image/${chooseImages}`;

document.body.appendChild(bgImg);
//prepend를 사용하면 body에서의 제일 윗 줄로 가게된다.
