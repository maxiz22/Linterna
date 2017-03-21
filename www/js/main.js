
function linterna(){

  window.plugins.flashlight.available(function(isAvailable) {
    if (isAvailable) {

      // switch on
      window.plugins.flashlight.toggle(
        function() {}, // optional success callback
        function() {}, // optional error callback
        {intensity: 0.3} // optional as well, used on iOS when switching on
      );
      // switch off after 3 seconds
     /* setTimeout(function() {
        window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
      }, 3000);*/

    } else {
      alert("Flash no disponible para este dispositivo");
    }
  });


}



window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    document.getElementById("battery_level").innerHTML = "Level: " + status.level + " isPlugged: " + status.isPlugged;
}

