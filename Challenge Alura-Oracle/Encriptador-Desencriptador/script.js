var bandera = true;

function encriptar() {

    var p = document.getElementById("entrada").value;
    if (bandera && p!="") {
        if (p == p.toLocaleLowerCase()) {
            p = p.replace(/e/g, 'enter');
            p = p.replace(/i/g, 'imes');
            p = p.replace(/a/g, 'ai');
            p = p.replace(/o/g, 'ober');
            p = p.replace(/u/g, 'ufat');
            mostrar(p);

        } else {
            alert("Solo letras minúsculas y sin acentos");
        }
    }

}

function desencriptar() {
    var p = document.getElementById("entrada").value;
    if (bandera && p!="") {
        if (p == p.toLocaleLowerCase()) {
            p = p.replace(/enter/g, 'e');
            p = p.replace(/imes/g, 'i');
            p = p.replace(/ai/g, 'a');
            p = p.replace(/ober/g, 'o');
            p = p.replace(/ufat/g, 'u');
        }
        mostrar(p);
    }
}

function mostrar(texto) {

    bandera = false;
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("muneco").style.visibility = "hidden";
    var parrafo=document.getElementById("respuesta");
    parrafo.innerText=texto;
    parrafo.style.visibility="visible";
    

    var copy = document.createElement('input');
    copy.id = "Bcopiar";
    copy.value = "Copiar";
    copy.type = "button";

    document.getElementById("contenido").appendChild(copy);
    document.getElementById("Bcopiar").setAttribute("onclick", "copy()");

    
}

function reinicio() {
    bandera = true;
    var place = document.getElementById('entrada');
    place.placeholder = '';
    
    var cop = document.getElementById("Bcopiar");
    cop.parentNode.removeChild(Bcopiar);
    document.getElementById("respuesta").innerText="";
    document.getElementById("texto1").style.display = "block";
    document.getElementById("texto2").style.display = "block";
    document.getElementById("muneco").style.visibility = "visible";
    
}

function copy() {
    const button = document.querySelector('input#Bcopiar');
    const input =document.createElement("input");
    input.setAttribute("value",document.getElementById("respuesta").innerHTML);
    document.body.appendChild(input);

    
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    button.value= "Copiado al portapapeles!";

    setTimeout(() => button.value = 'Copiar', 3000);
    
}



