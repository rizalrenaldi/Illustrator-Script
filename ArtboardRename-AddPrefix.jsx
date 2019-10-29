var input = prompt("Enter Prefix", "");

function artBoardAddPrefix() {
    var doc = app.activeDocument;  
    for (var i = 0, l = doc.artboards.length; i < l; i++) {  
        if (doc.artboards[i].active) {
            }
            // THIS IS WHERE THE RENAMING HAPPENS
            doc.artboards[i].name = input + doc.artboards[i].name;  
        }
    }

function artboardCheck() {
    if (app.documents.length == 0) {  
alert("No Open / Active Document Found");  
    } else if (input) {  
        artBoardAddPrefix();
    }  
}

renameArtBoard_MAIN();