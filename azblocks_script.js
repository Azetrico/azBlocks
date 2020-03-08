// Code from https://developers.google.com/blockly/guides/configure/web/resizable
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');

var toolbox = document.getElementById('toolbox');

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'blocklyMedia/', 
	rtl : false, 
	scrollbars : true, 
	sounds : false, 
	oneBasedIndex : true
};

var workspace = Blockly.inject(blocklyDiv, options);

//var workspaceBlocks = document.getElementById("workspaceBlocks"); // xml - workspace factory
//Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);