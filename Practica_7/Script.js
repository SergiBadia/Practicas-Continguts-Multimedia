


$(document).ready(function(){
	
	var pala = function(x_start,y_end){
		this.color_pala = "white";
		this.position = {x:x_start, y:275};
		this.size = {w:10, h:50};
		this.y_end = y_end;
	};

	pala.prototype.render = function(ctx){
		ctx.fillStyle = this.color_pala;
		ctx.fillRect(this.position.x,this.position.y,this.size.w,this.size.h);
	
	};

	pala.prototype.goUp = function(){
		if(this.position.y >= 100) this.position.y -=10;
	
	};
	
	pala.prototype.goDown = function(){
        if(this.position.y+this.size.h <= this.y_end) this.position.y += 10;
	};

	pala.prototype.setKeys = function(keyUp, keyDown){
        var _this = this;
        $(window).keydown(function(event) {
            //console.log("Key pressed is: " +event.which);
            if ( event.which == keyUp ) {
                _this.goUp()
            }else if( event.which == keyDown ){
                _this.goDown();
            }
        });
    }
	
	var bola = function(x_start,y_start){
		this.color_bola = "white";
		this.position = {x:x_start, y:y_start};
		this.size = {w:8, h:8};
		this.angle = 360*Math.random();
	}
	
	bola.prototype.render = function(ctx){
		ctx.fillStyle = this.color_bola;
		ctx.fillRect(this.position.x,this.position.y,this.size.w,this.size.h);
	
	}	
	
	var socket = io(); 

 
	socket.on('redibujar-marcador', function(puntuacion){ 
		l = puntuacion.l; 
		v = puntuacion.v; 
		CambiaMarcador(l,v); 
	}); 

	
	function CambiaMarcador(local,visitante){
		var l = parseInt(local);
		var v = parseInt(visitante)
		ctx.fillText(l,230,60);
		ctx.fillText(v,350,60);

	};
	
	function updateBola(){ 
		
		//Para que los grados no pasen de 360
		if(Math.abs(bola.angle) > 360){ 
			bola.angle = Math.abs(bola.angle - 360);
			}
		
		
		//Cuando rebota arriba
        if(bola.position.y < 100){ 
			
			if(bola.angle >= 0 && bola.angle <= 180){
				bola.angle = Math.abs(180 - Math.abs(bola.angle)); 
			} else if(bola.angle > 180 && bola.angle <= 360){
				
				bola.angle = 360 - Math.abs(bola.angle - 180);
				
			}
			
			
		//Cuando rebota abajo
		} else if(bola.position.y > myCanvas.height - bola.size.h){ 
            
			if(bola.angle >= 0 && bola.angle <= 180){
				bola.angle = Math.abs(180 - Math.abs(bola.angle));
			} else if(bola.angle > 180 && bola.angle <= 360){
				
				bola.angle = 360 - Math.abs(bola.angle - 180);
				
			}
			
			
        } 
		
		//Cuando rebota en la pala izquierda
		if(Math.round(bola.position.x) == (pala_L.position.x + pala_L.size.w) && 
		(Math.round(bola.position.y) >= Math.round(pala_L.position.y)) && (Math.round(bola.position.y) <= Math.round((pala_L.position.y + pala_L.size.h)))){
			
			
				bola.angle = Math.abs(360 - Math.abs(bola.angle));
			
			
		}
		
		//Cuando rebota en la pala derecha
		
		if(Math.round(bola.position.x) == (pala_R.position.x - pala_R.size.w) && 
		(Math.round(bola.position.y) >= Math.round(pala_R.position.y)) && (Math.round(bola.position.y) <= Math.round((pala_R.position.y + pala_R.size.h)))){
			
			bola.angle = Math.abs(360 - Math.abs(bola.angle));
		}
		
		
		//sumar marcador
		
		if(bola.position.x > 600){
			
			socket.emit('Gol-local');
			bola.position.x = 300;
			bola.position.y = 300;
			bola.angle = 360 * Math.random();
			
			
		}
		
		if(bola.position.x < 0){
			
			socket.emit('Gol-visitante');
			bola.position.x = 300;
			bola.position.y = 300;
			bola.angle = 360 * Math.random();
		}
		
		

         bola.position.x += Math.sin(bola.angle * Math.PI / 180.0); 
         bola.position.y += Math.cos(bola.angle * Math.PI / 180.0); 
    } 

	
	var pala_L = new pala(5,500);
	var pala_R = new pala(myCanvas.width - 15,500);

	pala_L.setKeys(81,65); // Keys: Q, A
	pala_R.setKeys(87,83); // Keys: W, S


	var bola = new bola(200,250);

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	
	//Cargamos los escudos en las variables img y img2
	
	var img = new Image();
	var img2 = new Image();
	img.src = "http://2.bp.blogspot.com/-8MxtrGGyUPs/UoETOJe9kjI/AAAAAAAAAD0/f7F6zYiHTB4/s1600/Escudo_FCB.png";  
	img2.src = "http://www.estecha.com/imagen/escudos-futbol-piedra/escudo-futbol-madrid.jpg";
	cambiaMarcador(0,0);
	
	var l = 0;
	var v = 0;
	


function render(){
	
	//Borramos la pantalla
	ctx.clearRect(0,0,myCanvas.width,myCanvas.height);   
	
	
	//Creamos el campo
	ctx.fillStyle = "black";  
	
	ctx.fillRect(0,100,295,400);
	ctx.fillStyle = "white";
	ctx.fillRect(295,100,10,400);
	ctx.fillStyle = "black";
	ctx.fillRect(305,100,295,400);
	
	//Ponemos los nombres del equipo en el fondo
	ctx.font="30px Georgia";
	ctx.fillStyle = "#3E3131";
	ctx.fillText("Barcelona",75,300);
	ctx.fillText("R.Madrid",380,300);
	ctx.stroke();
	
	//Ponemos los escudos
	
	ctx.drawImage(img, 30, 15, 75, 75);
	ctx.drawImage(img2, 495, 15, 75, 75);
	ctx.stroke();
	
	
	

	
	ctx.fillRect(290,47,20,6);

	CambiaMarcador(l,v);
	ctx.font="40px Georgia";
	
	ctx.stroke();
	
	updateBola();
	

	
	pala_L.render(ctx);
	pala_R.render(ctx);
	bola.render(ctx);
	
};
setInterval(render, 5);

});






