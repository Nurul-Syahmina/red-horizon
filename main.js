
// ========================================
// RED HORIZON: JUNIOR ASTRONAUT MISSION
// Opening / Title Screen
// ========================================

const config = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    parent: "game-container",

    backgroundColor: "#a8442e",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);


// ========================================
// LOAD IMAGES
// ========================================

function preload() {

    this.load.image(
        "background",
        "assets/backgrounds/mars-base.png"
    );

    this.load.image(
        "astro",
        "assets/characters/astro.png"
    );
}


// ========================================
// CREATE TITLE SCREEN
// ========================================

function create() {

    const scene = this;

    // Background illustration
    this.add.image(640, 360, "background")
        .setDisplaySize(1280, 720);

    // Dark transparent overlay behind title
    this.add.rectangle(
        640, 115, 700, 155, 0x251329, 0.35
    );

    // Game title
    this.add.text(640, 95, "RED HORIZON", {
        fontFamily: "Arial",
        fontSize: "76px",
        fontStyle: "bold",
        color: "#ffffff",
        stroke: "#8d2c1d",
        strokeThickness: 10
    }).setOrigin(0.5);

    // Subtitle
    this.add.text(
        640, 160,
        "JUNIOR ASTRONAUT MISSION",
        {
            fontFamily: "Arial",
            fontSize: "30px",
            fontStyle: "bold",
            color: "#fff0cf"
        }
    ).setOrigin(0.5);

    // Welcome message
    this.add.text(
        640, 250,
        "WELCOME TO MARS, COMMANDER!",
        {
            fontFamily: "Arial",
            fontSize: "30px",
            fontStyle: "bold",
            color: "#ffffff",
            backgroundColor: "#873a32",
            padding: {
                x: 18,
                y: 12
            }
        }
    ).setOrigin(0.5);


    // ====================================
    // ASTRO CHARACTER
    // ====================================

    const astro = this.add.image(
        640, 545, "astro"
    );

    astro.setDisplaySize(235, 300);

    // ASTRO floating animation
    this.tweens.add({
        targets: astro,
        y: 530,
        duration: 1200,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut"
    });


    // ====================================
    // START MISSION BUTTON
    // ====================================

    const startButton = this.add.rectangle(
        640, 650,
        350, 75,
        0xffa51f
    );

    startButton
        .setStrokeStyle(4, 0xffdf82)
        .setInteractive({
            useHandCursor: true
        });

    const buttonText = this.add.text(
        640, 650,
        "START MISSION  ▶",
        {
            fontFamily: "Arial",
            fontSize: "30px",
            fontStyle: "bold",
            color: "#442018"
        }
    ).setOrigin(0.5);


    // Button hover effect
    startButton.on("pointerover", () => {
        startButton.setFillStyle(0xffc044);
        startButton.setScale(1.04);
        buttonText.setScale(1.04);
    });

    startButton.on("pointerout", () => {
        startButton.setFillStyle(0xffa51f);
        startButton.setScale(1);
        buttonText.setScale(1);
    });


    // ====================================
    // DIALOGUE SCREEN
    // ====================================

    startButton.on("pointerdown", () => {

        // Hide title screen elements
        startButton.setVisible(false);
        buttonText.setVisible(false);

        scene.children.list.forEach((item) => {
            if (
                item.type === "Text" ||
                item.type === "Image" ||
                item.type === "Rectangle"
            ) {
                if (
                    item !== astro &&
                    item !== startButton &&
                    item !== buttonText
                ) {
                    item.setVisible(false);
                }
            }
        });

        // Dialogue background
        const dialogueBox = scene.add.rectangle(
            640, 570,
            950, 190,
            0x18243a,
            0.97
        );

        dialogueBox.setStrokeStyle(
            4, 0xffa343
        );

        // ASTRO name
        const nameText = scene.add.text(
            200, 505,
            "ASTRO",
            {
                fontSize: "27px",
                fontStyle: "bold",
                color: "#55dcff"
            }
        );

        // Dialogue
        const dialogueText = scene.add.text(
            200, 550,
            "Welcome to Mars, Commander! I'm ASTRO, your robot buddy.\nWe have an important mission: keep our Mars base safe and running!",
            {
                fontSize: "23px",
                color: "#ffffff",
                lineSpacing: 12,
                wordWrap: {
                    width: 850
                }
            }
        );

        // Next button
        const nextButton = scene.add.text(
            1100, 635,
            "NEXT  →",
            {
                fontSize: "23px",
                color: "#ffb45c",
                backgroundColor: "#34445e",
                padding: {
                    x: 18,
                    y: 12
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({
            useHandCursor: true
        });

        let dialogueStep = 1;

        nextButton.on("pointerdown", () => {

            dialogueStep++;

            if (dialogueStep === 2) {

                dialogueText.setText(
                    "But remember, our resources are limited. Every decision matters!"
                );

            } else if (dialogueStep === 3) {

                dialogueText.setText(
                    "Excellent! Your first mission is about to begin, Commander!"
                );

                nextButton.setText("LET'S GO!  →");

            } else {

                // Mission 1 placeholder
                dialogueBox.destroy();
                nameText.destroy();
                dialogueText.destroy();
                nextButton.destroy();

                showMissionOne(scene);
            }
        });
    });
}


// ========================================
// MISSION 1 PLACEHOLDER
// ========================================

function showMissionOne(scene) {

    scene.add.rectangle(
        640, 360,
        1280, 720,
        0x381d32
    );

    scene.add.text(
        640, 150,
        "MISSION 1",
        {
            fontSize: "55px",
            fontStyle: "bold",
            color: "#ffbd68"
        }
    ).setOrigin(0.5);

    scene.add.text(
        640, 250,
        "SOLAR STORM ALERT",
        {
            fontSize: "42px",
            fontStyle: "bold",
            color: "#ffffff"
        }
    ).setOrigin(0.5);

    scene.add.text(
        640, 360,
        "A powerful solar storm is approaching!\n\nProtect the astronauts, Commander!",
        {
            fontSize: "28px",
            color: "#ffffff",
            align: "center",
            lineSpacing: 15
        }
    ).setOrigin(0.5);

    scene.add.text(
        640, 580,
        "MISSION 1 SCREEN - COMING NEXT",
        {
            fontSize: "23px",
            color: "#ffbd68"
        }
    ).setOrigin(0.5);
}
