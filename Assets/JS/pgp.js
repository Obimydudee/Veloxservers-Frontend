var btn1 = document.getElementById('pgpkeybutton');
var btn2 = document.getElementById('button1');
var btn3 = document.getElementById('button2');
var btn4 = document.getElementById('button3');

btn1.addEventListener('click', pgpbtnclick);

document.getElementById('backBtn').addEventListener('click', backbtnclick);

function pgpbtnclick() {
    const pgpKeyDiv = document.getElementById('pgpKey');

    fadeOutButton(btn1);
    fadeOutButton(btn2);
    fadeOutButton(btn3);
    fadeOutButton(btn4);

    setTimeout(function() {
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
        btn4.style.display = 'none';
        pgpKeyDiv.classList.remove('hidden');
    }, 500);
}


function backbtnclick() {
    const pgpKeyDiv = document.getElementById('pgpKey');

    // Hide the PGP key
    pgpKeyDiv.classList.add('hidden');

    // Show all buttons and fade them in
    btn1.style.display = 'inline';
    btn2.style.display = 'inline';
    btn3.style.display = 'inline';
    btn4.style.display = 'inline';

    setTimeout(function() {
        fadeInButton(btn1);
        fadeInButton(btn2);
        fadeInButton(btn3);
        fadeInButton(btn4);
    }, 50);
}

function fadeOutButton(button) {
    button.style.opacity = 0;
}

function fadeInButton(button) {
    button.style.opacity = 1;
}
