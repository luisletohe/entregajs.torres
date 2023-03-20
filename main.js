console.log ("Ej A:")
for(let i=0; i <10; i=i+1){
    console.log(" hola mundo ")
}

console.log("ejemplo B:")

for( let i=1; i<=10; i=i=1){
    console.log(i);
}

for(let i=10; i>=0; i=i-1){
    console.log(i)
}

console.log("ejemplo D");

for (let i=0; i<=10; i=i+2){
    console.log(i);
}

console.log("ejemplo E:")

let passworduser=parseInt(prompt("ingresa su clave"));
const passwordAuth = 1234;

for(let i=0; i<2; i++){
    if(passworduser===passwordAuth){
        console.log("Su clave es correcta, accede al sistema");
        break;
    }else {
        passworduser=parseInt(prompt("Su clave en incorrecta, intente otra vez"));
    }
}

console.log("Ejemplo F:");
for(let i=0; i<=10; i=i+1){
    if(i%2==0){
        continue;
    }
    console.log(i)
}

alert("ejemplo G:") 

let nombre= prompt("ingrese un nombre: (para salir ingrese:salir)")

while(nombre!="salir"){
    console.log(nombre);
    nombre= prompt("ingrese un nombre: (para salir ingrese:salir)")
}

alert("Ejemplo H:")
const passAutorizado =1234;
let passwordUsuario;

do{
    passwordUsuario=prompt("ingrese su password");
} while (passwordUsuario!=passAutorizado)


