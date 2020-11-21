import {GDRenderer, GDRParse} from "./GDRenderW/main.js"

var canvas = document.getElementById("canvas");
var gl     = canvas.getContext("webgl");

var renderer = new GDRenderer(gl);

var loadedLevel;

var dragging = false;

function setInfo(message) {
    document.getElementById("info").innerHTML = message;
}

canvas.onmousedown = function(e) {
    if (e.button == 0)
        dragging = true;
}

document.onmousemove = function(e) {
    if (dragging) {
        renderer.camera.x -= e.movementX / renderer.camera.zoom;
        renderer.camera.y -= e.movementY / renderer.camera.zoom;
    }
}

document.onmouseup = function() {
    dragging = false;
}

document.getElementById("zoomin").onclick = function() {
    renderer.camera.zoom += 0.5;
}

document.getElementById("zoomout").onclick = function() {
    renderer.camera.zoom = Math.max(renderer.camera.zoom - 0.5, 0.5);
}

var prevSec = new Date().getTime();
var frames = 0;

document.getElementById("loader").onclick = function() {
    setInfo("Loading level...");
    GDRParse.getOnlineLevel(document.getElementById("id-input").value, function(level) {
        if (level && level.data) {
            setInfo("");
            loadedLevel = GDRParse.parseLevel(level.data);
            document.getElementById("level-name").innerHTML = level.name;
            renderer.loadGDRLevel(loadedLevel);
        } else
            setInfo("Couldn't load the level. The GD server are not on or the GDBrowser API isn't working.");
    });
}

function repeat() {
    var now = new Date().getTime();
    if (now - prevSec >= 1000) {
        document.getElementById("counter").innerHTML = frames + " fps";
        frames = 0;
        prevSec += 1000;
    }

    frames++;
    renderer.renderLevel();
    setTimeout(repeat, 0);
}

repeat();