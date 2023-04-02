"use strict";
let cells = document.querySelectorAll('.cell');
let box = document.querySelector('.game-board');
let restart = document.querySelector('#restart');
let winner = document.querySelector('#winner');
let message = document.querySelector('#message');
// 玩家枚举
var Player;
(function (Player) {
    Player["X"] = "X";
    Player["O"] = "O";
})(Player || (Player = {}));
// 当前玩家
let currentPlayer;
// 胜利条件
let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// 游戏步数
let steps = 0;
// 初始化游戏
startGame();
// 重新开始游戏
restart.addEventListener('click', startGame);
// 封装初始化游戏方法
function startGame() {
    // 设定第一个玩家
    currentPlayer = Player.X;
    // 步数归零
    steps = 0;
    // 隐藏结果框
    message.style.display = 'none';
    // 循环绑定点击事件
    cells.forEach(item => {
        let cell = item;
        // 清除原有类名
        cell.classList.remove(Player.X, Player.O, 'noHover');
        // 清除原有事件
        cell.removeEventListener('click', cellClick);
        // 绑定一次性点击事件
        cell.addEventListener('click', cellClick, { once: true });
    });
}
// 封装点击事件
function cellClick(e) {
    let target = e.target;
    // 添加点击类名，表示已经点击，没有 noHover 类名的div盒子才会有hover效果
    target.classList.add(currentPlayer, 'noHover');
    steps++;
    // 通过判赢函数判断胜利状态
    if (checkWin(currentPlayer)) {
        // 展示胜利结果
        message.style.display = 'block';
        winner.innerHTML = currentPlayer + '赢了';
        return;
    }
    else if (!checkWin(currentPlayer) && steps == 9) {
        // 展示平局结果
        message.style.display = 'block';
        winner.innerHTML = '平局';
        return;
    }
    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 通过对容器盒子添加类名切换全局的下一步提示
    box.classList.remove(Player.X, Player.O);
    box.classList.add(currentPlayer);
}
// 封装判赢方法
function checkWin(player) {
    return winCondition.some(item => {
        return cells[item[0]].classList.contains(player) && cells[item[1]].classList.contains(player) && cells[item[2]].classList.contains(player);
    });
}
