var clickButton = document.getElementById("clickButton");
var farmPlantButton = document.getElementById("farm_plant");
var coinsCounter = document.getElementById("coins");
var coins = 0;
var totalGivenCoins = 0;
var farm = 0;
clickButton.onclick = click;
farmPlantButton.onclick = plant;

function update() {
    coinsCounter.innerHTML = coins;
    document.getElementById("farm_count").innerHTML = farm;
    document.getElementById("farm_earncount").innerHTML = Math.round(farm / 0.5);
}

function click() {
    // if (totalGivenCoins > 25) {
    //     clickButton.disabled = true;
    //     document.getElementById("nocoins").innerHTML = "No Coins";
    //     return;
    // }
    coins += 1; totalGivenCoins += 1;
    
    update();

    if (totalGivenCoins > 5) {
        document.getElementById("farm").style.display = "block";
    }
}

function plant() {
    if (coins >= 30) {
        coins -= 30;
        farm += 1;
        update();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function farmloop() {
    while (true) {
        await sleep(1000 * 5);
        coins += Math.round(farm / 0.5);
        update();
    }
}

farmloop();