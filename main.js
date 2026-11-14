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

    // BACKGROUNDS
    this.load.image(
        "background",
        "assets/backgrounds/mars-base.png"
    );

    this.load.image(
        "marsLandscape",
        "assets/backgrounds/mars-landscape.png"
    );

    // CHARACTER
    this.load.image(
        "astro",
        "assets/characters/astro.png"
    );

    // MISSION 1 IMAGES
    this.load.image(
        "solarStorm",
        "assets/backgrounds/solarstorm.png"
    );

    this.load.image(
        "protectedShelter",
        "assets/backgrounds/protected-shelter-card.png"
    );

    this.load.image(
        "radiationShield",
        "assets/backgrounds/radiation-shield-card.png"
    );

    // EFFECTS
    this.load.image(
        "warningSymbol",
        "assets/effects/warning-symbol.png"
    );

    // UI
    this.load.image(
        "homeIcon",
        "assets/ui/home-icon.png"
    );

    this.load.image(
        "mission1Banner",
        "assets/ui/mission1-banner.png"
    );

    this.load.image(
        "resourcePower",
        "assets/ui/resource-power.png"
    );

    this.load.image(
        "resourceLifeSupport",
        "assets/ui/resource-life-support.png"
    );

    this.load.image(
        "resourceFood",
        "assets/ui/resource-food.png"
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

  
    // ===================================
    // RED HORIZON GAME LOGO
    // ===================================

    const logo = this.add.container(640, 105);

    // Title shadow
    const titleShadow = this.add.text(0, 8, "RED HORIZON", {
        fontFamily: "Arial",
        fontSize: "76px",
        fontStyle: "bold italic",
        color: "#ffffff",
        stroke: "#4b160d",
        strokeThickness: 13
    }).setOrigin(0.5);

    // Main title
    const title = this.add.text(0, 0, "RED HORIZON", {
        fontFamily: "Arial",
        fontSize: "76px",
        fontStyle: "bold italic",
        color: "#ffffff",
        stroke: "#a83216",
        strokeThickness: 8
    }).setOrigin(0.5);

    logo.add([titleShadow, title]);

    // Subtitle banner
    const banner = this.add.graphics();

    banner.fillStyle(0x8e2915, 1);
    banner.fillRoundedRect(-220, 58, 440, 51, 16);

    banner.fillStyle(0xf04b1c, 1);
    banner.fillRoundedRect(-215, 55, 430, 45, 14);

    banner.lineStyle(3, 0xffa13b, 1);
    banner.strokeRoundedRect(-215, 55, 430, 45, 14);

    logo.add(banner);

    // Subtitle text
    const subtitle = this.add.text(
        0, 77,
        "JUNIOR ASTRONAUT MISSION",
        {
            fontFamily: "Arial",
            fontSize: "27px",
            fontStyle: "bold italic",
            color: "#ffffff",
            stroke: "#a83216",
            strokeThickness: 2
        }
    ).setOrigin(0.5);

    logo.add(subtitle);
  

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

// Click animation and open ASTRO dialogue
hitArea.on("pointerdown", () => {
    hitArea.disableInteractive();

    this.tweens.add({
        targets: startButton,
        scale: 0.96,
        duration: 100,
        yoyo: true,
        onComplete: () => {
            startButton.emit("pointerdown");
        }
    });
});



    
    // ====================================
    // REDESIGNED ASTRO INTRODUCTION
    // ====================================

    startButton.on("pointerdown", () => {

        // Hide only the Start Mission button.
        // Keep the background and game logo visible.
        startButton.setVisible(false);

        // Move ASTRO to the bottom-left.
        this.tweens.killTweensOf(astro);
        astro.setPosition(175, 590);
        astro.setDisplaySize(285, 340);
        astro.setDepth(10);

        // Create the futuristic dialogue panel.
        const panel = this.add.graphics().setDepth(5);

        // Panel shadow
        panel.fillStyle(0x080d20, 0.95);
        panel.fillRoundedRect(55, 505, 1170, 180, 24);

        // Main navy panel
        panel.fillStyle(0x172440, 0.98);
        panel.fillRoundedRect(55, 495, 1170, 180, 24);

        // Orange border
        panel.lineStyle(6, 0xff9c28, 1);
        panel.strokeRoundedRect(55, 495, 1170, 180, 24);

        // Inner blue border
        panel.lineStyle(2, 0x3a83b8, 1);
        panel.strokeRoundedRect(72, 512, 1136, 146, 17);

        // ASTRO nameplate
        const namePlate = this.add.graphics().setDepth(11);

        namePlate.fillStyle(0x09162d, 1);
        namePlate.fillRoundedRect(290, 468, 250, 62, 15);

        namePlate.lineStyle(5, 0xff9c28, 1);
        namePlate.strokeRoundedRect(290, 468, 250, 62, 15);

        const nameText = this.add.text(415, 499, "ASTRO", {
            fontFamily: "Arial",
            fontSize: "34px",
            fontStyle: "bold",
            color: "#55dcff",
            letterSpacing: 4
        }).setOrigin(0.5).setDepth(12);

     
// Dialogue text
const dialogueText = this.add.text(
    350, 545,
    "Welcome to Mars, Commander! I'm ASTRO, your robot buddy.\nWe have an important mission: keep our Mars base safe and running!",
    {
        fontFamily: "Arial",
        fontSize: "23px",
        color: "#ffffff",
        lineSpacing: 14,
        wordWrap: {
            width: 640
        }
    }
).setDepth(12);


        // NEXT button
        const nextButton = this.add.container(1120, 635)
            .setDepth(15);

        const nextGraphic = this.add.graphics();

        nextGraphic.fillStyle(0x9d390b, 1);
        nextGraphic.fillRoundedRect(-112, -36, 224, 76, 25);

        nextGraphic.fillStyle(0xff9a00, 1);
        nextGraphic.fillRoundedRect(-108, -42, 216, 70, 23);

        nextGraphic.fillStyle(0xffc52e, 1);
        nextGraphic.fillRoundedRect(-100, -38, 200, 42, 18);

        nextGraphic.lineStyle(4, 0xffe17b, 1);
        nextGraphic.strokeRoundedRect(-108, -42, 216, 70, 23);

        const nextText = this.add.text(0, -3, "NEXT  ➜", {
            fontFamily: "Arial",
            fontSize: "29px",
            fontStyle: "bold",
            color: "#ffffff",
            stroke: "#9b390b",
            strokeThickness: 4
        }).setOrigin(0.5);

        nextButton.add([nextGraphic, nextText]);

        const nextHitArea = this.add.zone(1120, 635, 225, 85)
            .setDepth(20)
            .setInteractive({
                useHandCursor: true
            });

        // Hover effect
        nextHitArea.on("pointerover", () => {
            this.tweens.add({
                targets: nextButton,
                scale: 1.06,
                duration: 120
            });
        });

        nextHitArea.on("pointerout", () => {
            this.tweens.add({
                targets: nextButton,
                scale: 1,
                duration: 120
            });
        });

        // Dialogue sequence
        const dialogueLines = [
            "Welcome to Mars, Commander! I'm ASTRO, your robot buddy.\nWe have an important mission: keep our Mars base safe and running!",

            "But remember, our resources are limited. Every decision matters!",

            "Excellent! Your first mission is about to begin, Commander!"
        ];

        let currentLine = 0;

        nextHitArea.on("pointerdown", () => {

            currentLine++;

            if (currentLine < dialogueLines.length) {

                dialogueText.setText(dialogueLines[currentLine]);

                if (currentLine === 2) {
                    nextText.setText("LET'S GO! ➜");
                }

            } else {

                panel.destroy();
                namePlate.destroy();
                nameText.destroy();
                dialogueText.destroy();
                nextButton.destroy();
                nextHitArea.destroy();

                showMissionOne(this);
            }
        });

        // ASTRO floating animation
              this.tweens.add({
            targets: astro,
            y: 580,
            duration: 1100,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut"
        });

    });

} // ADD THIS BRACE



// ========================================
// MISSION 1 PLACEHOLDER
// ========================================



function showMissionOne(scene) {

    // Clear previous screen
    scene.children.removeAll();

    // Mars background
    scene.add.image(640, 360, "background")
        .setDisplaySize(1280, 720);

    // Dark overlay
    scene.add.rectangle(
        640, 360, 1280, 720, 0x160b20, 0.25
    );

    // Animated solar storm
    const storm = scene.add.container(1080, 210);

    const glow = scene.add.circle(0, 0, 115, 0xff3300, 0.35);
    const sun = scene.add.circle(0, 0, 75, 0xff6a00);
    const sunCore = scene.add.circle(-15, -15, 35, 0xffc13b);

    storm.add([glow, sun, sunCore]);

    scene.tweens.add({
        targets: storm,
        scale: { from: 0.95, to: 1.08 },
        duration: 1000,
        yoyo: true,
        repeat: -1
    });

    // Mission heading
    scene.add.text(160, 35, "MISSION 1", {
        fontSize: "38px",
        fontStyle: "bold",
        color: "#ffb52e",
        backgroundColor: "#742b19",
        padding: { x: 20, y: 10 }
    });

    scene.add.text(160, 105, "⚠ SOLAR STORM ALERT", {
        fontSize: "42px",
        fontStyle: "bold",
        color: "#ffffff",
        backgroundColor: "#a92e24",
        padding: { x: 20, y: 12 }
    });

    // ASTRO character
    const astro = scene.add.image(155, 430, "astro")
        .setDisplaySize(230, 280);

    scene.tweens.add({
        targets: astro,
        y: 415,
        duration: 1000,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut"
    });

    // ASTRO dialogue panel
    scene.add.rectangle(
        590, 350, 500, 180, 0x142943, 0.96
    ).setStrokeStyle(5, 0x26d9f5);

    scene.add.text(365, 275, "ASTRO", {
        fontSize: "30px",
        fontStyle: "bold",
        color: "#50eaff"
    });

    scene.add.text(
        365, 325,
        "Warning! A powerful solar storm is approaching. The astronauts need protection from harmful radiation!",
        {
            fontSize: "24px",
            color: "#ffffff",
            wordWrap: { width: 440 },
            lineSpacing: 8
        }
    );

    // Question banner
    scene.add.text(640, 525, "WHAT WILL YOU DO?", {
        fontSize: "32px",
        fontStyle: "bold",
        color: "#ffffff",
        backgroundColor: "#ff9f00",
        padding: { x: 25, y: 12 }
    }).setOrigin(0.5);

    // Choice A
    const choiceA = scene.add.rectangle(
        335, 635, 560, 145, 0x38202f
    ).setStrokeStyle(5, 0xffae28)
     .setInteractive({ useHandCursor: true });

    scene.add.text(90, 580,
        "A  Activate extra radiation shielding.\n\nPOWER -15", {
        fontSize: "22px",
        color: "#ffffff",
        wordWrap: { width: 480 },
        lineSpacing: 8
    });

    // Choice B
    const choiceB = scene.add.rectangle(
        945, 635, 560, 145, 0x142c49
    ).setStrokeStyle(5, 0x20d5f5)
     .setInteractive({ useHandCursor: true });

    scene.add.text(700, 580,
        "B  Move everyone into the protected shelter.\n\nLIFE SUPPORT -15", {
        fontSize: "22px",
        color: "#ffffff",
        wordWrap: { width: 480 },
        lineSpacing: 8
    });

    // Choice A interaction
    choiceA.on("pointerdown", () => {
        scene.add.text(640, 480,
            "Radiation shielding activated!", {
            fontSize: "25px",
            color: "#ffcf55",
            backgroundColor: "#421b25",
            padding: { x: 15, y: 10 }
        }).setOrigin(0.5);

        choiceA.disableInteractive();
        choiceB.disableInteractive();
    });

    // Choice B interaction
    choiceB.on("pointerdown", () => {
        scene.add.text(640, 480,
            "Astronauts moved into the shelter!", {
            fontSize: "25px",
            color: "#50eaff",
            backgroundColor: "#142943",
            padding: { x: 15, y: 10 }
        }).setOrigin(0.5);

        choiceA.disableInteractive();
        choiceB.disableInteractive();
    });
}



    // =====================================
    // BACKGROUND
    // =====================================

    scene.add.image(640, 360, "background")
        .setDisplaySize(1280, 720);

    scene.add.rectangle(640, 360, 1280, 720, 0x160b20, 0.18);

    // =====================================
    // RESOURCE VALUES
    // =====================================

    const resources = {
        power: 10,
        life: 10,
        food: 10
    };

    const resourceTexts = {};

    function createResource(x, label, icon, color, key) {

        const box = scene.add.container(x, 65);

        const bg = scene.add.rectangle(
            0, 0, 175, 78, 0x101b37
        ).setStrokeStyle(3, color);

        const iconText = scene.add.text(-65, -5, icon, {
            fontSize: "30px"
        }).setOrigin(0.5);

        const labelText = scene.add.text(-5, -20, label, {
            fontSize: "17px",
            fontStyle: "bold",
            color: "#ffffff"
        }).setOrigin(0.5);

        resourceTexts[key] = scene.add.text(
            -5, 10, resources[key] + " / 10", {
                fontSize: "23px",
                fontStyle: "bold",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        const bar = scene.add.rectangle(
            0, 36, 140, 7, color
        );

        box.add([bg, iconText, labelText, resourceTexts[key], bar]);
    }

    createResource(835, "POWER", "⚡", 0xffb52e, "power");
    createResource(1045, "LIFE SUPPORT", "💧", 0x25dfff, "life");
    createResource(1230, "FOOD", "🌱", 0x83e94d, "food");

    // =====================================
    // MISSION HEADER
    // =====================================

    scene.add.rectangle(180, 45, 250, 48, 0xffa12b)
        .setStrokeStyle(3, 0xffdf70);

    scene.add.text(180, 45, "MISSION 1", {
        fontSize: "27px",
        fontStyle: "bold",
        color: "#321426"
    }).setOrigin(0.5);

    scene.add.rectangle(350, 112, 580, 65, 0xa92c22)
        .setStrokeStyle(4, 0xffa12b);

    scene.add.text(350, 112, "⚠  SOLAR STORM ALERT", {
        fontSize: "34px",
        fontStyle: "bold",
        color: "#ffffff"
    }).setOrigin(0.5);

    // =====================================
    // ASTRO CHARACTER
    // =====================================

    const astro = scene.add.image(145, 365, "astro")
        .setDisplaySize(245, 300)
        .setDepth(5);

    scene.tweens.add({
        targets: astro,
        y: 350,
        duration: 1100,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut"
    });

    // =====================================
    // ASTRO DIALOGUE PANEL
    // =====================================

    scene.add.rectangle(565, 330, 510, 185, 0x10213d, 0.97)
        .setStrokeStyle(5, 0x35c9ed);

    scene.add.rectangle(430, 245, 200, 55, 0x092342)
        .setStrokeStyle(4, 0xffa12b);

    scene.add.text(430, 245, "ASTRO", {
        fontSize: "30px",
        fontStyle: "bold",
        color: "#52e5ff"
    }).setOrigin(0.5);

    const dialogue = scene.add.text(
        330, 285,
        "Warning! A powerful solar storm is approaching. The astronauts need protection from harmful radiation!",
        {
            fontSize: "24px",
            fontStyle: "bold",
            color: "#ffffff",
            lineSpacing: 8,
            wordWrap: { width: 440 }
        }
    );

    // =====================================
    // SOLAR STORM DISPLAY
    // =====================================

    const stormPanel = scene.add.rectangle(
        1090, 310, 310, 205, 0x351027
    ).setStrokeStyle(5, 0xff684c);

    const stormGlow = scene.add.circle(
        1190, 260, 65, 0xff3b12, 0.5
    );

    const stormSun = scene.add.circle(
        1190, 260, 42, 0xffa12b
    );

    const stormWarning = scene.add.text(
        990, 310, "⚠", {
            fontSize: "65px",
            color: "#ff4b35"
        }
    ).setOrigin(0.5);

    scene.tweens.add({
        targets: stormGlow,
        scale: { from: 0.9, to: 1.2 },
        alpha: { from: 0.4, to: 0.9 },
        duration: 1000,
        yoyo: true,
        repeat: -1
    });

    scene.tweens.add({
        targets: stormWarning,
        alpha: 0.2,
        duration: 450,
        yoyo: true,
        repeat: -1
    });

    // =====================================
    // QUESTION BANNER
    // =====================================

    scene.add.rectangle(640, 530, 380, 55, 0xffa500)
        .setStrokeStyle(4, 0xffdf72);

    scene.add.text(640, 530, "WHAT WILL YOU DO?", {
        fontSize: "27px",
        fontStyle: "bold",
        color: "#ffffff"
    }).setOrigin(0.5);

    // =====================================
    // CHOICE CARDS
    // =====================================

    function createChoice(x, letter, description, consequence, color, callback) {

        const card = scene.add.container(x, 625);

        const panel = scene.add.rectangle(
            0, 0, 555, 165, 0x142440
        ).setStrokeStyle(5, color);

        const letterBox = scene.add.rectangle(
            -235, -38, 75, 75, color
        ).setStrokeStyle(3, 0xffffff);

        const letterText = scene.add.text(
            -235, -38, letter, {
                fontSize: "48px",
                fontStyle: "bold",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        const descriptionText = scene.add.text(
            -180, -55, description, {
                fontSize: "21px",
                fontStyle: "bold",
                color: "#ffffff",
                wordWrap: { width: 365 },
                lineSpacing: 5
            }
        );

        const divider = scene.add.rectangle(
            0, 25, 545, 3, color
        );

        const consequenceText = scene.add.text(
            -250, 55, consequence, {
                fontSize: "17px",
                color: "#ffffff",
                wordWrap: { width: 490 }
            }
        );

        card.add([
            panel,
            letterBox,
            letterText,
            descriptionText,
            divider,
            consequenceText
        ]);

        const hitArea = scene.add.zone(
            x, 625, 555, 165
        ).setInteractive({ useHandCursor: true });

        hitArea.on("pointerover", () => {
            scene.tweens.add({
                targets: card,
                scale: 1.04,
                duration: 150
            });
        });

        hitArea.on("pointerout", () => {
            scene.tweens.add({
                targets: card,
                scale: 1,
                duration: 150
            });
        });

        hitArea.on("pointerdown", () => {
            hitArea.disableInteractive();
            callback();
        });

        return { card, hitArea };
    }

    // =====================================
    // CHOICE A
    // =====================================

    const choiceA = createChoice(
        330,
        "A",
        "Activate extra radiation shielding.",
        "Consequence: Better radiation protection, but power decreases.",
        0xffa629,
        () => applyChoice("A")
    );

    // =====================================
    // CHOICE B
    // =====================================

    const choiceB = createChoice(
        950,
        "B",
        "Move everyone into the existing protected shelter.",
        "Consequence: Astronauts stay protected, but life support supplies decrease.",
        0x20c9ed,
        () => applyChoice("B")
    );

    // =====================================
    // APPLY PLAYER DECISION
    // =====================================

    function applyChoice(option) {

        if (option === "A") {

            resources.power = Math.max(0, resources.power - 1);

            dialogue.setText(
                "Good decision, Commander! Extra radiation shielding is now active. The astronauts have better protection, but the base has used some electricity."
            );

            resourceTexts.power.setText(resources.power + " / 10");
        }

        if (option === "B") {

            resources.life = Math.max(0, resources.life - 1);

            dialogue.setText(
                "The astronauts are safely inside the protected shelter, Commander! However, using emergency supplies has reduced our life support resources."
            );

            resourceTexts.life.setText(resources.life + " / 10");
        }

        choiceA.hitArea.disableInteractive();
        choiceB.hitArea.disableInteractive();

        const result = scene.add.text(
            640, 455,
            "MISSION DECISION RECORDED!",
            {
                fontSize: "25px",
                fontStyle: "bold",
                color: "#ffe15b",
                stroke: "#57200c",
                strokeThickness: 5
            }
        ).setOrigin(0.5);

        scene.tweens.add({
            targets: result,
            scale: { from: 0.8, to: 1.1 },
            duration: 500,
            yoyo: true
        });
    }
