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

var emitter = new PIXI.particles.Emitter(this.stage,[PIXI.Texture.fromImage("img/fire.png")], 'emitter.json');

var elapsed = Date.now();

var update = function (){
  requestAnimationFrame(update);

  var now = Date.now();
  emitter.update((now-elapsed) *0.001);
  elapsed=now;
}

emitter.emit=true;

update();