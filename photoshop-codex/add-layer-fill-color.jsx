/*
Write a Photoshop script in Javascript that adds a pastel green background layer to the active document loaded in Photoshop.
*/

// Select the active document
var doc = app.activeDocument;

// Create a new layer
var layer = doc.artLayers.add();

layer.isBackgroundLayer = true;

// Set the fill color
layer.fillColor = new SolidColor();
layer.fillColor.rgb.red = 0;
layer.fillColor.rgb.green = 255;
layer.fillColor.rgb.blue = 0;

// Set the opacity
layer.opacity = 50;

// Set the blend mode
layer.blendMode = BlendMode.SCREEN;