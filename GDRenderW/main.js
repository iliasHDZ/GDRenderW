var util = {
    createShader: function(gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success)
            return shader;
    
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    },
    createProgram: function(gl, vertexShader, fragmentShader) {
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success)
            return program;
        
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    },
    createBuffer: function(gl, values) {
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
        return buffer;
    },
    enableBuffer: function(gl, buffer, attr, size) {
        gl.enableVertexAttribArray(attr);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

        gl.vertexAttribPointer(attr, size, gl.FLOAT, false, 0, 0);
    },
    enableTexture: function(gl, texture, uniLoc) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uniLoc, 0);
    },
    parseKey: function(key, value, keys) {
        const def = gdr.headkeys[key];
        
        if (def == undefined) {
            switch (key) {
                case "kS1":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1000] == undefined) {keys.colors[1000]={}};
                    keys.colors[1000].r = parseInt(value);
                    break;
                case "kS2":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1000] == undefined) {keys.colors[1000]={}};
                    keys.colors[1000].g = parseInt(value);
                    break;
                case "kS3":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1000] == undefined) {keys.colors[1000]={}};
                    keys.colors[1000].b = parseInt(value);
                    break;
                case "kS4":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1001] == undefined) {keys.colors[1001]={}};
                    keys.colors[1001].r = parseInt(value);
                    break;
                case "kS5":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1001] == undefined) {keys.colors[1001]={}};
                    keys.colors[1001].g = parseInt(value);
                    break;
                case "kS6":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1001] == undefined) {keys.colors[1001]={}};
                    keys.colors[1001].b = parseInt(value);
                    break;
                case "kS7":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1002] == undefined) {keys.colors[1002]={}};
                    keys.colors[1002].r = parseInt(value);
                    break;
                case "kS8":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1002] == undefined) {keys.colors[1002]={}};
                    keys.colors[1002].g = parseInt(value);
                    break;
                case "kS9":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1002] == undefined) {keys.colors[1002]={}};
                    keys.colors[1002].b = parseInt(value);
                    break;
                case "kS10":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1004] == undefined) {keys.colors[1004]={}};
                    keys.colors[1004].r = parseInt(value);
                    break;
                case "kS11":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1004] == undefined) {keys.colors[1004]={}};
                    keys.colors[1004].g = parseInt(value);
                    break;
                case "kS12":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1004] == undefined) {keys.colors[1004]={}};
                    keys.colors[1004].b = parseInt(value);
                    break;
                case "kS13":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1] == undefined) {keys.colors[1]={}};
                    keys.colors[1].b = parseInt(value);
                    break;
                case "kS14":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1] == undefined) {keys.colors[1]={}};
                    keys.colors[1].b = parseInt(value);
                    break;
                case "kS15":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1] == undefined) {keys.colors[1]={}};
                    keys.colors[1].b = parseInt(value);
                    break;
                case "kS16":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1000] == undefined) {keys.colors[1000]={}};
                    keys.colors[1000].plrcol = parseInt(value);
                    break;
                case "kS17":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1001] == undefined) {keys.colors[1001]={}};
                    keys.colors[1001].plrcol = parseInt(value);
                    break;
                case "kS18":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1002] == undefined) {keys.colors[1002]={}};
                    keys.colors[1002].plrcol = parseInt(value);
                    break;
                case "kS19":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1004] == undefined) {keys.colors[1004]={}};
                    keys.colors[1004].plrcol = parseInt(value);
                    break;
                case "kS20":
                    if (keys.colors == undefined) {keys.colors={}};
                    if (keys.colors[1] == undefined) {keys.colors[1]={}};
                    keys.colors[1].plrcol = parseInt(value);
                    break;
                default:
                    return null;
            }
        } else {
            var res = {};
            if (def.t == "int")
                keys[def.n] = parseInt(value);
            else if (def.t == "bool")
                keys[def.n] = (value == 1);
            else if (def.t == "float")
                keys[def.n] = parseFloat(value);
            else if (def.t == "colors") {
                var prevLine = 0;
                var colors = {};
                for (let i = 0; i < value.length; i++) {
                    if (value.charAt(i) == "|") {
                        var colset = value.substring(prevLine, i);
                        var proplist = {};
                        var splite = colset.split("_");
                        for (let j = 0; j < splite.length / 2; j++) {
                            proplist[splite[j*2]] = splite[j*2+1];
                        }
                        var parsd = {};
                        for (var j in proplist) {
                            if (proplist.hasOwnProperty(j)) { 
                                const defo = gdr.colprops[j];
                                if (defo != undefined) {
                                    if (defo.t == "int")
                                        parsd[defo.n] = parseInt(proplist[j]);
                                    else if (defo.t == "float")
                                        parsd[defo.n] = parseFloat(proplist[j]);
                                    else if (defo.t == "bool")
                                        parsd[defo.n] = (proplist[j] == 1);
                                    else {
                                        if (gde[defo.t] != undefined) {
                                            parsd[defo.n] = parseInt(proplist[j]);
                                        }
                                    }
                                } else
                                    console.log("Unknown ColorProp: " + j)
                            }
                        }
                        colors[proplist[6]] = parsd;
                        prevLine = i + 1;
                    }
                }
                keys[def.n] = colors;
            }
            else if (def.t == "guidelines") {
                var guides = [];
                var isSecVal = false;
                var timestamp = null;
                var lastSquig = 0;
                for (let i = 0; i < value.length; i++) {
                    if (value.charAt(i) == "~") {
                        if (!isSecVal) {
                            timestamp = parseFloat(value.substring(lastSquig, i));
                        } else {
                            colval = parseFloat(value.substring(lastSquig, i));
                            console.log(value.substring(lastSquig, i));
                            guides.push({time: timestamp, col: colval});
                        }
                        lastSquig = i + 1;
                        isSecVal = !isSecVal;
                    }
                }
                keys[def.n] = guides;
            } else {
                if (gde[def.t] != undefined) {
                    keys[def.n] = parseInt(value);
                }
            }
        }
        return keys;
    },
    parseObject: function(objstr) {
        if (objstr == undefined)
            return null;
        var splite = objstr.split(",");
        var res = {}
        for (let i = 0; i < splite.length/2; i++) {
            var propid = parseInt(splite[i*2]);
            var valus  = splite[i*2+1];
            var def    = gdr.objprops[propid];
            if (def != undefined) {
                if (def.t == "int")
                    res[def.n] = parseInt(valus);
                else if (def.t == "float")
                    res[def.n] = parseFloat(valus);
                else if (def.t == "bool")
                    res[def.n] = (valus == 1);
                else if (def.t == "string")
                    res[def.n] = atob(valus);
                else {
                    if (gde[def.t] != undefined) {
                        res[def.n] = parseInt(valus);
                    }
                }
            }
        }
        return res;
    },
    decryptLevel: function(data, official) {
        if (official)
            data = 'H4sIAAAAAAAAA' + data;
        var decoded  = atob(data.replace(/_/g, '/').replace(/-/g, '+'));
        
        var dnc      = new TextDecoder();
        var inflated = pako.inflate(decoded, {windowBits: [15 | 32]});
        return dnc.decode(inflated);
    },
    xToSec: function(level, x) {
        var resSP = null
        x = x / 30;
        var lspd  = (level.keys.speed === undefined) ? 1 : level.keys.speed;
        for (var sp of level.listSPs) {
            if (sp.x >= x)
                break;
            resSP = sp;
        }
        if (resSP != null) {
            var speed = null;
            if (resSP.id == gde.sids.HALF_SPEED)  {speed = 0}
            if (resSP.id == gde.sids.ONE_SPEED)   {speed = 1}
            if (resSP.id == gde.sids.TWO_SPEED)   {speed = 2}
            if (resSP.id == gde.sids.THREE_SPEED) {speed = 3}
            if (resSP.id == gde.sids.FOUR_SPEED)  {speed = 4}
            return resSP.secx + (x - resSP.x) / gde.bps[speed];
        } else {
            return x / gde.bps[lspd];
        }
    },
    xToCOL: function(level, x, col) {
        var resCOL = null;
        for (var colo of level.listCOLs[col]) {
            if (colo.x >= x)
                break;
            resCOL = colo;
        }
        if (resCOL != null) {
            var delta = this.xToSec(level, x) - this.xToSec(level, resCOL.x);
            if (delta < resCOL.duration)
                return this.blendColor(resCOL.curCol, {r: resCOL.red, g: resCOL.green, b: resCOL.blue}, delta / resCOL.duration);
            else
                return {r: resCOL.red, g: resCOL.green, b: resCOL.blue};
        } else
            return {r: level.keys.colors[col].r, g: level.keys.colors[col].g, b: level.keys.colors[col].b};
    },
    blendComp: function(c1, c2, blend) {
        return c1 * (1-blend) + c2 * blend;
    },
    blendColor: function(col1, col2, blend) {
        return {r: this.blendComp(col1.r, col2.r, blend), b: this.blendComp(col1.b, col2.b, blend), g: this.blendComp(col1.g, col2.g, blend)};
    }
}

const gde = {
    gamemode: {
        CUBE:   0,
        SHIP:   1,
        BALL:   2,
        UFO:    3,
        WAVE:   4,
        ROBOT:  5,
        SPIDER: 6
    },
    speed: {
        HALF:  0,
        ONE:   1,
        TWO:   2,
        THREE: 3,
        FOUR:  4
    },
    bps: {
        0: 8.6,
        1: 10.4,
        2: 12.96,
        3: 15.6,
        4: 19.27,
    },
    sids: {
        HALF_SPEED : 200,
        ONE_SPEED  : 201,
        TWO_SPEED  : 202,
        THREE_SPEED: 203,
        FOUR_SPEED : 1334,
    },
    plrcol: {
        NONE: 0,
        COL1: 1,
        COL2: 2
    },
    guidecol: {
        ORANGE: 0.8,
        YELLOW: 0.9,
        GREEN: 1
    }
}

const VERT_SRC = `
attribute vec2 a_position;
attribute vec2 a_texcoord;

uniform mat3 model;
uniform mat3 proj;
uniform mat3 view;

uniform float camx;
uniform float camy;

varying vec2 o_texcoord;

void main() {
    vec3 pos = proj * (model * vec3(a_position, 1) + vec3(camx, camy, 1));
    gl_Position = vec4((pos * view).xy, 0.0, 1.0);
    o_texcoord = a_texcoord;
}`;

const FRAG_SRC = `
precision mediump float;

varying vec2 o_texcoord;
uniform sampler2D a_sampler;

void main() {
    gl_FragColor = texture2D(a_sampler, o_texcoord);//vec4(0.8, 0.2, 0.6, 0.4);
}`;

var gdr = {
    gl:    null,
    gProg: null,
    pBuff: null,
    pAttr: null,
    tBuff: null,
    tAttr: null,
    mmUni: null,
    pmUni: null,
    vmUni: null,
    cxUni: null,
    cyUni: null,
    projM: null,
    viewM: null,
    spUni: null,
    textures: [],
    camera: {x: 0, y: 0, zoom: 1},
    headkeys: {
        // Current Keys
        kA2: {n: "gamemode", t: "gamemode"},
        kA3: {n: "minimode", t: "bool"},
        kA4: {n: "speed", t: "speed"},
        kA6: {n: "background", t: "int"},
        kA7: {n: "ground", t: "int"},
        kA8: {n: "dualmode", t: "bool"},
        kA9: {n: "startpos", t: "bool"},
        kA10: {n: "twoplayer", t: "bool"},
        kA11: {n: "flipgravity", t: "bool"},
        kA13: {n: "songoffset", t: "float"},
        kA14: {n: "guidelines", t: "guidelines"},
        kA15: {n: "fadein", t: "bool"},
        kA16: {n: "fadeout", t: "bool"},
        kA17: {n: "groundline", t: "int"},
        kA18: {n: "font", t: "int"},
        kS38: {n: "colors", t: "colors"},
        kS39: {n: "colorpage", t: "int"},
        // Pre-2.0 Keys
        kS29: {n: "bgd", t: "19col"},
        kS30: {n: "gnd", t: "19col"},
        kS31: {n: "line", t: "19col"},
        kS32: {n: "obj", t: "19col"},
        kS33: {n: "col1", t: "19col"},
        kS34: {n: "col2", t: "19col"},
        kS35: {n: "col3", t: "19col"},
        kS36: {n: "col4", t: "19col"},
        kS37: {n: "3dl", t: "19col"},
    },
    colprops: {
        1: {n: "red", t: "int"},
        2: {n: "green", t: "int"},
        3: {n: "blue", t: "int"},
        4: {n: "plrcol", t: "plrcol"},
        5: {n: "blending", t: "bool"},
        6: {n: "id", t: "int"},
        7: {n: "opacity", t: "float"},
        9: {n: "copyid", t: "int"},
        10: {n: "copyidhsv", t: "int"},
        17: {n: "copyopacity", t: "bool"},
    },
    objprops: {
        1: {n: "id", t: "int"},
        2: {n: "x", t: "float"},
        3: {n: "y", t: "float"},
        4: {n: "flip_hor", t: "bool"},
        5: {n: "flip_ver", t: "bool"},
        6: {n: "rot", t: "float"},
        7: {n: "red", t: "int"},
        8: {n: "green", t: "int"},
        9: {n: "blue", t: "int"},
        10: {n: "duration", t: "float"},
        11: {n: "touch_trig", t: "bool"},
        12: {n: "secretcoinid", t: "int"},
        13: {n: "specialcheck", t: "bool"},
        14: {n: "groundtint", t: "bool"},
        15: {n: "playercol1", t: "bool"},
        16: {n: "playercol2", t: "bool"},
        17: {n: "blending", t: "bool"},
        20: {n: "editorlay1", t: "bool"},
        21: {n: "maincolor", t: "int"},
        22: {n: "seccolor", t: "int"},
        23: {n: "targcol", t: "int"},
        24: {n: "zlayer", t: "int"},
        25: {n: "zorder", t: "int"},
        28: {n: "offsetx", t: "float"},
        29: {n: "offsety", t: "float"},
        30: {n: "easing", t: "int"}, // TODO: Easing
        31: {n: "text", t: "string"},
        32: {n: "scale", t: "float"},
        34: {n: "group_parent", t: "bool"},
        35: {n: "opacity", t: "float"},
        41: {n: "maincolorhsv_enabled", t: "bool"},
        42: {n: "seccolorhsv_enabled", t: "bool"},
        43: {n: "maincolorhsv", t: "float"}, // TODO: HSV
        44: {n: "seccolorhsv", t: "float"}, // TODO: HSV
        45: {n: "fadein", t: "float"},
        46: {n: "hold", t: "float"},
        47: {n: "fadeout", t: "float"},
        48: {n: "pulse_mode", t: "int"}, // TODO: Pulse Mode
        49: {n: "copycolorhsv", t: "float"}, // TODO: HSV
        50: {n: "copycolorid", t: "int"},
        51: {n: "targetgroupid", t: "int"},
        52: {n: "pulsetarget_type", t: "int"}, // TODO: Pulse Target Type
        54: {n: "teleportal_yellowoffset", t: "float"},
        56: {n: "activate_group", t: "bool"},
        57: {n: "groupids", t: "int"}, // TODO: VERY IMPORTNANT! Integer Array
        58: {n: "lockplrx", t: "bool"}, 
        59: {n: "lockplry", t: "bool"},
        60: {n: "copy_opacity", t: "bool"},
        61: {n: "editorlay2", t: "int"},
        62: {n: "spawn_trigger", t: "bool"},
        63: {n: "spawn_delay", t: "float"},
        64: {n: "dont_fade", t: "bool"},
        65: {n: "main_only", t: "bool"},
        66: {n: "detail_only", t: "bool"},
        67: {n: "dont_enter", t: "bool"},
        68: {n: "degrees", t: "int"},
        69: {n: "times_360", t: "int"},
        // TODO: Add rest!!!
    },
    getOnlineLevel: function(id, f) {
        let r = new XMLHttpRequest();
        if (!parseInt(id))
            return false;
        r.open("GET", "https://gdbrowser.com/api/level/" + id + "?download=true", true);
        r.onload = (o) => {
            if (o.responseText == "-1")
                f(false);
            var o = JSON.parse(r.responseText);
            o.data = util.decryptLevel(o.data, false);
            f(o);
        }
        r.send();
        return true;
    },
    loadColors: function(level, color) {
        var listCOLs = [];

        for (const obj of level.objects) {
            if ((color == 1000 && obj.id == 29)
             || (color == 1001 && obj.id == 30)
             || (color == 1002 && obj.id == 104)
             || (color == 1004 && obj.id == 105))
                listCOLs.push(obj);
        }

        var lastCOL = {x: 0, red: 255, blue: 255, green: 255, duration: 0};
        var curCol  = {r: 255, g: 255, b: 255};
        if (level.keys.colors[color] != undefined) {
            lastCOL = {x: 0, red: level.keys.colors[color].r, blue: level.keys.colors[color].b, green: level.keys.colors[color].g, duration: 0};
            curCol = {r: level.keys.colors[color].r, b: level.keys.colors[color].b, g: level.keys.colors[color].g};
        }

        for (const obj of listCOLs) {
            var delta = util.xToSec(level, obj.x) - util.xToSec(level, lastCOL.x);
            if (delta < lastCOL.duration) {
                curCol = util.blendColor(curCol, {r: lastCOL.red, b: lastCOL.blue, g: lastCOL.green}, delta / lastCOL.duration);
            } else {
                curCol = {r: lastCOL.red, b: lastCOL.blue, g: lastCOL.green};
            }
            obj.curCol = curCol;
            lastCOL = obj;
        }
        return listCOLs;
    },
    parseLevel: function(data) {
        var header = null;
        var objects = null;
        for (let i = 0; i < data.length; i++) {
            if (data.charAt(i) == ";") {
                header = data.substring(0, i);
                objects = data.substring(i+1, data.length);
                break
            }
        }
        var lastCom = 0;
        var valueNx = false;
        var currKey = "";
        var keys = {};
        for (let i = 0; i < header.length; i++) {
            if (header.charAt(i) == ",") {
                if (!valueNx)
                    currKey = header.substring(lastCom, i);
                else {
                    var val = header.substring(lastCom, i);
                    ret = util.parseKey(currKey, val, keys);
                    if (ret == null)
                        console.log("Unknown Key: " + currKey);
                    else
                        keys = ret;
                    currKey = "";
                }
                valueNx = !valueNx;
                lastCom = i + 1;
            }
        }
        var objtable = objects.split(";");
        delete objtable[objtable.length-1];

        var objs = []

        for (let i = 0; i < objtable.length; i++) {
            var eege = util.parseObject(objtable[i])
            if (eege != null) {
                objs.push(eege);
            }
        }

        var listSPs = [];
        for (const obj of objs) {
            if (obj.id == gde.sids.HALF_SPEED ||
                obj.id == gde.sids.ONE_SPEED ||
                obj.id == gde.sids.TWO_SPEED ||
                obj.id == gde.sids.THREE_SPEED ||
                obj.id == gde.sids.FOUR_SPEED )
                listSPs.push(obj);
        }
        listSPs.sort((a, b) => (a.x < b.x) ? -1 : 1);

        var lastSP = 0;
        var currSP = (keys.speed === undefined) ? gde.speed.ONE : keys.speed;
        var secPas = 0;

        for (const obj of listSPs) {
            var delta = obj.x - lastSP;
            secPas += delta / gde.bps[currSP];
            obj.secx = secPas;
            if (obj.id == gde.sids.HALF_SPEED)  {currSP = 0}
            if (obj.id == gde.sids.ONE_SPEED)   {currSP = 1}
            if (obj.id == gde.sids.TWO_SPEED)   {currSP = 2}
            if (obj.id == gde.sids.THREE_SPEED) {currSP = 3}
            if (obj.id == gde.sids.FOUR_SPEED)  {currSP = 4}
            lastSP = obj.x;
        }

        var listCOLs = {};
        listCOLs[1000] = this.loadColors({keys: keys, objects: objs, listSPs: listSPs}, 1000);

        return {keys: keys, objects: objs, listSPs: listSPs, listCOLs: listCOLs};
    },
    loadImage: function(url) {
        var gl = this.gl;

        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);

        var image = new Image();

        var tex = {
            t: texture, w: 1, h: 1, i: image
        };

        image.onload = function() {
            tex.w = image.width;
            tex.h = image.height;

            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
        image.src = url;

        return tex;
    },
    loadImages: function(count) {
        for (var i = 0; i < count; i++)
            this.textures[i] = this.loadImage("GDRenderW/obj/" + i + ".png");
    },
    init: function(gl) {
        gdr.gl = gl;

        this.gProg = util.createProgram(gl, 
            util.createShader(gl, gl.VERTEX_SHADER, VERT_SRC),
            util.createShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC));

        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        
        const vertices = [
           -0.5,  0.5,
            0.5, -0.5,
           -0.5, -0.5,
           -0.5,  0.5,
            0.5,  0.5,
            0.5, -0.5,
        ];

        const texCoords = [
            0,  0,
            1,  1,
            0,  1,
            0,  0,
            1,  0,
            1,  1
        ];
        
        this.pBuff = util.createBuffer(gl, vertices);
        this.tBuff = util.createBuffer(gl, texCoords);

        this.pAttr = gl.getAttribLocation(this.gProg, "a_position");
        this.tAttr = gl.getAttribLocation(this.gProg, "a_texcoord");

        this.mmUni = gl.getUniformLocation(this.gProg, "model");
        this.pmUni = gl.getUniformLocation(this.gProg, "proj");
        this.vmUni = gl.getUniformLocation(this.gProg, "view");
        
        this.cxUni = gl.getUniformLocation(this.gProg, "camx");
        this.cyUni = gl.getUniformLocation(this.gProg, "camy");

        this.spUni = gl.getUniformLocation(this.gProg, "a_sampler");

        this.projM = glMatrix.mat3.create();
        glMatrix.mat3.scale(this.projM, this.projM, [2/gl.canvas.width, 2/gl.canvas.height]);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        this.loadImages(500);
    },
    renderObject: function(obj) {
        if (this.textures[obj.id] == undefined)
            return;
        if (!this.textures[obj.id].i.complete)
            return;
        var rx = (obj.x - this.camera.x) * this.camera.zoom;
        var ry = (obj.y + this.camera.y) * this.camera.zoom;

        var gl = this.gl;

        if (!(rx+this.textures[obj.id].i.width/2+60 > -(gl.canvas.width/2) && rx-this.textures[obj.id].i.width/2-60 <= gl.canvas.width/2))
            return;
        if (!(ry+this.textures[obj.id].i.height/2+60 > -(gl.canvas.height/2) && ry-this.textures[obj.id].i.height/2-60 <= gl.canvas.height/2))
            return;

        var flip = (obj.flip_hor === undefined) ? false : obj.flip_hor;
        var flop = (obj.flip_ver === undefined) ? false : obj.flip_ver;
        var rot = (obj.rot === undefined) ? 0 : -obj.rot;

        var sx = this.textures[obj.id].i.width/62*30 * (flip ? -1 : 1);
        var sy = this.textures[obj.id].i.height/62*30 * (flop ? -1 : 1);

        var model = glMatrix.mat3.create();
        glMatrix.mat3.translate(model, model, [obj.x, obj.y]);
        glMatrix.mat3.rotate(model, model, rot * Math.PI / 180);
        glMatrix.mat3.scale(model, model, [sx, sy]);

        gl.uniformMatrix3fv(this.mmUni, false, model);

        util.enableTexture(gl, this.textures[obj.id].t, this.spUni);
        //gl.polygonMode( gl.FRONT_AND_BACK, gl.LINE );

        gl.drawArrays(gl.TRIANGLES, 0, 6);
    },
    renderLevel: function(level) {
        var gl = this.gl

        var bgcol = util.xToCOL(level, this.camera.x, 1000);

        gl.clearColor(bgcol.r/255, bgcol.g/255, bgcol.b/255, 1);
        //gl.clearColor(1, 1, 1, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(this.gProg);

        this.viewM = glMatrix.mat3.create();
        //glMatrix.mat3.translate(this.viewM, this.viewM, [-this.camera.x, this.camera.y]);
        glMatrix.mat3.scale(this.viewM, this.viewM, [this.camera.zoom, this.camera.zoom]);

        util.enableBuffer(gl, this.pBuff, this.pAttr, 2);
        util.enableBuffer(gl, this.tBuff, this.tAttr, 2);

        gl.uniformMatrix3fv(this.pmUni, false, this.projM);
        gl.uniformMatrix3fv(this.vmUni, false, this.viewM);

        gl.uniform1f(this.cxUni, -this.camera.x);
        gl.uniform1f(this.cyUni, this.camera.y);

        for (var obj of level.objects) {
            this.renderObject(obj);
        }

        //for (var i = 0; i < 300; i++)
            //this.renderObject({id: i, x: 60*i, y: 0, flip_hor: false, flip_ver: false, rot: 0});
    }
}