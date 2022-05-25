/*

Adobe XD plugin using Codex
Check: https://github.com/kevinash/awesome-ai
by Kevin Ashley
MAKE ART with Artificial Intelligence (https://www.amazon.com/dp/B091J3T4HM)

*/
const uxp = require("uxp");
const fs = uxp.storage.localFileSystem;
const { ImageFill, Text, Rectangle, Color, Circle, selection } = require("scenegraph");
const commands = require("commands");
const {editDocument} = require("application");
const Sval = require("./sval.min.js");
const hljs = require("./highlight.js");

async function fetchAnswer(text) {
    if (text != null && text != "") {
        const url = "http://127.0.0.1:5000/api/ask";
        var entry = {prompt: prompt.replace("<<REQUEST>>", text)};
        const response = await fetch(url,
          {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            cache: "no-cache",
            body: JSON.stringify(entry)
          });
        let result = await response.json();  
        return result;
    } else {
        console.log("Please, tell us what you want to do");
    }
  }

  function applyCode(prompt, answer){
    try{
        //setText(answer);
        exec(prompt+answer);
            
    }catch(err){
      console.log(err.message);
    }
  }
  
  function exec(code) {
    try {
        // in code remove // Command: ... // End Command lines
        /*
        const start = code.indexOf("// Command:");
        const end = code.indexOf("// End Command");
        if(start >= 0 && end >= 0){
          const code_start = code.substring(0, start);
          const code_end = code.substring(end + "// End Command".length);
          code = code_start + code_end;
        }
        */

        const interpreter = new Sval();
        interpreter.import("uxp", require("uxp"));
        interpreter.import("os", require("os"));
        interpreter.import("scenegraph", require("scenegraph"));
        interpreter.import("application", require("application"));
        interpreter.import("commands", require("commands"));
        interpreter.run(code);
    }
    catch(err) {
        console.log(err);
    }
}


// Show dog image
function showDogImage(selection) {

    if (selection.items.length) {
        const url = "https://dog.ceo/api/breeds/image/random";
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                return downloadImage(selection, jsonResponse);
            });
    } else {
        console.log("Please select a shape to apply the downloaded image.");
    }
}

async function downloadImage(selection, jsonResponse) {
    try {
        const photoUrl = jsonResponse.message;
        const photoObj = await xhrBinary(photoUrl);
        const tempFolder = await fs.getTemporaryFolder();
        const tempFile = await tempFolder.createFile("tmp", { overwrite: true });
        await tempFile.write(photoObj, { format: uxp.storage.formats.binary });
        applyImagefill(selection, tempFile);
    } catch (err) {
        console.log("error")
        console.log(err.message);
    }
}

function xhrBinary(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                try {
                    const arr = new Uint8Array(req.response);
                    resolve(arr);
                } catch (err) {
                    reject('Couldnt parse response. ${err.message}, ${req.response}');
                }
            } else {
                reject('Request had an error: ${req.status}');
            }
        }
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url, true);
        req.responseType = "arraybuffer";
        req.send();
    });
}

function applyImagefill(selection, file) {
    const imageFill = new ImageFill(file);
    selection.items[0].fill = imageFill;
}

function setText(text){
  selection.items.forEach((node) => {
    if (node instanceof Text && node.name === "code") {
        node.updateText(text);
    }
  });
}


let panel;

function create() {
  const html = `
  <style>
            .break {
                flex-wrap: wrap;
            }
            label.row input {
                flex: 1 1 auto;
            }
            .show {
                display: block;
            }
            .hide {
                display: none;
            
            .code-area {
                width:90%;
                display:block;
                font-size: 1.8em;
                font-family: Consolas, Courier New, monospace;
                height: 168px;
                min-height: 168px; 
            }
        </style>
        <style>
        /*!
  Theme: Default
  Description: Original highlight.js style
  Author: (c) Ivan Sagalaev <maniac@softwaremaniacs.org>
  Maintainer: @highlightjs/core-team
  Website: https://highlightjs.org/
  License: see project LICENSE
  Touched: 2021
*/pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#f3f3f3;color:#444}.hljs-comment{color:#697070}.hljs-punctuation,.hljs-tag{color:#444a}.hljs-tag .hljs-attr,.hljs-tag .hljs-name{color:#444}.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color:#800}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-operator,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#ab5656}.hljs-literal{color:#695}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta .hljs-string{color:#38a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}
        </style>
        <h1>Adobe XD + Codex AI</h1>
        <p>Kevin Ashley</p>
        <div>
          <a href="https://www.amazon.com/dp/B091J3T4HM"><img width="100" src="https://images-na.ssl-images-amazon.com/images/I/51RrRTzmiZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"></a>
          <br/>
          <a href="https://www.amazon.com/dp/B091J3T4HM">MAKE ART with Artificial Intelligence</a>
          <br/>
          <a href="https://kevinashley.com/awesome-ai/">Github</a>
        </div>
        <form method="dialog" id="main">
          <div class="row break">
            <label class="row break">What would you like to do?</label>
          </div>
          <div class="row break">
          <textarea uxp-quiet="true" type="text" id="name" placeholder="Draw lots of circles"/></textarea>
          </div>
          <footer>
             <button id="cancel">Cancel</button>
             <button type="submit" id="ok" uxp-variant="cta">OK</button>
          </footer>
        </form>
        <hr/>
        <pre><code style="white-space: pre-line;" id="code-result" class="language-javascript"></code></pre>
        <div>
          <h2>Code</h2>
          <textarea class="code-area" rows="20" type="text" id="code" placeholder="/* Code Created by AI */"/></textarea>
          <button class="row break" id="apply" uxp-variant="cta">Apply Code</button>
        </div>
        
  `;

  panel = document.createElement("div"); 
  panel.innerHTML = html; 

  panel.querySelector("form").addEventListener("submit", (e) => {
    editDocument(async () => {
      const query = document.querySelector("#name").value;
      const result = await fetchAnswer(query);
      try {

        document.querySelector("#code-result").textContent = result.answer;
        hljs.highlightAll();
        applyCode(result.prompt, result.answer); 
        document.querySelector("#code").value = result.prompt + result.answer;
        
      } catch (ex) {
        console.log("Failed", ex); 
      }
    });
  }); 

  panel.querySelector("#apply").addEventListener("click", (e) => {
    editDocument(async () => {
      const code = document.querySelector("#code").value;
      try {
        //document.querySelector("#code-result").textContent = code;
        //hljs.highlightAll();
        exec(code); 
      } catch (ex) {
        console.log("Failed", ex); 
      }
    });
  }); 

  return panel; 

}


function show(event) {

  if (!panel) event.node.appendChild(create()); // [2]


}

function update(selection) {}


module.exports = {
    panels: {
      panelCodex: {
        show,
        update,
      },
    },
}


const prompt = 
`/* Create a Javascript for an Adobe XD plugin, using XD and UXP APIs. Use scenegraph, assuming the current edit context a selection. For nodes reordering, structural changes, use Adobe XD commands API. Commands API calls do not take arguments, instead set selection of objects you want command to target, then use a command. */

const { Artboard, GraphicNode, RootNode, Group, Polygon, Path, Rectangle, Text, Line, Color, RepeatGrid, selection } = require("scenegraph");
const { duplicate, bringToFront, alignLeft, alignRight, distributeHorizontal, distributeVertical } = require("commands");

// Find rectangle nodes that include a specific name
function findNodes(name){
    return selection.items.filter(item => item instanceof Rectangle && item.name.includes(name));
}

// Make a new selection from nodes
function selectItems(nodes){
    selection.items = nodes;
}

// Move the selection node horizontally relative to the previous node, with a padding
function moveSelection(node, horizontalPadding, verticalPadding){
    selection.items = [node];
    duplicate();
    var clone = selection.items[0];
    clone.moveInParentCoordinates(clone.localBounds.width + horizontalPadding, clone.localBounds.height + verticalPadding);
}

// Returns a random color hex string
function randomColorHexString() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({
        length: 3
    }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}

// Returns a random color hex string
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({
        length: 3
    }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}

// Create a rectangle and add to the selection
function createRectangle(){
    let rectangle = new Rectangle();
    rectangle.width = 200;
    rectangle.height = 300;
    rectangle.fill = new Color(randomColorHexString());
    selection.insertionParent.addChild(rectangle);
    rectangle.moveInParentCoordinates(0, 0);
    return rectangle;
}

// Create a rectangle, below the original rectangle with a vertical padding of 20px, create n duplicate rectangles, each copy move horizontally to the right with a padding of 10px. Set the color of each duplicate randomly.
function createRectangles(n){
    let rectangle = createRectangle();
    for (let i = 0; i < n; i++) {
        selection.items = [rectangle];
        duplicate();
        var clone = selection.items[0];
        clone.fill = new Color(randomColor());
        clone.moveInParentCoordinates((clone.localBounds.width + 10)*i, clone.localBounds.height + 20);
    }
}

// Place node in center
function placeInCenter(node){
  // Place this node's top-left corner at the centerpoint of its parent
  let parentCenter = node.parent.localCenterPoint;  // parent's center in parent's coordinates
  let nodeBounds = node.localBounds;  // node's bounds in its own local coordinates
  let nodeTopLeft = {x: nodeBounds.x, y: nodeBounds.y};  // node's top left corner in its own local coordinates
  node.placeInParentCoordinates(nodeTopLeft, parentCenter);
}

// Draw rectangle n times rotating around center
function drawRectanglesRotatingAroundCenter(n) {
  node = createRectangle();
  placeInCenter(node);

  let times = 0;
  while (times < n) {
    commands.duplicate();

    const node = selection.items[0];
    placeInCenter(node);
    node.fill = new Color(randomColor());
    node.rotateAround(10, node.localCenterPoint);
    node.moveInParentCoordinates(10, 0);

    times += 1;
  }
}

// <<REQUEST>>

`;

const prompt10 = 
`/* Create a Javascript for an Adobe XD plugin, using XD and UXP APIs. */

const { Artboard, GraphicNode, RootNode, Group, Polygon, Path, Rectangle, Text, Line, Color, RepeatGrid, selection } = require("scenegraph");

// Find all books
const books = selection.items.filter(item => item instanceof Rectangle && item.name.includes("book"));

// Select books
selection.items = books;

// Duplicate 
function duplicate(){
    commands.duplicate();
}

// Move the first selection item to the right of previous nodes, with 1px padding
selection.items[0].moveInParentCoordinates(selection.items[0].localBounds.width + 1, 0);

// <<REQUEST>>

`;

const prompt2 = 
`/* Create a Javascript for an Adobe XD plugin, using XD and UXP APIs. */

const { Artboard, GraphicNode, RootNode, Group, Polygon, Path, Rectangle, Text, Line, Color, RepeatGrid, selection } = require("scenegraph");

// Find all books
const books = selection.items.filter(item => item.name.includes("book"));

// Select books
selection.items = books;

// Clone all selected objects, leaving the duplicates selected afterward.
function clone(){
    commands.duplicate();
}

// Move the first selection item to the right of previous nodes, with 20px padding
selection.items[0].moveInParentCoordinates(selection.items[0].localBounds.width + 20, 0);

// <<REQUEST>>

`;



const prompt1 = 
`/* Create a Javascript for an Adobe XD plugin, using XD and UXP APIs. */

const { Rectangle, Text, Line, Color, selection } = require("scenegraph");
const screenWidth = 1920, screenHeight = 1080;
const bookWidth = 250, bookHeight = 370;

// Returns a random color hex string
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({
        length: 3
    }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}

// Draw a book with a random color 
function drawBook(){
    const rect = new Rectangle();
    rect.width = bookWidth;
    rect.height = bookHeight;
    
    rect.fill = new Color(randomColor());
    rect.stroke = new Color("white");
    rect.opacity = 0.5;
    
    selection.insertionParent.addChild(rect);
    selection.items = [rect];
    return selection.items[0];
}

// Place node in center
function placeInCenter(node){
  // Place this node's top-left corner at the centerpoint of its parent
  let parentCenter = node.parent.localCenterPoint;  // parent's center in parent's coordinates
  let nodeBounds = node.localBounds;  // node's bounds in its own local coordinates
  let nodeTopLeft = {x: nodeBounds.x, y: nodeBounds.y};  // node's top left corner in its own local coordinates
  node.placeInParentCoordinates(nodeTopLeft, parentCenter);
}

// Draw books rotating around center
function drawBooksRotatingAroundCenter(n) {
  node = drawBook();
  placeInCenter(node);

  let times = 0;
  while (times < n) {
    commands.duplicate();

    const node = selection.items[0];
    placeInCenter(node);
    node.fill = new Color(randomColor());
    node.rotateAround(10, node.localCenterPoint);
    node.moveInParentCoordinates(10, 0);

    times += 1;
  }
}

// Place in random place 
function placeInRandomPlace(node){
    let parentBounds = node.parent.localCenterPoint;  // parent's bounds
    let x = Math.floor(Math.random() * (node.parent.width - node.width)/2);
    let y = Math.floor(Math.random() * (node.parent.height - node.height)/2);
    let nodeTopLeft = {x: x, y: y};  // node's top left corner in its own local coordinates
    node.placeInParentCoordinates({x: x, y: y}, parentBounds);
}

// Draw 5 books in random places
function drawBooksRandomly(n) {
  node = drawBook();
  placeInRandomPlace(node);

  let times = 0;
  while (times < n) {
    commands.duplicate();

    const node = selection.items[0];
    placeInRandomPlace(node);
    node.fill = new Color(randomColor());

    times += 1;
  }
}

// Command: Draw 10 random books
//
drawBooksRandomly(10);
// End Command

// Command: <<REQUEST>>
// 

`;

