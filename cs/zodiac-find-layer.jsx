/*
Write an Adobe Illustrator script in Javascript (jsx). Find the 'Aries' layer, for that layer find the background layer and fill it with green.
*/

var docRef = app.activeDocument;
var ariesLayer = docRef.layers.getByName("Aries");
var backgroundLayer = ariesLayer.layers.getByName("Background");
backgroundLayer.fillColor = new RGBColor();
backgroundLayer.fillColor.red = 0;
backgroundLayer.fillColor.green = 255;
backgroundLayer.fillColor.blue = 0;