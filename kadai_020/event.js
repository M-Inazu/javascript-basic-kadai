// document.getElementById('btn').addEventListener('click', function() {
//     const messageElement = document.getElementById('text');
//     messageElement.textContent = 'ボタンをクリックしました';
// });

// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入
const messageElement = document.getElementById('text');

// HTML要素がクリックされたときに、イベント処理を実行する。
btn.addEventListener('click',() =>{
    // textContentで新しいテキストを書き込む
    messageElement.textContent = 'ボタンをクリックしました';

});