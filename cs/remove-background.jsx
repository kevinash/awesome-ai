/*
Write a Photoshop script in Javascript JSX 
that removes the currently loaded image 
background layer.
*/

var doc = app.activeDocument;
var layer = doc.activeLayer;

if (layer.isBackgroundLayer) {
    layer.remove();
}