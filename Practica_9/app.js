

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var text = "";
var text2 = "";
var text3 = "";
var numero1 = 0;
var numero2 = 0;
var operacion = 0;
var resultado = 0;
var button;
var x = 89.75;
var y = 73.6;
var cont = 0;


function preload() {
	
	//Carga la imagen de la calculadora y la divide en botones de 89.75 x 73.6 pixeles
    game.load.spritesheet('button', 'calculadora.jpg', 89.75, 73.6);
	
}






function create() {
	
	//Color de fondo del canvas blanco
    game.stage.backgroundColor = '#FFFFFF';
	

	
	
    
	
	//Bucles para poner los botones uno al lado del otro
	for(var i=1;i<6;i++){
			
		for(var j=0;j<4;j++){
			
			var button = game.add.button(j*x, i*y, 'button',actionOnClick,this,cont,cont,cont,cont); //Añade botones
			button.name = 'button' + cont;// Ponemos nombre al boton que acabamos de añadir
			cont = cont+1;//Sumamos 1 al contador para ponerle nombre al siguiente boton
			
		}
	}
    
	

}


function actionOnClick(button){
	
	var style = { font: "55px Arial", fill: "#000000", align: "center" }; //Fuente del texto
	
	
	//Funcion para borrar de la pantalla los numeros 
	function limpiar(){
		
		
		
		operacion = 0;
		numero1 = 0;
		numero2 = 0;
		resultado = 0;
		
		var lienzo = game.add.graphics(0,0);
		lienzo.beginFill(0xffffff);
		lienzo.drawRect(0,0,1000,73.6); 
		lienzo.endFill();
		
	}
	
	function reiniciar(){
		
		
		
		operacion = 0;
		numero1 = 0;
		numero2 = 0;
		resultado = 0;
		
		text = "";
		text2="";
		text3="";
		
		var lienzo = game.add.graphics(0,0);
		lienzo.beginFill(0xffffff);
		lienzo.drawRect(0,0,1000,73.6); 
		lienzo.endFill();
		
	}
	
	
	//Boton C
	if(button.name=='button0'){
		reiniciar();
	}
	
	//Boton 7
	if(button.name=='button4'){
		
		
		
		
		if(operacion == 0){
			text = text + '7';
			text3 = text3 + '7';
			
			game.add.text(0, 0, text3, style);
		}else{
			text2 = text2 + '7';
			text3 = text3 + '7';
			game.add.text(0, 0, text3, style);
			
		}
		
		
	}
	
	//Boton 8
	if(button.name=='button5'){
		
		if(operacion == 0){
			text = text + '8';
			text3 = text3 + '8';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '8';
			text3 = text3 + '8';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 9
	if(button.name=='button6'){
		
		if(operacion == 0){
			text = text + '9';
			text3 = text3 + '9';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '9';
			text3 = text3 + '9';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 4
	if(button.name=='button8'){
		if(operacion == 0){
			text = text + '4';
			text3 = text3 + '4';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '4';
			text3 = text3 + '4';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 5
	if(button.name=='button9'){
		if(operacion == 0){
			text = text + '5';
			text3 = text3 + '5';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '5';
			text3 = text3 + '5';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 6
	if(button.name=='button10'){
		if(operacion == 0){
			text = text + '6';
			text3 = text3 + '6';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '6';
			text3 = text3 + '6';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 1
	if(button.name=='button12'){
		if(operacion == 0){
			text = text + '1';
			text3 = text3 + '1';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '1';
			text3 = text3 + '1';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 2
	if(button.name=='button13'){
		if(operacion == 0){
			text = text + '2';
			text3 = text3 + '2';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '2';
			text3 = text3 + '2';
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 3
	if(button.name=='button14'){
		if(operacion == 0){
			text = text + '3';
			text3 = text3 + '3';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '3';
			text3 = text3 + '3';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton 0
	if(button.name=='button16' || button.name == 'button17'){
		if(operacion == 0){
			text = text + '0';
			text3 = text3 + '0';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '0';
			text3 = text3 + '0';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	//Boton .
	
	if(button.name=='button18'){
		if(operacion == 0){
			text = text + '.';
			text3 = text3 + '.';
			
			game.add.text(0, 0, text, style);
		}else{
			text2 = text2 + '.';
			text3 = text3 + '.';
			
			game.add.text(0, 0, text3, style);
			
		}
		
	}
	
	
	
	//Boton de suma
	if(button.name=='button11' || button.name == 'button15'){
		
		operacion = 1;
		text3 = text3 + '+';
		game.add.text(0, 0, text3, style);
		
		
		
	}
	
	
	//Boton de resta
	if(button.name=='button7'){
		
		operacion = 2;
		text3 = text3 + '-';
		game.add.text(0, 0, text3, style);
		
		
	}
	
	//Boton de Multiplicación
	if(button.name=='button3'){
		
		operacion = 3;
		text3 = text3 + 'x';
		game.add.text(0, 0, text3, style);
		
		
	}
	
	//Boton de División
	if(button.name=='button2'){
		
		operacion = 4;
		text3 = text3 + '/';
		game.add.text(0, 0, text3, style);
		
		
	}
	
	
	//Boton de Igual
	if(button.name=='button19'){
		
		if(operacion == 1){
			
			limpiar();
			numero1 = parseFloat(text);
			numero2 = parseFloat(text2);
			resultado = numero1 + numero2;
			text = resultado;
			text2 = "";
			text3 = resultado;
			
			console.log(text);
			game.add.text(0,0,text,style);
			
			
		}
		
		if(operacion == 2){
			
			limpiar();
			numero1 = parseFloat(text);
			numero2 = parseFloat(text2);
			resultado = numero1 - numero2;
			text = resultado;
			text2 = "";
			text3 = resultado;
			
			console.log(text);
			game.add.text(0,0,text,style);
			
			
		}
		
		if(operacion == 3){
			
			limpiar();
			numero1 = parseFloat(text);
			numero2 = parseFloat(text2);
			resultado = numero1 * numero2;
			text = resultado;
			text2 = "";
			text3 = resultado;
			
			console.log(text);
			game.add.text(0,0,text,style);
			
			
		}
		
		if(operacion == 4){
			
			limpiar();
			numero1 = parseFloat(text);
			numero2 = parseFloat(text2);
			resultado = numero1 / numero2;
			text = resultado;
			text2 = "";
			text3 = resultado;
			
			console.log(text);
			game.add.text(0,0,text,style);
			
			
		}
		
	}  
}
