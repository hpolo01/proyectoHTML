function openMenu() {
    document.getElementById("mainMenu").style.width = "250px"; /*-- cambio */
    document.getElementById("mainMenu").style.height = "800px";/*-- cambio */
         
    }
    function closeNav() {
    document.getElementById("mainMenu").style.width = "0";/*-- cambio */
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload();
}