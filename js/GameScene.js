class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }
  preload() {
    //this.cursors;
    //this.cameras.main.setBackgroundColor(0x9900e3);

    // this.load.image("tiles", "assets/bg-sprites.png");
    this.load.image('tiles', 'assets/LatestSpriteSheet.png');
    this.load.tilemapTiledJSON('map', 'assets/brimhaven.json');
    this.load.audio('overworld', ['audio/overworld.mp3']);
    this.load.audio('splat', ['audio/splat.mp3']);
    // this.load.spritesheet("hero", "images/ninja-sprite.png", {
    //   frameWidth: 32,
    //   frameHeight: 43,
    // });
    // this.load.spritesheet("hero", "assets/baldy.png", {
    //   frameWidth: 417,
    //   frameHeight: 582,
    // });

    this.load.spritesheet('hero', 'assets/baldy/baldyFull.png', {
      frameWidth: 394,
      frameHeight: 550,
    });

    // this.load.spritesheet("wraith", "images/wraith.png", {
    //   frameWidth: 520,
    //   frameHeight: 420,
    // });
    // this.player;
    this.player; // = new Player(this, 400, 600, "ninja");
    this.overworld;
    this.splat;
    // this.npc;
  } //end preload

  create() {
    const map = this.make.tilemap({ key: 'map' });

    // const tileset = map.addTilesetImage("bg-sprites", "tiles");
    const tileset = map.addTilesetImage('LatestSpriteSheet', 'tiles');
    const belowLayer = map.createLayer('ground', tileset, 0, 0).setScale(1);
    const worldLayer = map.createLayer('world', tileset, 0, 0).setScale(1);
    //const aboveLayer = map.createLayer("top", tileset, 0, 0);

    // aboveLayer.setDepth(100);

    worldLayer.setCollisionByProperty({ collides: true });
    belowLayer.setCollisionByProperty({ collides: true });

    // const debugGraphics = this.add.graphics().setAlpha(0.5);
    // worldLayer.renderDebug(debugGraphics, {
    //   titleColor: null,
    //   collidingTileColor: new Phaser.Display.Color(255, 255, 50, 255),
    //   faceColor: new Phaser.Display.Color(0, 255, 0, 255),
    // });

    // belowLayer.renderDebug(debugGraphics, {
    //   titleColor: null,
    //   collidingTileColor: new Phaser.Display.Color(255, 255, 50, 255),
    //   faceColor: new Phaser.Display.Color(0, 255, 0, 255),
    // });

    // this.player = this.physics.add.sprite(400, 600, "ninja").setScale(1.5);

    this.player = new Player(this, 600, 2550, 'hero').setScale(0.17);
    let overworld = this.sound.add('overworld', { loop: true });
    let splat = this.sound.add('splat', { loop: false });
    overworld.play();
    //this.splat.play();
    // this.npc = new NonPlayer(this, 280, 200, "hero").setScale(0.17);

    // this.add.existing(this.player);
    // this.add.existing(this.npc);
    // this.add.sprite(280, 200, "wraith").anims.play("right");

    // this.player.setCollideWorldBounds(true);
    //   this.player.setFrame(0);
    this.physics.add.collider(this.player, belowLayer);

    // this.physics.add.collider(this.npc, belowLayer);
    // this.physics.add.collider(this.player, worldLayer);

    this.physics.add.collider(
      this.player,
      worldLayer,
      function (player, worldLayer) {
        splat.play();
      }
    );

    // this.physics.add.collider(this.npc, worldLayer);
    this.physics.world.bounds.width = '100%';
    this.physics.world.bounds.height = '100%';
    this.cameras.main.setBounds(0, 0, '100%', '100%');

    this.cameras.main.startFollow(this.player, true, 0.8, 0.8);
  } // end create

  update() {
    this.player.update();
    // this.npc.update();
  } // end update
} // end gameScene
