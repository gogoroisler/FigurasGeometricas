const myModule = (()=>{
    
"use strict";
const valueResult = document.getElementById("result");

const btnPerimSq = document.querySelector("#btnPerimSq"),
    btnAreaSq = document.querySelector("#btnAreaSq"),
    btnPerimTri = document.querySelector("#btnPerimTri"),
    btnAreaTri = document.querySelector("#btnAreaTri"),
    btnPerimCir = document.querySelector("#btnPerimCir"),
    btnAreaCir = document.querySelector("#btnAreaCir"),
    btnDiamCir = document.querySelector("#btnDiamCir");

// area y perimetro de cuadrado

const perimSquare = (side) =>  side*4;

const areaSquare = (side) =>  side*side;


btnPerimSq.addEventListener('click',()=>{
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El perimetro de Cuadrado es ${perimSquare(value)} cm`;
    valueResult.innerText = result; //
});

btnAreaSq.addEventListener('click',()=>{
    let inputSide = document.getElementById("inputSide");
    let value =Number(inputSide.value);

    const result = `El area de Cuadrado es ${areaSquare(value)} cm^2`;
    valueResult.innerText = result; //
});


const perimTriangulo = (side1, side2, side3) => side1 + side2 + side3;
const areaTriangulo = (base, altura) => base * altura;

btnPerimTri.addEventListener('click',()=>{
    let inputSide1 = document.getElementById("inputSide1");
    let value1 = Number(inputSide1.value);
    let inputSide2 = document.getElementById("inputSide2");
    let value2 = Number(inputSide2.value);
    let inputSide3 = document.getElementById("inputSide3");
    let value3 = Number(inputSide3.value);


    const result = `El perimetro del Triangulo es ${perimTriangulo(value1,value2,value3)} cm`;
    valueResult.innerText = result;
});

btnAreaTri.addEventListener('click',()=>{
    let inputBase = document.getElementById("inputBase");
    let base = Number(inputBase.value);
    let inputAltura = document.getElementById("inputAltura");
    let altura = Number(inputAltura.value);
    
    const result = `El area del Triangulo es ${areaTriangulo(base,altura)} cm`;
    valueResult.innerText = result;
});

const diamCircle = (radio) => radio *2;
const areaCircle = (radio) => 3.14 * (radio ** 2);
const perimCircle = (radio) => radio * 3.14;


btnDiamCir.addEventListener('click',()=>{
    let inputRadio = document.getElementById('inputRadio');
    let radio = Number(inputRadio.value);

    const result = `El diametro del Circulo es ${diamCircle(radio)} cm`;
    valueResult.innerText = result;
});

btnAreaCir.addEventListener('click',()=>{
    let inputRadio = document.getElementById('inputRadio');
    let radio = Number(inputRadio.value);

    const result = `El area del Circulo es ${areaCircle(radio)} cm`;
    valueResult.innerText=result;
});

btnPerimCir.addEventListener('click',()=>{
    let inputRadio = document.getElementById('inputRadio');
    let radio = Number(inputRadio.value);

    const result = `El perimetro del Circulo es ${perimCircle(diamCircle(radio))} cm`;
    valueResult.innerText=result;
});

})();