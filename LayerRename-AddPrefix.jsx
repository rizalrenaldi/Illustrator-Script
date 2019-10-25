var input = prompt("Enter Prefix", "");
var docRef = app.activeDocument;

for(i=0;docRef.layers.length>i;i++){
  var currentLayer = docRef.layers[i];
    if (input && currentLayer.visible) {
      currentLayer.name = input + currentLayer.name;
    }
}

if (input) {
  alert("Prefix Added!");
}
  


