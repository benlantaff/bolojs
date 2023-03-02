class NonPlayer extends Entity {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, "Npc");
    console.log(textureKey);

    const anims = scene.anims;
    const frameRate = 9;
    this.textureKey = textureKey;
    this.speed = 100;

    anims.create({
      key: "left",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 6,
        end: 8,
        zeroPad: 2,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    anims.create({
      key: "right",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 0,
        end: 11,
        zeroPad: 2,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    anims.create({
      key: "up",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 3,
        end: 5,
        zeroPad: 2,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    anims.create({
      key: "down",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 0,
        end: 2,
        zeroPad: 2,
      }),
      frameRate: frameRate,
      repeat: -1,
    });

    let dir = Math.floor(Math.random() * 4);
    console.log(dir);
    switch (dir) {
      case 0:
        this.body.setVelocity(0, -this.speed); //up
        this.anims.play("up");
        break;
      case 1:
        this.body.setVelocity(-this.speed, 0); //left
        this.anims.play("left");
        break;
      case 2:
        this.body.setVelocity(0, this.speed); //down
        this.anims.play("down");
        break;
      case 3:
        this.body.setVelocity(this.speed, 0); //right
        this.anims.play("right");
        break;
      default:
        break;
    }

    console.log(this.body.blocked);
    this.body.setCollideWorldBounds(true);
  } // end constructor

  update() {
    const { speed } = this; //this.speed
    const npcBlocked = this.body.blocked;

    if (
      npcBlocked.down ||
      npcBlocked.up ||
      npcBlocked.left ||
      npcBlocked.right
    ) {
      let possibleDirections = [];
      for (const direction in npcBlocked) {
        possibleDirections.push(direction);
      }
      const newDirection =
        possibleDirections[Math.floor(Math.random() * 4) + 1];
      switch (newDirection) {
        case "up":
          this.body.setVelocity(0, -this.speed); //up
          this.anims.play("up");
          break;
        case "left":
          this.body.setVelocity(-this.speed, 0); //left
          this.anims.play("left");
          break;
        case "down":
          this.body.setVelocity(0, this.speed); //down
          this.anims.play("down");
          break;
        case "right":
          this.body.setVelocity(this.speed, 0); //right
          this.anims.play("right");
          break;
        case "none":
          this.body.setVelocity(0, 0); //right
          this.anims.stop();
          break;
        default:
          break;
      }
    }
  } // end update
} // end class
