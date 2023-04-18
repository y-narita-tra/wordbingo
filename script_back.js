// ビンゴカードのサイズを取得
const S = parseInt(readline(), 10);

// ビンゴカードの単語を取得
const bingo = [];
for (let i = 0; i < S; i++) {
  const row = readline().split(' ');
  bingo.push(row);
}

// 選ばれた単語を取得
const N = parseInt(readline(), 10);
const selected = [];
for (let i = 0; i < N; i++) {
  selected.push(readline());
}

// 横方向のビンゴをチェック
let bingoCount = 0;
for (let i = 0; i < S; i++) {
  let flag = true;
  for (let j = 0; j < S; j++) {
    if (!selected.includes(bingo[i][j])) {
      flag = false;
      break;
    }
  }
  if (flag) {
    bingoCount++;
  }
}

// 縦方向のビンゴをチェック
for (let i = 0; i < S; i++) {
  let flag = true;
  for (let j = 0; j < S; j++) {
    if (!selected.includes(bingo[j][i])) {
      flag = false;
      break;
    }
  }
  if (flag) {
    bingoCount++;
  }
}

// 斜め方向のビンゴをチェック
let flag = true;
for (let i = 0; i < S; i++) {
  if (!selected.includes(bingo[i][i])) {
    flag = false;
    break;
  }
}
if (flag) {
  bingoCount++;
}

flag = true;
for (let i = 0; i < S; i++) {
  if (!selected.includes(bingo[i][S - i - 1])) {
    flag = false;
    break;
  }
}
if (flag) {
  bingoCount++;
}

// 勝利条件を判定
if (bingoCount >= 1) {
  console.log('yes');
} else {
  console.log('no');
}
