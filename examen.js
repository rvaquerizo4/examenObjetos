//Ejercicio 1
const scoreBoard = {
    'Dave': 44,
    'Freyja': 539,
    'Jose': 265,
  };
  

function calculaPuntuacio(scoreBoard){
    let suma;
    suma = (scoreBoard.Dave+ scoreBoard.Freyja + scoreBoard.Jose) / 3;
    return suma;
}

console.log("Ejercicio 1");
calculaPuntuacio(scoreBoard);

//Ejercico 2
function sense(scoreBoard, clau){
    const score2 = scoreBoard;
    let claves = Object.keys(score2);
    for(let i=0; i< claves.length; i++){
        if (claves[i] == clau){
            delete score2[clau];
            score2
            console.log(score2);
        }
    }
}

console.log("Ejercicio 2");
sense(scoreBoard, "Jose");

//Ejercico 3
function Matriu(height, width){
    this.height = height;
    this.width = width;
    this.getHeight = function (height){
        console.log("height = "+height)
    }

    this.getWidth = function (width){
        console.log("width = " + width)
    }

    this.print = function (fromArray){
        console.log(matriz)
    }

    this.fromArray = function (width, height, llista){
        let matriz = new Matriu(width, height);
        for(let j = 0; j < width; ++j){
            let fila=[];
            for(let i = 0; i < height; ++i){
                if (i == llista[i]){
                    fila.push(i);
                }
            }
        }
        matriz.push(fila);
        return matriz;
    }

    this.constVacio = function (width, height){
        let matriz0 = new Matriu(width, height);
        for(let j = 0; j < width; ++j){
            let fila=[];
            for(let i = 0; i < height; ++i){
                fila.push(0);
            }
        }
        matriz0.push(fila);
        return matriz0;
    }
}

let matriu1 = new Matriu(3,3,[1,2,3,4,5,6,7,8,9]);
