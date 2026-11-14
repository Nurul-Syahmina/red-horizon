
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


   
// ===================================
// START MISSION BUTTON
// ===================================

const startButton = this.add.container(640, 625);

// 1. Button shadow
const shadow = this.add.graphics();
shadow.fillStyle(0x54200f, 1);
shadow.fillRoundedRect(-210, -43, 420, 100, 50);
shadow.y = 10;
startButton.add(shadow);

// 2. Outer dark border
const border = this.add.graphics();
border.fillStyle(0x7b2d12, 1);
border.fillRoundedRect(-210, -50, 420, 100, 50);
startButton.add(border);

// 3. Main golden button
const button = this.add.graphics();
button.fillStyle(0xffa000, 1);
button.fillRoundedRect(-204, -47, 408, 88, 44);

// 4. Lighter golden upper layer
button.fillStyle(0xffc02e, 1);
button.fillRoundedRect(-198, -43, 396, 57, 38);

// 5. Glossy highlight
button.fillStyle(0xffdf75, 0.75);
button.fillRoundedRect(-175, -39, 350, 13, 8);

// 6. Bottom orange shade
button.fillStyle(0xf58200, 1);
button.fillRoundedRect(-190, 18, 380, 22, 12);

startButton.add(button);

// 7. Button outline
const outline = this.add.graphics();
outline.lineStyle(4, 0xffdf79, 1);
outline.strokeRoundedRect(-204, -47, 408, 88, 44);
startButton.add(outline);

// 8. Button text
const buttonText = this.add.text(-28, 0, "START MISSION", {
    fontFamily: "Arial",
    fontSize: "32px",
    fontStyle: "bold",
    color: "#ffffff",
    stroke: "#71300f",
    strokeThickness: 6
}).setOrigin(0.5);

startButton.add(buttonText);

// 9. Play icon
const playIcon = this.add.graphics();
playIcon.fillStyle(0x54200f, 1);
playIcon.fillTriangle(155, -16, 155, 16, 180, 0);
startButton.add(playIcon);

// 10. Clickable area
const hitArea = this.add.zone(640, 625, 420, 100)
    .setInteractive({ useHandCursor: true });

// Hover animation
hitArea.on("pointerover", () => {
    this.tweens.add({
        targets: startButton,
        scale: 1.05,
        duration: 150,
        ease: "Back.Out"
    });
});

hitArea.on("pointerout", () => {
    this.tweens.add({
        targets: startButton,
        scale: 1,
        duration: 150
    });
});

// Click animation and start the next scene
hitArea.on("pointerdown", () => {
    this.tweens.add({
        targets: startButton,
        scale: 0.96,
        duration: 100,
        yoyo: true,
        onComplete: () => {
            this.scene.start("intro");
        }
    });
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
