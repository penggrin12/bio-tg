function randomtext() {
    var randomtxt=[
        '/\\_/\\\n( o.o )\n> ^ <',
        '_____\n||""||\n||__||\n[ -=.]`)\n====== 0\n',
        'UwU',
        'Dont look at me!',
        '/clicker'
    ];
    return randomtxt[Math.floor((Math.random() * 4.1))];
}

document.getElementById("ascii").innerHTML = randomtext();