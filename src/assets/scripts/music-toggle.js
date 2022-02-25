/**
 * Import dependencies from node_modules
 * see commented examples below
 */

/**
 * Write any other JavaScript below
 */


/*music toggle*/
function playPause() {
  var reproduciendo = true;
  var pista = document.getElementById('music-song');
  var boton_play_pause = document.getElementById('boton-play-pause');
  boton_play_pause.onclick = function () {
    if (reproduciendo) {
      reproduciendo = false;
      pista.pause();
      this.value = '';
      boton_play_pause.style.filter = 'invert(100%)';
      boton_play_pause.style.animation = 'rotate 0s 0';

    } else {
      reproduciendo = true;
      pista.play();
      this.value = '';
      boton_play_pause.style.filter = 'invert(0%)';
      boton_play_pause.style.animation = 'rotate 3s infinite linear';
    }
  }
}

window.onload = function () {
  playPause();
}

/*tooltip */
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});