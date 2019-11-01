//função assíncrona
//Callback é quando uma função chama a outra. 
//

function lavaLouca() { //uma outra forma de declarar a função:  lavarLouca = () => {}
    ensaboar();
    enxaguar();
}

function ensaboar() {
    console.log('começou a ensaboar');
    setTimeout(()=> {
        console.log('terminou de ensaboar');
        
    }, 5000);
    
} 


function enxaguar() {
    console.log('começou a enxaguar');
    setTimeout(()=> {
        console.log('terminou de enxaguar');
        
    }, 2000);
}

//-----------------------------------------------------------------------------------------------------------------------------

//promise é uma função que demora um tempo
function criaTexto(texto) {
    const div = document.querySelector('#root');
    div.innerHTML += `<h1>${texto}</h1>`
}

const sabao = true;

function ensaboar() {
    return new Promise((resolve,reject) => {
        if (sabao) {
            criaTexto('começou a ensaboar');
            setTimeout(() => {
                resolve('terminou de ensaboar');
            }, 5000)
        } else {
            reject ('não consigo ensaboar');
        }
    })
}

function enxaguar() {
    return new Promise((resolve, reject) => {
        if (agua) {
            setTimeout(() => {
                resolve('terminou enxaguar');
            }, 2000);
        } else {
            reject('não consigo enxaguar')
        }
    })
}

ensaboar()
.then(res => {
    criaTexto(res)
    enxaguar()
    .then(res2 => criaTexto(res2))
    .catch(err2 => criaTexto(err2))
})    
.catch(err => criaTexto(err))