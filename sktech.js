function setup() {
    createCanvas(600, 400);
  }
  let x = 300;
  let y = 200;
  let velocidadexBolinha = 1;
  let velocidadeyBolinha = 1; 
  let diametro = 20;
  let raio = diametro/2;
  
  let xRaquete = 5;
  let yRaquete = 150;
  let comprimentoRaquete = 10;
  let alturaRaquete = 90;
  
  function draw() {
    background(0);
    
    Bolinha();
    Raquete();
    
    function Bolinha (){
    circle(x, y, 20);
    x += velocidadexBolinha;
    y += velocidadeyBolinha;
    
    if (y> height){
      velocidadeyBolinha *=-1
    };
    if (y< 0){
      velocidadeyBolinha *=-1
    };
    
    if (x> width){
      velocidadexBolinha *=-1
    };
    if (x< 0){
      velocidadexBolinha *=-1
    };
    }
    
    function Raquete (){
      rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
      if (keyIsDown(UP_ARROW)) {
      yRaquete -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 5;
    }
    }
  }
  