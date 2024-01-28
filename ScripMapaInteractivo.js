// Crear un nuevo juego Phaser
var juego = new Phaser.Game("100%", "100%", Phaser.CANVAS, "MapaInteractivoph");

// Grupo de fondos
var grupoFondos;

/* Variables de botones */
var boton1;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;
var boton7;
var boton8;
var boton9;
var boton10;

// Cuadros de texto
var cuadro;
var cuadro2;
var cuadro3;
var cuadro4;
var cuadro5;
var cuadro6;
var cuadro7;
var cuadro8;
var cuadro9;
var cuadro10;

// Textos en los cuadros
var textoEnCuadro;
var textoEnCuadro2;
var textoEnCuadro3;
var textoEnCuadro4;
var textoEnCuadro5;
var textoEnCuadro6;
var textoEnCuadro7;
var textoEnCuadro8;
var textoEnCuadro9;
var textoEnCuadro10;

// Puntero inicial
var pointerInicial;

/* Variables de fotos */
var foto1;
var foto2;
var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;
var foto9;
var foto10;

// Flechas de navegación
var flechaderecha;
var flechaizquierda;
var flechaarriba;
var flechaabajo;
var jugando = {
  // Precarga de recursos
  preload: function () {
    // Cargar imágenes de fondo para diferentes ubicaciones
    juego.load.image("imgfondo1", "imagenes/InteractiveMap1.png");
    juego.load.image("imgfondo2", "imagenes/InteractiveMap2.png");
    juego.load.image("imgfondo3", "imagenes/InteractiveMap3.png");

    // Cargar imágenes de botones y fotos asociadas a cada ubicación
    juego.load.image("botones", "imagenes/play.png");
    juego.load.image("fotouno", "imagenes/Airport.jpg"); /* Aeropuerto */
    juego.load.image("fotodos", "imagenes/WayneManor.jpg"); /* Mansión Wayne */
    juego.load.image("fototres", "imagenes/RobinsonPark.jpg"); /* Parque Robinson */
    juego.load.image("fotocuatro", "imagenes/ArkhamA.jpg"); /* Arkham */
    juego.load.image("fotocinco", "imagenes/Monarch.jpg"); /* Teatro Monarch */
    juego.load.image("fotoseis", "imagenes/ACE.jpg"); /* Ace Chemicals*/
    juego.load.image("fotosiete", "imagenes/IcebergL.png"); /* Iceberg */
    juego.load.image("fotoocho", "imagenes/GCPD.jpg"); /* GCPD */
    juego.load.image("fotonueve", "imagenes/Blackgate.jpg"); /* Blackgate */
    juego.load.image("fotodiez", "imagenes/WayneTower.jpg"); /* Torre Wayne */
  },

  // Creación de la escena
  create: function () {
    // Crear un grupo para organizar fondos
    grupoFondos = juego.add.group();
    
    // Crear fondos y añadirlos al grupo
    fondo1 = grupoFondos.create(0, 0, "imgfondo1");
    fondo2 = grupoFondos.create(0, 1333, "imgfondo2");
    fondo3 = grupoFondos.create(0, 2670, "imgfondo3");

    // Crear botones para cada ubicación en el mapa
    boton1 = juego.add.button(190, 300, "botones"); /* Aeropuerto */
    boton2 = juego.add.button(2290, 155, "botones"); /* Mansión Wayne */
    boton3 = juego.add.button(1300,2000, "botones"); /* Parque Robinson */
    boton4 = juego.add.button(980, 1180, "botones"); /* Arkham */
    boton5 = juego.add.button(1950, 1050, "botones"); /* Teatro Monarch */
    boton6 = juego.add.button(1750, 1650, "botones"); /* Ace Chemicals*/
    boton7 = juego.add.button(1885,1850, "botones"); /* Iceberg */
    boton8 = juego.add.button(1490, 2650, "botones"); /* GCPD */
    boton9 = juego.add.button(1825, 3450, "botones"); /* Blackgate */
    boton10 = juego.add.button(1100, 2650, "botones"); /* Torre Wayne */
  
        
    // Crear un cuadro (gráfico) en la posición específica con opacidad
    cuadro = juego.add.graphics(200, 350);
    cuadro.beginFill(0x003e4b, 0.8); // Rellenar el cuadro con un color y opacidad específicos (azul oscuro con opacidad 0.8)
    cuadro.drawRect(0, 0, 180, 50); // Dibujar un rectángulo en el cuadro con dimensiones específicas (180x50)
    cuadro.endFill(); // Finalizar el proceso de llenado
    cuadro.visible = false; // Hacer que el cuadro no sea visible inicialmente

    // Los siguientes bloques de código siguen el mismo patrón que el primero, creando cuadros en diferentes posiciones.
    // Esto se repide para los cuadrosde 2 al 10:

    // Igual al primero pero con distancias diferentes:
    cuadro2 = juego.add.graphics(200, 350);
    cuadro2.beginFill(0x003e4b, 0.8);
    cuadro2.drawRect(0, 0, 180, 50);
    cuadro2.endFill();
    cuadro2.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro3 = juego.add.graphics(200, 420);
    cuadro3.beginFill(0x003e4b, 0.8);
    cuadro3.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro3.endFill();
    cuadro3.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro4 = juego.add.graphics(200, 380);
    cuadro4.beginFill(0x003e4b, 0.8);
    cuadro4.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro4.endFill();
    cuadro4.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro5 = juego.add.graphics(200, 350);
    cuadro5.beginFill(0x003e4b, 0.8);
    cuadro5.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro5.endFill();
    cuadro5.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro6 = juego.add.graphics(200, 420);
    cuadro6.beginFill(0x003e4b, 0.8);
    cuadro6.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro6.endFill();
    cuadro6.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro7 = juego.add.graphics(200, 350);
    cuadro7.beginFill(0x003e4b, 0.8);
    cuadro7.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro7.endFill();
    cuadro7.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro8 = juego.add.graphics(200, 400);
    cuadro8.beginFill(0x003e4b, 0.8);
    cuadro8.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro8.endFill();
    cuadro8.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro9 = juego.add.graphics(200, 400);
    cuadro9.beginFill(0x003e4b, 0.8);
    cuadro9.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro9.endFill();
    cuadro9.visible = false;

    // Igual al primero pero con distancias diferentes:
    cuadro10 = juego.add.graphics(200, 400);
    cuadro10.beginFill(0x003e4b, 0.8);
    cuadro10.drawRect(0, 0, 180, 50); // Ajusta el tamaño del cuadro
    cuadro10.endFill();
    cuadro10.visible = false;


  // Crea un objeto de texto para el primer cuadro
  textoEnCuadro = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
  cuadro.addChild(textoEnCuadro); // Agrega el texto al cuadro

// Los siguientes bloques de código siguen el mismo patrón, creando objetos de texto y agregándolos a los cuadros correspondientes.

     textoEnCuadro2 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro2.addChild(textoEnCuadro2); // Agrega el texto al cuadro

     textoEnCuadro3 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro3.addChild(textoEnCuadro3); // Agrega el texto al cuadro

     textoEnCuadro4 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro4.addChild(textoEnCuadro4); // Agrega el texto al cuadro

     textoEnCuadro5 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro5.addChild(textoEnCuadro5); // Agrega el texto al cuadro

     textoEnCuadro6 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro6.addChild(textoEnCuadro6); // Agrega el texto al cuadro

     textoEnCuadro7 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro7.addChild(textoEnCuadro7); // Agrega el texto al cuadro

     textoEnCuadro8 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro8.addChild(textoEnCuadro8); // Agrega el texto al cuadro

     textoEnCuadro9 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro9.addChild(textoEnCuadro9); // Agrega el texto al cuadro

     textoEnCuadro10 = juego.add.text(10, 10, "", { font: "16px Arial", fill: "#ffffff" });
     cuadro10.addChild(textoEnCuadro10); // Agrega el texto al cuadro



// Crear una instancia de Hammer para gestionar eventos táctiles en el canvas del juego
var hammertime = new Hammer(this.game.canvas, {
  touchAction: 'pan-y',
  recognizers: [
      [Hammer.Pan, { direction: Hammer.DIRECTION_ALL }]
  ]
});



// Definir la escala para todos los botones
var buttonScale = 0.08;// Ajustar el ancla del botón para que la escala y la rotación se apliquen correctamente
boton1.anchor.setTo(0.5);// Aplicar la escala al botón
boton1.scale.setTo(buttonScale); // Establecer la rotación del botón a 0 grados
boton1.rotation = 0;// Configurar un evento al hacer clic en el botón
boton1.events.onInputDown.add(function () {
    // Hacer visible la foto, el cuadro y establecer el texto del cuadro
    foto1.visible = true;    cuadro.visible = true; textoEnCuadro.text = "Num apariciones: 10";});

// Configurar un evento al soltar el clic sobre el botón
boton1.events.onInputUp.add(function () {    // Ocultar la foto y el cuadro
    foto1.visible = false;    cuadro.visible = false;});



    // Similar al botón anterior, esto se repite para los botones del 2 al 10:
    boton2.anchor.setTo(0.5);
    boton2.scale.setTo(buttonScale);
    boton2.rotation = 0;
    boton2.events.onInputDown.add(function () { foto2.visible = true, cuadro2.visible = true,  textoEnCuadro2.text = "Num apariciones: 15"; });
    boton2.events.onInputUp.add(function () { foto2.visible = false, cuadro2.visible = false; });

    boton3.anchor.setTo(0.5);
    boton3.scale.setTo(buttonScale);
    boton3.rotation = 0;
    boton3.events.onInputDown.add(function () { foto3.visible = true, cuadro3.visible = true,  textoEnCuadro3.text = "Num apariciones: 13"; });
    boton3.events.onInputUp.add(function () { foto3.visible = false, cuadro3.visible = false; });

    boton4.anchor.setTo(0.5);
    boton4.scale.setTo(buttonScale);
    boton4.rotation = 0;
    boton4.events.onInputDown.add(function () { foto4.visible = true, cuadro4.visible = true,  textoEnCuadro4.text = "Num apariciones: 35"; });
    boton4.events.onInputUp.add(function () { foto4.visible = false, cuadro4.visible = false; });

    boton5.anchor.setTo(0.5);
    boton5.scale.setTo(buttonScale);
    boton5.rotation = 0;
    boton5.events.onInputDown.add(function () { foto5.visible = true, cuadro5.visible = true,  textoEnCuadro5.text = "Num apariciones: 42"; });
    boton5.events.onInputUp.add(function () { foto5.visible = false, cuadro5.visible = false; });

    boton6.anchor.setTo(0.5);
    boton6.scale.setTo(buttonScale);
    boton6.rotation = 0;
    boton6.events.onInputDown.add(function () { foto6.visible = true, cuadro6.visible = true,  textoEnCuadro6.text = "Num apariciones: 47"; });
    boton6.events.onInputUp.add(function () { foto6.visible = false, cuadro6.visible = false; });

    boton7.anchor.setTo(0.5);
    boton7.scale.setTo(buttonScale);
    boton7.rotation = 0;
    boton7.events.onInputDown.add(function () { foto7.visible = true, cuadro7.visible = true,  textoEnCuadro7.text = "Num apariciones: 25"; });
    boton7.events.onInputUp.add(function () { foto7.visible = false, cuadro7.visible = false; });

    boton8.anchor.setTo(0.5);
    boton8.scale.setTo(buttonScale);
    boton8.rotation = 0;
    boton8.events.onInputDown.add(function () { foto8.visible = true, cuadro8.visible = true,  textoEnCuadro8.text = "Num apariciones: 58"; });
    boton8.events.onInputUp.add(function () { foto8.visible = false, cuadro8.visible = false; });

    boton9.anchor.setTo(0.5);
    boton9.scale.setTo(buttonScale);
    boton9.rotation = 0;
    boton9.events.onInputDown.add(function () { foto9.visible = true, cuadro9.visible = true,  textoEnCuadro9.text = "Num apariciones: 67"; });
    boton9.events.onInputUp.add(function () { foto9.visible = false, cuadro9.visible = false; });

    boton10.anchor.setTo(0.5);
    boton10.scale.setTo(buttonScale);
    boton10.rotation = 0;
    boton10.events.onInputDown.add(function () { foto10.visible = true, cuadro10.visible = true,  textoEnCuadro10.text = "Num apariciones: 34"; });
    boton10.events.onInputUp.add(function () { foto10.visible = false, cuadro10.visible = false; });

    
    

    /* Se les dice que foto corresponde a que variable */
    foto1 = juego.add.sprite(180, 80, "fotouno");
    foto1.scale.setTo(0.4);
    foto1.visible = false; /* Se pone la foto originalmente cómo escondida */
    

     // Similar al anterior, esto se repite para las fotos del 2 al 10
    foto2 = juego.add.sprite(180, 80, "fotodos");
    foto2.scale.setTo(0.6);
    foto2.visible = false;

    foto3 = juego.add.sprite(180, 80, "fototres");
    foto3.scale.setTo(0.4);
    foto3.visible = false;


    foto4 = juego.add.sprite(180, 80, "fotocuatro");
    foto4.scale.setTo(0.35);
    foto4.visible = false;


    foto5 = juego.add.sprite(180, 80, "fotocinco");
    foto5.scale.setTo(0.3);
    foto5.visible = false;


    foto6 = juego.add.sprite(180, 80, "fotoseis");
    foto6.scale.setTo(0.25);
    foto6.visible = false;


    foto7 = juego.add.sprite(180, 80, "fotosiete");
    foto7.scale.setTo(0.9);
    foto7.visible = false;

    foto8 = juego.add.sprite(180, 80, "fotoocho");
    foto8.scale.setTo(0.35);
    foto8.visible = false;

    foto9 = juego.add.sprite(180, 80, "fotonueve");
    foto9.scale.setTo(0.75);
    foto9.visible = false;


    foto10 = juego.add.sprite(180, 80, "fotodiez");
    foto10.scale.setTo(0.4);
    foto10.visible = false;


    // Configurar teclas de flecha para el control del teclado
    flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.UP);

    // Configurar el modo de escala del juego para que se redimensione automáticamente
    juego.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    // Configurar un evento para cuando se haga clic en cualquier lugar del juego
    juego.input.onDown.add(() => {
        // Configurar el modo de escala a RESIZE y activar el modo de pantalla completa
        juego.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
        juego.scale.startFullScreen();

    });

    // Crear una instancia de Hammer asociada al canvas del juego
    this.hammer = new Hammer(juego.canvas);

    // Configurar el reconocimiento de gestos de desplazamiento en todas las direcciones
    this.hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // Configurar un manejador de eventos para el gesto de desplazamiento (pan)
    this.hammer.on('pan', this.handlePan.bind(this));



    

  },

  update: function () {
    // Verificar si la tecla de flecha derecha está presionada y si el grupoFondos no está fuera del límite derecho
    if (flechaderecha.isDown && grupoFondos.position.x > -grupoFondos.width + juego.width) {
        grupoFondos.x -= 5; // Desplazar el grupoFondos hacia la izquierda
        moverBotones(-5, 0); // Mover los botones en la dirección opuesta
    }

    // Verificar si la tecla de flecha izquierda está presionada y si el grupoFondos no está fuera del límite izquierdo
    if (flechaizquierda.isDown && grupoFondos.position.x < 0) {
        grupoFondos.x += 5; // Desplazar el grupoFondos hacia la derecha
        moverBotones(5, 0); // Mover los botones en la dirección opuesta
    }

    // Verificar si la tecla de flecha arriba está presionada y si el grupoFondos no está fuera del límite superior
    if (flechaarriba.isDown && grupoFondos.position.y > -grupoFondos.height + juego.height) {
        grupoFondos.y -= 5; // Desplazar el grupoFondos hacia arriba
        moverBotones(0, -5); // Mover los botones en la dirección opuesta
    }

    // Verificar si la tecla de flecha abajo está presionada y si el grupoFondos no está fuera del límite inferior
    if (flechaabajo.isDown && grupoFondos.position.y < 0) {
        grupoFondos.y += 5; // Desplazar el grupoFondos hacia abajo
        moverBotones(0, 5); // Mover los botones en la dirección opuesta
    }

    if (juego.input.pointer1.isDown) {
      // Obtener la posición actual del puntero táctil
      var x = juego.input.x;
      var y = juego.input.y;}



},


// Manejar eventos de gestos táctiles de desplazamiento (pan)
handlePan: function (event) {
  // Verificar si hay un cambio en las coordenadas deltaX o deltaY
  if ((event.deltaX !== 0 || event.deltaY !== 0)) {
      // Invertir la dirección del desplazamiento multiplicando por un factor (0.05)
      let deltaX = event.deltaX * 0.05;
      let deltaY = event.deltaY * 0.05;

      // Obtener las nuevas posiciones después del desplazamiento
      let newPosX = grupoFondos.x + deltaX;
      let newPosY = grupoFondos.y + deltaY;

      // Verificar si las nuevas posiciones están dentro de los límites
      if (newPosX > -grupoFondos.width + juego.width && newPosX < 0) {
          grupoFondos.x = newPosX;
          // Mover los botones en la dirección opuesta al desplazamiento del fondo
          moverBotones(deltaX, 0);
      }

      if (newPosY > -grupoFondos.height + juego.height && newPosY < 0) {
          grupoFondos.y = newPosY;
          // Mover los botones en la dirección opuesta al desplazamiento del fondo
          moverBotones(0, deltaY);
      }
  }
}




  
};
// Añadir el estado "activo" al juego
juego.state.add("activo", jugando);

// Iniciar el estado "activo"
juego.state.start("activo");



// Función para ajustar las posiciones de los botones según un desplazamiento
function moverBotones(deltaX, deltaY) {
  
  // Ajustar la posición de cada botón sumando el desplazamiento
  boton1.position.x += deltaX;
  boton1.position.y += deltaY;
    boton2.position.x += deltaX;
    boton2.position.y += deltaY;

    boton3.position.x += deltaX;
    boton3.position.y += deltaY;

    boton4.position.x += deltaX;
    boton4.position.y += deltaY;

    boton5.position.x += deltaX;
    boton5.position.y += deltaY;

    boton6.position.x += deltaX;
    boton6.position.y += deltaY;

    boton7.position.x += deltaX;
    boton7.position.y += deltaY;

    boton8.position.x += deltaX;
    boton8.position.y += deltaY;

    boton9.position.x += deltaX;
    boton9.position.y += deltaY;

    boton10.position.x += deltaX;
    boton10.position.y += deltaY;
}
