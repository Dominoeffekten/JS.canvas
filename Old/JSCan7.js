'use strict';
var $ = function (foo) {
    return document.getElementById(foo);
};

let board = function () {
    let canvas = $('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 150);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 8;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 150);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 8;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(300, 100);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(300, 50);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(100, 0);
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 50);
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150, 25, 20, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'red';
        ctx.stroke(); 
    }
}

let tiles = [1, 2, 3, 4, 5, 6, 7, 8];

window.addEventListener('load', board);