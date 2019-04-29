/**
 * oddOrEven - A pure HTML-CSS-JS implementation of a Odd-or-Even game
 *
 * Part of Galvao - Lab, my repository for tests and experiments.
 *
 * @author Er Galvao Abbott <galvao@galvao.eti.br>
 * @link https://github.com/galvao-lab 
 * @license MIT
 * @see https://github.com/galvao-lab/README
 */

'use strict';

var players = ['H', 'C'];
var winner  = undefined;

var playerBtns = document.querySelectorAll('#player > button');
var computerBtns = document.querySelectorAll('#computer > button');

playerBtns.forEach(function (btn) {
    btn.addEventListener('click', play);
});

function play()
{
    let hPlay        = parseInt(this.value);
    let cPlay        = Math.floor(Math.random() * 6);
    let hImg         = document.createElement('img');
    let cImg         = document.createElement('img');
    let winSpan      = document.createElement('span');
    let playerPlay   = document.querySelector('#playerPlay');
    let computerPlay = document.querySelector('#computerPlay');
    let playLog      = document.querySelector('#playLog');
    let sum          = hPlay + cPlay;
    let result       = sum % 2;
    let wins         = undefined;

    this.blur();

    hImg.src = 'images/' + hPlay + '.png';
    cImg.src = 'images/' + cPlay + '.png';

    computerBtns.forEach(function (btn, bIndex) {
        if (bIndex === cPlay) {
            btn.style.backgroundColor = '#9a0003';
        } else {
            btn.style.backgroundColor = 'white';
        }
    });

    playerBtns.forEach(function (pbtn, pbIndex) {
        if (pbIndex === hPlay) {
            pbtn.style.backgroundColor = '#46628b';
        } else {
            pbtn.style.backgroundColor = 'white';
        }
    });

    if (playerPlay.hasChildNodes()) {
        playerPlay.replaceChild(hImg, playerPlay.firstChild);
        computerPlay.replaceChild(cImg, computerPlay.firstChild);
    } else {
        playerPlay.appendChild(hImg);
        computerPlay.appendChild(cImg);
    }

    if (result === 1) {
        wins = 'Odd';
    } else {
        wins = 'Even';
    }

    playLog.innerHTML += hPlay + ' + ' + cPlay + ' = ' + sum +  ': ' + wins + '<br>';
}
