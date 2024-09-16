//  Obtener el elementos por ID
let.parrafo = document.getElementById(parrafo);
console.log(parrafo.textContent);

let boton = document.getElementById("MiBoton")
boton.addEventListener("click", function(){
    parrafo.textContent = "Texto actualizado";
    console.log(parrafo.textContent);
})