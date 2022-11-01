function randomtext() {
    var randomtxt=[
        '/\\_/\\\n( o.o )\n> ^ <',
        '_____\n||""||\n||__||\n[ -=.]`)\n====== 0\n',
        'UwU',
        'Dont look at me! >:(',
        '/clicker.html',
    ];
    return randomtxt[Math.floor((Math.random() * 4.3))];
}

document.getElementById("ascii").innerHTML = randomtext();