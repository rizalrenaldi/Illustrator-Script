var input = prompt("Enter Layer Name", "");

var docRef = app.activeDocument;

     for(i=0;docRef.layers.length>i;i++){
       var currentLayer = docRef.layers[i];
          if (currentLayer.visible) {
            currentLayer.name = input + currentLayer.name;
          }
     }



alert("Layers renamed");
