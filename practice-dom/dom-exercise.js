//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let mE = document.createElement('p');
mE.style.color = 'sesame green';
mE.textContent = '写真表と都市の緯度経度のページです';

let ex42Element = document.getElementById('ex42');

ex42Element.insertAdjacentElement('afterend', mE);

// 練習4-3 写真表作成プログラム

let pE1 = document.createElement('p');
let i1 = document.createElement('img');
i1.src = 'taro.png';
pE1.insertAdjacentElement('beforeend', i1);

let pE2 = document.createElement('p');
let i2 = document.createElement('img');
i2.src = 'jiro.png';
pE2.insertAdjacentElement('beforeend', i2);

let pE3 = document.createElement('p');
let i3 = document.createElement('img');
i3.src = 'hanako.png';
pE3.insertAdjacentElement('beforeend', i3);

let x = document.getElementById('phototable');

x.insertAdjacentElement('afterbegin', pE3);
x.insertAdjacentElement('afterbegin', pE2);
x.insertAdjacentElement('afterbegin', pE1);

// 練習4-4 箇条書き削除プログラム
let locationElement = document.getElementById('location');
locationElement.innerHTML = '';

// 練習4-5 箇条書き追加プログラム
data.forEach(function (city) {
	let listItem = document.createElement('li');
	listItem.textContent = city.name + ' (' + city.lat + ', ' + city.lng + ')';
	locationElement.appendChild(listItem);
  });
