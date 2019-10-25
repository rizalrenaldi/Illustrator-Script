var input = prompt("Enter Prefix", "");
var doc = app.activeDocument;

for(i=0;doc.layers.length>i;i++){
  var currentLayer = doc.layers[i];
    if (input && currentLayer.visible) {
      currentLayer.name = input + currentLayer.name;
    }
}

if (input) {
  alert("Prefix Added!");
}
  


