// document.getElementById('btn').addEventListener('click', function() {
//     const messageElement = document.getElementById('text');
//     messageElement.textContent = 'ボタンをクリックしました';
// });

// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入
const text = document.getElementById('text');

// HTML要素がクリックされたときに、イベント処理を実行する。
// ... 既存のコード ...
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});


