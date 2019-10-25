var input = prompt("Enter Prefix", "");

function addPrefix() {
  var doc = app.activeDocument;

  for(i=0;doc.layers.length>i;i++){
    var currentLayer = doc.layers[i];
      if (input && currentLayer.visible) {
        currentLayer.name = input + currentLayer.name;
      }
  }
  alert("Prefix Added!");
}

function checkReqs() {
  if (input) {  
        addPrefix();
      }   
}

checkReqs();


  


