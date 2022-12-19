//Declarem variables
let paraulesClau = ["Papel","Piedra","Tijeras","Lagarto", "Spock"];
let texte ="Las reglas son muy sencillas, según Sheldon. " +
            "Las tijeras cortan el papel, el papel envuelve la " +
            "piedra, la piedra aplasta al lagarto, " +
            "el lagarto envenena a Spock, Spock aplasta las tijeras, " +
            "las tijeras decapitan al lagarto, el lagarto devora el papel, " +
            "el papel desaprueba a Spock, Spock desintegra la piedra y, " +
            "como siempre, la piedra aplasta las tijeras.";
let paraulaRandom = "";
let paraulaRandom1 = "";
let opcions = ["piedra", "papel", "tijeras", "lagarto", "spock"];
let nom = "Jugador";
let marcadorJugador = "0";
let marcadorOponent = "0";
let rondaGuanyada = "¡Has ganado esta ronda!";
let rondaPerduda = "¡Has perdido esta ronda!";
let rondaEmpatada = "¡Habéis elegido lo mismo!";
let jugada = "";

//Elements
const eleResultat  = document.getElementById("resultat");
const eleOpcioTriada = document.getElementById("picTriada");
const eleOpcioRandom = document.getElementById("picRandom");
const eleEmpat = document.getElementById("resultat");
const eleBoto = document.getElementById("boto");
const eleNomDefault = document.getElementById("nom");
const eleNom = document.getElementById("nom");
const eleMarcadorOponent = document.getElementById("marcadorOponent");
const eleMarcadorJugador = document.getElementById("marcadorJugador");
const eleOpcioTriadaText = document.getElementById("opcioTriada");

/*Functions*/

/*Funció on passem dues variables, el text on buscar i la paraula a buscar
passem totes dues a minuscules i emprem el metode includes(), si és true
cerquem la posició on està ubicada la paraula amb el mètode indexOf(),
sino escrivim que la paraula buscada no està al text*/
function paraulaACercar(text,paraula) {
    /*let array =  text.split(" ");
    console.log(array);*/
    let textMiniscules = text.toLowerCase();
    let paraulaMiniscula = paraula.toLowerCase();
    let pos = textMiniscules.includes(paraulaMiniscula);
    if(pos){
        document.getElementById("paraula").innerHTML = "La paraula [" + paraula + "] apareix en el texte en la posició: " + textMiniscules.indexOf(paraulaMiniscula) + ".";
    } else {
        document.getElementById("paraula").innerHTML = "La paraula buscada no està al text.";
    }
}

/*Mateixa funció que la anterior però en aquest
 cas mostrem el resultat per consola*/ 
function paraulaACercar1(text,paraula) {
    /*let array =  text.split(" ");
    console.log(array);*/
    let textMiniscules = text.toLowerCase();
    let paraulaMiniscula = paraula.toLowerCase();
    let pos = textMiniscules.includes(paraulaMiniscula);
    if(pos){
        console.log("La paraula [" + paraula + "] apareix en el texte en la posició: " + textMiniscules.indexOf(paraulaMiniscula) + ".");
    } else {
        console.log("La paraula buscada no està al text.");
    }
    opcioRandom(0, paraulesClau.length);
}

/*Funció on creem un bucle for i per a cada paraula 
 del array a cercar utilitzem el mètode anterior
 així ens mostra cada paraula del array si està en el text
 i en quina posició per consola*/
function buscaEleccion(){
    for(i = 0; i < paraulesClau.length; i++){
        paraulaACercar1(texte, paraulesClau[i]);
    }
}

/*
buscaEleccion();
*/

/* 
JOC PIEDRA PAPEL TIJERAS LAGARTO SPOC
*/


/*Funció opcioRandom() on aleatoriament es 
seleccionarà una opció per a l'oponent
per això utilitzarem la funció Math.ramdom()*/
function opcioRandom(min, max){
    
    let nombreRandom = Math.floor (Math.random() * (max-min)+ min);
    let paraulaRandom = paraulesClau[nombreRandom];
    //console.log(paraulaRandom);
    //console.log(nombreRandom);
    paraulaRandom1 = paraulaRandom;
    paraulaRandom1.toLowerCase();
    document.getElementById("opcioRandom").innerHTML = "El oponente ha escogido la opción [" + paraulaRandom1 + "].";
    switch(paraulaRandom1){
        case 'Piedra':
            eleOpcioRandom.innerHTML = ' <img src="/imatges/pedra.png" id="picPedra" alt="pedra">';
            break;
        case 'Papel':
            eleOpcioRandom.innerHTML = '<img src="/imatges/paper.png" id="picPaper" alt="paper">';
            break;
        case 'Tijeras':
            eleOpcioRandom.innerHTML = '<img src="/imatges/tissora.png" id="picTissora" alt="tissores">';
            break;
        case 'Lagarto':
            eleOpcioRandom.innerHTML = '<img src="/imatges/lagarto.png" id="picLagarto" alt="lagarto">';
            break;
        case 'Spock':
            eleOpcioRandom.innerHTML = '<img src="/imatges/spock.png" id="picSpock" alt="spock">';
            break;
    }
    return paraulaRandom1;
}

/*
Funció opcioTriada() iterem l'array de les opcions i
utilitzem la funció 'indexof()' per a veure si la opció introduïda 
està dins l'array, si està dins l'array entrem al switch 
per a seleccionar l'imatge de l'opció triada.
*/
function opcioTriada(opcio) {
    jugada = "";
    let paraulaMinuscula = opcio.toLowerCase();
    let array = paraulaMinuscula.split(" ");
    let posicio = '';
    for(i = 0; i < opcions.length; i++){
        posicio = opcions.indexOf(array[i]);
        if(posicio  != -1){
            jugada = array[i];
            eleOpcioTriadaText.innerHTML = "Has escogido la opción [" + array[i] + "] que está en la posición [" + posicio + "].";
            switch(array[i]){
                case 'piedra':
                    eleOpcioTriada.innerHTML = ' <img src="/imatges/pedra.png" id="picPedra" alt="pedra">';
                    break;
                case 'papel':
                    eleOpcioTriada.innerHTML = '<img src="/imatges/paper.png" id="picPaper" alt="paper">';
                    break;
                case 'tijeras':
                    eleOpcioTriada.innerHTML = '<img src="/imatges/tissora.png" id="picTissora" alt="tissores">';
                    break;
                case 'lagarto':
                    eleOpcioTriada.innerHTML = '<img src="/imatges/lagarto.png" id="picLagarto" alt="lagarto">';
                    break;
                case 'spock':
                    eleOpcioTriada.innerHTML = '<img src="/imatges/spock.png" id="picSpock" alt="spock">';
                    break;
            }
            opcioRandom(0, paraulesClau.length); 
            break;
        } else if(i == 4  && posicio == -1){
            eleResultat.innerHTML = "La opción escogida no es correcta vuelve a intentarlo.";
            break;
        }
    }
        
}
    

//funció marcador a través de if-else 
function marcador(opcioJugador, opcioOponent){
    if(opcioJugador == "piedra" && opcioOponent == "Piedra" ){
        eleEmpat.innerHTML = rondaEmpatada;
    } else if(opcioJugador == "piedra" && (opcioOponent == "Tijeras" || opcioOponent == "Lagarto")){
        marcadorJugador++;
        eleResultat.innerHTML = rondaGuanyada;
    } else if(opcioJugador == "piedra" && (opcioOponent != "Tijeras" || opcioOponent != "Lagarto" || opcioOponent )) {
        marcadorOponent++;
        eleResultat.innerHTML = rondaPerduda;
    }
    if(opcioJugador == "tijeras" && opcioOponent == "Tijeras" ){
        eleEmpat.innerHTML = rondaEmpatada;
    } else if(opcioJugador == "tijeras" && (opcioOponent == "Papel" || opcioOponent == "Lagarto")){
        marcadorJugador++;
        eleResultat.innerHTML = rondaGuanyada;
    } else if(opcioJugador == "tijeras" && (opcioOponent != "Papel" || opcioOponent != "Lagarto")){
        marcadorOponent++;
        eleResultat.innerHTML = rondaPerduda;
    }
    if(opcioJugador == "papel" && opcioOponent == "Papel" ){
        eleEmpat.innerHTML = rondaEmpatada;
    } else if(opcioJugador == "papel" && (opcioOponent == "Piedra" || opcioOponent == "Spock")){
        marcadorJugador++;
        eleResultat.innerHTML = rondaGuanyada;
    } else if(opcioJugador == "papel" && (opcioOponent != "Piedra" || opcioOponent != "Spock")){
        marcadorOponent++;
        eleResultat.innerHTML = rondaPerduda;
    }
    if(opcioJugador == "lagarto" && opcioOponent == "Lagarto" ){
        eleEmpat.innerHTML = rondaEmpatada;
    } else if(opcioJugador == "lagarto" && (opcioOponent == "Spock" || opcioOponent == "Papel")){
        marcadorJugador++;
        eleResultat.innerHTML = rondaGuanyada;
    } else if(opcioJugador == "lagarto" && (opcioOponent != "Spock" || opcioOponent != "Papel")){
        marcadorOponent++;
        eleResultat.innerHTML = rondaPerduda;
    }
    if(opcioJugador == "spock" && opcioOponent == "Spock" ){
        eleEmpat.innerHTML = rondaEmpatada;
    } else if(opcioJugador == "spock" && (opcioOponent == "Tijeras" || opcioOponent == "Piedra")){
        marcadorJugador++;
        eleResultat.innerHTML = rondaGuanyada;
    } else if(opcioJugador == "spock" && (opcioOponent != "Tijeras" || opcioOponent != "Piedra")){
        marcadorOponent++;
        eleResultat.innerHTML = rondaPerduda;
    }
   
}
//FUNCIÓ JUEGO()
function joc(){
    if(eleBoto.value == "Otra ronda"){
        eleBoto.addEventListener("click", altreRonda, false);
    } else {
        nom = prompt("¿Cúal es tu nombre?");
        eleNom.innerHTML =  nom ;
    
        let opcion = prompt("¿Qué opción escoges?");

        opcioTriada(opcion);
        marcador(jugada, paraulaRandom1);
        
        eleMarcadorJugador.innerHTML = marcadorJugador;
        eleMarcadorOponent.innerHTML = marcadorOponent;
    } 
}

//Funció per canviar el botó
function canviarBoto(){
    eleBoto.value = 'Otra ronda';
}
//Funció per seguir jugant, aquí ja no demana el nom perque ja el tenim
function altreRonda(){
    let opcion = prompt("¿Qué opción escoges?");

    opcioTriada(opcion);
    marcador(jugada, paraulaRandom1);

    eleMarcadorJugador.innerHTML = marcadorJugador;
    eleMarcadorOponent.innerHTML = marcadorOponent;
}


//Events 

//event que activa el joc al apretar el botó a través de la funció juego
eleBoto.addEventListener("click", joc, false);
//event que activa el canvi de valor del botó
eleBoto.addEventListener("click", canviarBoto, false);



