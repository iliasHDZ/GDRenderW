var audio = null;

/*function renderstuff(level) {
    var levelobj = gdr.parseLevel(level.data);

    var canvas = document.getElementById("canvas");
    var gl     = canvas.getContext("webgl");

    var framecounter = document.getElementById("counter");

    audio = new Audio("https://newgrounds.com/audio/download/" + level.songID);
    console.log("https://newgrounds.com/audio/download/" + level.songID);

    console.log(level.data);

    gdr.init(gl);

    toRight = false;
    toLeft  = false;

    mouseDown = false;

    scroll = 0;
    speed  = 5;

    document.onkeydown = function(e) {
        if (e.code == "KeyA")
            toLeft = true;
        if (e.code == "KeyD")
            toRight = true;
    }

    document.onkeyup = function(e) {
        if (e.code == "KeyA")
            toLeft = false;
        if (e.code == "KeyD")
            toRight = false;
    }

    canvas.onmousedown = function(e) {
        if(e.button == 0)
            mouseDown = true;
    }

    document.onmouseup = function(e) {
        if(e.button == 0)
            mouseDown = false;
    }

    canvas.onmousemove = function(e) {
        if(mouseDown) {
            gdr.camera.x -= e.movementX / gdr.camera.zoom;
            gdr.camera.y -= e.movementY / gdr.camera.zoom;
        }
    }

    var frame = function(delta) {
        if(toLeft)
            gdr.camera.x -= speed * delta * 60;
        if(toRight)
            gdr.camera.x += speed * delta * 60;
        gdr.renderLevel(levelobj);
    }

    var prev  = new Date().getTime();
    var prog  = 0;

    var frames = 0;

    var timer = function() {
        var now   = new Date().getTime();
        var delta = now - prev;

        prog += delta;

        if (prog > 1000) {
            counter.innerHTML = frames + " fps";
            frames = 0;
            prog -= 1000;
        }

        frame(delta);
        frames++;

        prev = now;
        setTimeout(timer, 1);
    }

    setTimeout(timer, 1);

    /*setInterval(() => {
        if(toLeft)
            gdr.camera.x -= speed;
        if(toRight)
            gdr.camera.x += speed;
        gdr.renderLevel(levelobj);
    }, 1000/60);
}
gdr.getOnlineLevel(10565740, renderstuff);*/


function setInfo(info) {
    document.getElementById("info").innerHTML = info;
}

function zoomin() {
    gdr.camera.zoom += 0.5;
}

function zoomout() {
    gdr.camera.zoom = Math.max(gdr.camera.zoom - 0.5, 0.5);
}

function playaudio() {
    audio.play();
}

var levelParsed = null;

function switchLevel() {
    setInfo("Loading level...");
    var ok = gdr.getOnlineLevel(document.getElementById("id-input").value, (e) => {
        if (!e)
            setInfo("Level not found or GD servers are down.");

        document.getElementById("level-name").innerHTML = e.name;
        document.getElementById("title").innerHTML = "GDRenderW - " + e.name;
        levelParsed = gdr.parseLevel(e.data);
        audio = new Audio("https://newgrounds.com/audio/download/" + e.songID);
        setInfo("");
        gdr.camera.x = 0;
        gdr.camera.y = 0;
        gdr.camera.zoom = 1;
    });
    if (!ok)
        setInfo("Not a level id. (Remove spaces).");
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('level');

    if (myParam) {
        document.getElementById("id-input").value = myParam;
        switchLevel();
    }
}

var canvas = document.getElementById("canvas");
var gl     = canvas.getContext("webgl");

var framecounter = document.getElementById("counter");

gdr.init(gl);

toRight = false;
toLeft  = false;

mouseDown = false;

scroll = 0;
speed  = 5;

document.onkeydown = function(e) {
    if (e.code == "KeyA")
        toLeft = true;
    if (e.code == "KeyD")
        toRight = true;
}

document.onkeyup = function(e) {
    if (e.code == "KeyA")
        toLeft = false;
    if (e.code == "KeyD")
        toRight = false;
}

canvas.onmousedown = function(e) {
    if(e.button == 0)
        mouseDown = true;
}

document.onmouseup = function(e) {
    if(e.button == 0)
        mouseDown = false;
}

canvas.onmousemove = function(e) {
    if(mouseDown) {
        gdr.camera.x -= e.movementX / gdr.camera.zoom;
        gdr.camera.y -= e.movementY / gdr.camera.zoom;
    }
}

var frame = function(delta) {
    if(toLeft)
        gdr.camera.x -= speed * delta * 60;
    if(toRight)
        gdr.camera.x += speed * delta * 60;
    if (levelParsed)
        gdr.renderLevel(levelParsed);
}

var prev  = new Date().getTime();
var prog  = 0;

var frames = 0;

var timer = function() {
    var now   = new Date().getTime();
    var delta = now - prev;

    prog += delta;

    if (prog > 1000) {
        counter.innerHTML = frames + " fps";
        frames = 0;
        prog -= 1000;
    }

    frame(delta);
    frames++;

    prev = now;
    setTimeout(timer, 1);
}

setTimeout(timer, 1);
