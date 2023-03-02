let game;

window.addEventListener("load", () => {
  let config = {
    type: Phaser.AUTO,
    parent: "game-div",
    height: "100%",
    width: "100%",
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
        gravity: {
          y: 0,
        },
      },
    },
    scale: {
      parent: "game-div",
    },
    pixelArt: true,
    scene: [GameScene],
  };

  game = new Phaser.Game(config);
}); //end load listener

// class GameScene extends Phaser.Scene {
//   constructor() {
//     super("gameScene");
//   }
//   preload() {
//     this.cursors;
//     //this.cameras.main.setBackgroundColor(0x9900e3);

//     this.load.image("tiles", "assets/bg-sprites.png");
//     this.load.tilemapTiledJSON("map", "assets/testWorld.json");
//     this.load.spritesheet("ninja", "images/ninja-sprite.png", {
//       frameWidth: 32,
//       frameHeight: 43,
//     });
//     this.player;
//   } //end preload

//   create() {
//     this.cursors = this.input.keyboard.createCursorKeys();

//     this.input.keyboard.clearCaptures(); // fix for space not working in chat

//     const map = this.make.tilemap({ key: "map" });

//     const tileset = map.addTilesetImage("bg-sprites", "tiles");
//     const belowLayer = map.createLayer("ground", tileset, 0, 0);
//     const worldLayer = map.createLayer("world", tileset, 0, 0);
//     const aboveLayer = map.createLayer("top", tileset, 0, 0);

//     aboveLayer.setDepth(100);

//     worldLayer.setCollisionByProperty({ collides: true });

//     // const debugGraphics = this.add.graphics().setAlpha(0.5);
//     // worldLayer.renderDebug(debugGraphics, {
//     //   titleColor: null,
//     //   collidingTileColor: new Phaser.Display.Color(255, 255, 50, 255),
//     //   faceColor: new Phaser.Display.Color(0, 255, 0, 255),
//     // });

//     // this.player = this.physics.add.sprite(400, 600, "ninja").setScale(1.5);
//     this.player = new Player(this, 400, 600, "ninja");

//     this.player.setCollideWorldBounds(true);
//     this.player.setFrame(0);
//     this.physics.add.collider(this.player, worldLayer);
//     this.physics.world.bounds.width = "100%";
//     this.physics.world.bounds.height = "100%";
//     this.cameras.main.setBounds(0, 0, "100%", "100%");

//     this.cameras.main.startFollow(this.player, true, 0.8, 0.8);
//   } // end create

//   update() {
//     // const speed = 200;
//     // const previousVelocity = this.player.body.velocity.clone();
//     // this.player.body.setVelocity(0);
//     // // movement
//     // if (this.cursors.left.isDown) {
//     //   this.player.body.setVelocityX(-speed);
//     // } else if (this.cursors.right.isDown) {
//     //   this.player.body.setVelocityX(speed);
//     // }
//     // if (this.cursors.up.isDown) {
//     //   this.player.body.setVelocityY(-speed);
//     // } else if (this.cursors.down.isDown) {
//     //   this.player.body.setVelocityY(speed);
//     // }
//     // this.player.body.velocity.normalize().scale(speed);
//     // //animations
//     // if (this.cursors.up.isDown) {
//     //   this.player.anims.play("up", true);
//     // } else if (this.cursors.down.isDown) {
//     //   this.player.anims.play("down", true);
//     // } else if (this.cursors.left.isDown) {
//     //   this.player.anims.play("left", true);
//     // } else if (this.cursors.right.isDown) {
//     //   this.player.anims.play("right", true);
//     // } else {
//     //   this.player.anims.stop();
//     // }
//     // // Set idle animations
//     // if (
//     //   this.player.body.velocity.x === 0 &&
//     //   this.player.body.velocity.y === 0
//     // ) {
//     //   // //show idle animations
//     //   // if (previousVelocity.x < 0) {
//     //   //   this.player.setFrame(6);
//     //   // } else if (previousVelocity.x > 0) {
//     //   //   this.player.setFrame(9);
//     //   // } else if (previousVelocity.y < 0) {
//     //   //   this.player.setFrame(3);
//     //   // } else if (previousVelocity.y > 0) {
//     //   //   this.player.setFrame(0);
//     //   // }
//     // }
//   } // end update
// } // end gameScene

// class CaveScene extends Phaser.Scene {
//   constructor() {
//     super("caveScene");
//   }

//   preload() {} // end preload

//   create() {} // end create

//   update() {} // end updates
// } // end cave scene
