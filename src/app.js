window.addEventListener("resize", function() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
  });

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
    backgroundColor: 0x000000,
    transparent: true,
    
  });

document.body.appendChild(app.view)

this.stage = new PIXI.Container();
app.render(this.stage);

PIXI.loader
    .add('cool','img/cool.jpg')
    .add('tongue','img/tongue.jpg')
    .add('wink','img/wink.jpg')
    .load(imageToDisplay);

function imageToDisplay () {
    this.allText = ["Hello", "Bye", "How are you?", "Where are you from?", "How old are you?"]
    this.allImg = ['cool', 'tongue', 'wink']
    this.fontSizes = [10,25,38,44,5]

    this.randomText = new PIXI.Text(this.allText[Math.floor(Math.random() * this.allText.length)])
    this.randomText.x = 30;
    this.randomText.y = 90;
    this.randomText.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: this.fontSizes[Math.floor(Math.random() * this.fontSizes.length)]
    });

    this.randomImg = new PIXI.Sprite(PIXI.loader.resources[this.allImg[Math.floor(Math.random() * this.allImg.length)]].texture)
    this.randomImg.x = 50;
    this.randomImg.y = 150;

    app.stage.addChild( this.randomText);
    app.stage.addChild( this.randomImg);
}

setInterval(() => {
    app.stage.removeChild( this.randomText)
    app.stage.removeChild( this.randomImg)
    imageToDisplay();

}, 2000);



