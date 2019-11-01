//função assíncrona
 
function lavaLouca() {
    ensaboar();
    enxaguar();
}

function ensaboar() {
    console.log('começou a ensaboar');
    setTimeout(()=> {
        console.log('terminou de ensaboar');
        
    })
    
} 


function enxaguar() {
    console.log('começou a enxaguar');
    setTimeout(()=> {
        console.log('terminou de enxaguar');
        
    }, 5000);
}

