//////////////////////////////////////////////////////SENTENCIA IF//////////////////////////
numeroParaSumarSiete = 0;
if (numeroParaSumarSiete < 10) {

    numeroParaSumarSiete++;
    numeroParaSumarSiete++;
    numeroParaSumarSiete++;
    numeroParaSumarSiete++;
    numeroParaSumarSiete++;
    numeroParaSumarSiete++;
    numeroParaSumarSiete++;

    document.write(numeroParaSumarSiete)
}
///////////////////////////////////////////////////// SENTENCIA WHILE//////////////

let numero = 0;

while (numero < 6) {
    numero++;

    document.write(numero + "<br>")
}

///////////////////////////////////////////////////////SENTENCIA DO WHILE/////////////

let number = 0;

do {

    number++;

    document.write(number + "<br>")
}

while (number <= 6)


////////////////////////////////////////////SENTENCIA BREAK//////////////////////////////

let numerito = 0;

while (numerito < 1000) {
    numerito++;
    document.write(numerito);
    if (numerito == 10) {
        break;
    }
}

document.write("fin")

///////////////////////////////////////////////SENTENCIA FOR//////////////////////////

for (let i = 0; i < 6; i++) {

    document.write(i + "<br>")
}

let i = 6

for (i; i >= 0; i--) {

    document.write(i)
}

//////////////////////////////////////////////////SENTENCIA CONTINUE//////////////////////////////

for (let i = 1; i <= 5; i++) {

    if (i == 4) { //*saltea el numero 4*//
        continue;
    }
    document.write(i + "Hey")
}


/////////////////////////////////////SENTENCIA FOR IN/FOR OF /////////////////////////////

let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales) { /* DEVUELVE EL INDICE O LA POSICION DE LA VARIABLE */
    document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales) { /* DEVUELVE EL VALOR DE LA VARIABLE */
    document.write(animal + "<br>");
}


///////////////////////////////////////////SENTENCIA LABEL/////////////////////////////////

array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "Josefina"];

forRancio:
    for (let array in array2) {
        if (array == 2) {
            for (let array of array1) {
                if (array == "maria") {
                    continue forRancio;
                }
                document.write(array + "<br>");

            }
        } else {
            document.write(array2[array] + "<br>");
        }
    }



////////////////////////////////////////////////FUNCIONES///////////////////////////////

function saludar() {

    respuesta = prompt("¡Hola Leandro! ¿Cómo fue tu día?");
    if (respuesta == "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    }
}

saludar()
saludar()

/////////////////RETURN//////////////////////


function avisar() {
    return "ey cuidado!";
    alert("hola!!!!!!!!!!!!! todo okay")

}

let aviso = avisar();

document.write(aviso)

////////////////////////////////////////////////////////////////PARAMETROS/////////////////




function sumita() {
    let num7 = 32;
    let num8 = 12;
    let restita = num7 + num8;
    document.write(restita);
}

sumita()
sumita()


function su(num3, num4) {
    let r = num3 + num4;
    document.write(r);
    document.write("<br>")
}

su(23, 33)

su(22, 32)




let num1;
num1 = 20;

function sum(num5, num6) {
    let re = num5 + num6;
    document.write(re);
    document.write("<br>")
}

sum(23, 33)

sum(22, 32)


function suma(num1, num2) {
    let res = num1 + num2;
    return res;
}

let resultado = suma(5, 4);

document.write(resultado)





function saludito(name) {
    let phrase = `¡Hola ${name}! ¿Cómo estas?`;
    document.write(phrase)
}

const salu = function(nombre) {
    let frases = `¡Hola ${nombre}! ¿Cómo estas?`;
    document.write(frases)

}

saludito("petrizky");

////////////////////////////////////FUNCION FLECHA///////////////////////////////////////




const greet = vos => {
    let muestraEnPantalla = `¡Hola ${vos}! ¿Cómo estas?`;
    document.write(muestraEnPantalla)
}

greet("Leandro")