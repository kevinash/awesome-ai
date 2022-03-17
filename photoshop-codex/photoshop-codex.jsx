/*
Write functions for Adobe Photoshop using Javascript. 
Functions assume that everything happens in the active 
document.
*/

// Get the portrait layer
function getPortraitLayer() {
    var portraitLayer = null;
    var layers = app.activeDocument.layers;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].name == "Portrait") {
            portraitLayer = layers[i];
        }
    }
    return portraitLayer;
}

// Play action
function playAction(name){
    app.doAction(name, "Default Actions");
}

// Play Sepia action for the Portrait layer
function playSepiaAction() {
    var portraitLayer = getPortraitLayer();
    if (portraitLayer != null) {
        portraitLayer.visible = true;
        playAction("Sepia");
        portraitLayer.visible = false;
    }
}

//playSepiaAction();

function addWoodFrame() {
    var portraitLayer = getPortraitLayer();
    if (portraitLayer != null) {
        portraitLayer.visible = true;
        playAction("Wood Frame");
        portraitLayer.visible = false;
    }
}

addWoodFrame();