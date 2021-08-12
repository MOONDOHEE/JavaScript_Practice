const quotes = [
	{
		quote: '글쓰기는 언제나 어려웠고 가끔은 거의 불가능했다.',
		author: '어니스트 헤밍웨이',
	},
	{
		quote: '글쓰기는 머리가 아닌 종이에 낱말을 늘어놓는 것이다.',
		author: '로버타 진 브라이언트',
	},
	{
		quote: '생각나는 대로 휘갈겨 쓴 후, 절반으로 줄이고, 제대로 다듬어라.',
		author: '찰스 다윈',
	},
	{
		quote: '재개념화, 탈대중화 같은 전문 용어는 허세의 증거일 뿐이다.',
		author: '데이비드 오길비',
	},
	{
		quote:
			'달이 빛난다고 말하지 말고 깨진 유리조각에 반짝이는 한 줄기 빛을 보여줘라.',
		author: '안톤 체호프',
	},
	{
		quote: '거의 올바른 단어와 올바른 단어는 반딧불과 번갯불 차이다.',
		author: '마크 트웨인',
	},
];

const quoteText = document.querySelector('#quote span:first-child');
const quoteAuthor = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteText.innerText = todaysQuote.quote;
quoteAuthor.innerText = todaysQuote.author;
