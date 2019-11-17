AFRAME.registerComponent('cursor-listener', {
  init: function() {
    var carpet-icon=document.getElementById("carpet");
    carpet-icon.addEventListener('click', function(evt){
      var carpet-panel=document.getElementById("carpet-info");
      carpet-panel.setAttribute("visible", true);
      carpet-icon.setAttribute("visible", false);
    });
  }
});
