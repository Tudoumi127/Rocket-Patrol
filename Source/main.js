/*let config = {
    width: 200,
    height: 400,
    scene: [Menu]
}

const game = new Phaser.Game(config)*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
let keyF;
let keyR;
let keyLEFT;
let keyRIGHT;

//reserve keyboard vars

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
