let nPisos = Number(prompt("Ingrese el número de pisos que quiere"))
function piso() {
    console.log("|  _     _  |")
    console.log("| |_|   |_| |")
    console.log("|___________|")
}
function pisoBase() {
    console.log("|  _     _  |")
    console.log("| |_| _ |_| |")
    console.log("|____|_|____|")
}
function techo() {
    console.log("_____________")
}
function casa(nPisos){
    techo()
    for(let i=0;i<nPisos;i++){
        piso()
    }
    pisoBase()
}
casa(nPisos)
