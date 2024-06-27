/*コピペでファイル実行
cd ./server/base
node main.js
*/
//ファイルインポート
const { partitionBoard, evaluate } = require("./functions/boardUtility");
const { pullOutOld } = require("./functions/legacy");
const { BoardData, Board, Answer } = require("./functions/class");

//計算時間測定関数の定義
const measureStart = (value = 1000) => {
    console.log("測定を開始します");
    accuracy = value;
    const start = performance.now();
}

const measureFinish = () => {
    const end = performance.now();
    result = (Math.round((end - start) * accuracy) / (1000 * accuracy));
}

let accuracy = 0, start = 0, result = null;

//実行内容
measureStart();

const boardData = new BoardData(null, 6, 6);
const answer = new Answer(boardData.board.start);
console.log(answer.order[0].board.array);
answer.add(boardData.patterns[5], [1, 1], 1);
console.log(answer.order[1].board.array);
answer.swap([1, 2], [4, 2], 2);

measureFinish();

//測定結果表示
console.log("計算時間=" + result + "秒");