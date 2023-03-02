class Player extends Entity {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, 'Player');
    console.log('player: ' + textureKey);

    const frameRate = 6;
    const anims = scene.anims;

    anims.create({
      key: 'left',
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 6,
        end: 8,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    anims.create({
      key: 'right',
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 9,
        end: 11,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    anims.create({
      key: 'up',
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 3,
        end: 5,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    anims.create({
      key: 'down',
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 0,
        end: 2,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    this.idleFrame = {
      down: 0,
      left: 6,
      right: 9,
      up: 3,
    };

    this.setFrame(this.idleFrame.down);

    // this.cursors = this.input.keyboard.createCursorKeys();

    const { LEFT, RIGHT, UP, DOWN, W, A, S, D } =
      Phaser.Input.Keyboard.KeyCodes; //, W, A, S, D } =
    this.keys = scene.input.keyboard.addKeys(
      {
        left: LEFT,
        right: RIGHT,
        up: UP,
        down: DOWN,
        w: W,
        a: A,
        s: S,
        d: D,
      },
      false,
      false
    );

    this.body.setCollideWorldBounds(true);
  }

  update() {
    const { keys } = this;
    const speed = 200;
    const previousVelocity = this.body.velocity.clone();
    this.body.setVelocity(0);
    // movement
    if (keys.left.isDown || keys.a.isDown) {
      // || keys.a.isDown) {
      this.body.setVelocityX(-speed);
    } else if (keys.right.isDown || keys.d.isDown) {
      //|| keys.d.isDown) {
      this.body.setVelocityX(speed);
    }

    if (keys.up.isDown || keys.w.isDown) {
      //|| keys.w.isDown) {
      this.body.setVelocityY(-speed);
    } else if (keys.down.isDown || keys.s.isDown) {
      //|| keys.s.isDown) {
      this.body.setVelocityY(speed);
    }

    this.body.velocity.normalize().scale(speed);

    //animations
    if (keys.up.isDown || keys.w.isDown) {
      //|| keys.w.isDown) {
      this.anims.play('up', true);
    } else if (keys.down.isDown || keys.s.isDown) {
      //|| keys.s.isDown) {
      this.anims.play('down', true);
    } else if (keys.left.isDown || keys.a.isDown) {
      //|| keys.a.isDown) {
      this.anims.play('left', true);
    } else if (keys.right.isDown || keys.d.isDown) {
      //|| keys.d.isDown) {
      this.anims.play('right', true);
    } else {
      this.anims.stop();
    }

    // Set idle animations
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      //show idle animations
      if (previousVelocity.x < 0) {
        this.setFrame(this.idleFrame.left);
      } else if (previousVelocity.x > 0) {
        this.setFrame(this.idleFrame.right);
      } else if (previousVelocity.y < 0) {
        this.setFrame(this.idleFrame.up);
      } else if (previousVelocity.y > 0) {
        this.setFrame(this.idleFrame.down);
      }
    }
  }
}
