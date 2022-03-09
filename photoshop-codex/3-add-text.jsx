/*
Write a Photoshop script in 
Javascript that adds a paragraph 
text layer to the the active 
document, with 
text "This is an apple", 
with font size 300. 
The text must be centered and 
aligned horizontally relative 
to the document. 
Then move this layer on top of 
other layers.
*/

var doc = app.activeDocument;
var textLayer = doc.artLayers.add();
textLayer.kind = LayerKind.TEXT;
textLayer.textItem.contents = "This is an apple";
textLayer.textItem.size = 300;
textLayer.textItem.position = Array(doc.width/2, doc.height/2);
textLayer.textItem.justification = Justification.CENTER;
textLayer.move(doc.artLayers[0], ElementPlacement.PLACEBEFORE);