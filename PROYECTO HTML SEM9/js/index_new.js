function openMenu() {
    document.getElementById("mainMenu").style.width = "500px"; /*-- cambio */
    document.getElementById("mainMenu").style.display = "flex"; /*-- cambio */
    document.getElementById("mainMenu").style.height = "1000px";/*-- cambio */
    document.getElementById("openmenu").style.display="none";/*-- cambio */
    }
    function closeNav() {
    document.getElementById("mainMenu").style.width = "0";/*-- cambio */
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload();
}