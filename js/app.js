/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function() {
    //get the canvas
    var canvas = document.getElementById('renderCanvas');

    //create a Babylon engine object
    var engine = new BABYLON.Engine(canvas, true);

    //create scene
    var scene = new BABYLON.Scene(engine);

    //create camera
    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);

    camera.attachControl(canvas);

    //light environment (comes from above)
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene);

    //create a sphere
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;
    
    engine.runRenderLoop(function() {
        scene.render();
    });
};