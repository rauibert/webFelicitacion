

function playRecord(){
    document.getElementById('player').play();
    document.getElementById('botonPlay').style.display="none";
    document.getElementById('botonPause').style.display="block";

}

function pauseRecord(){
    document.getElementById('player').pause();
    document.getElementById('botonPause').style.display="none";
    document.getElementById('botonPlay').style.display="block";
}