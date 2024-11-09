const date = new Date(2024, 9, 12); // 2024年10月12日を設定　月は0から始まるため、10月は9となる
const year = date.getFullYear();
const month = date.getMonth() + 1; // 月を1から始まる形式に調整
const day = date.getDate();
console.log(`${year}年${month}月${day}日`);
