// import { ColladaLoader } from 'scrCom/js/ColladaLoader.js';

// var scene = new THREE.Scene();
// 			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//             hlight = new THREE.AmbientLight(0x404040,100);
//             // camera.rotation.y = 45/180*Math.PI;
//             // camera.position.x = 800;
//             // camera.position.y=100;
//             // camera.position.z = 1000;
//             scene.add(hlight);
//             directionLight = new THREE.DirectionalLight(0xffffff,100);
//             directionLight.position.set(0,1,0);
//             directionLight.castShadow = true;
//             scene.add(directionLight);

// 			var renderer = new THREE.WebGLRenderer({antilias:true});
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );

// 			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 			var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// 			var cube = new THREE.Mesh( geometry, material );
// 			scene.add( cube );

// 			camera.position.z = 3;

// 			var animate = function () {
// 				requestAnimationFrame( animate );

// 				cube.rotation.x += 0.01;
// 				cube.rotation.y += 0.01;

// 				renderer.render( scene, camera );
// 			};

//             animate();

           
var scene = new THREE.Scene();
// scene.background = new THREE.Color(0xdddddd);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth /     window.innerHeight, 0.1, 1000 );
hlight = new THREE.AmbientLight(0x404040,100);
            // camera.rotation.y = 45/180*Math.PI;
            // camera.position.x = 800;
            // camera.position.y=100;
            // camera.position.z = 1000;
            scene.add(hlight);
            directionLight = new THREE.DirectionalLight(0xffffff,100);
            directionLight.position.set(0,1,0);
            directionLight.castShadow = true;
            scene.add(directionLight);

// hlight = new THREE.AmbientLight(0x404040,100);
// camera.rotation.y = 45/180*Math.PI;
// camera.position.x = 100;
// camera.position.y=100;
camera.position.z = 2;
// scene.add(hlight);
// directionLight = new THREE.DirectionalLight(0xffffff,100);
// directionLight.position.set(0,1,0);
// directionLight.castShadow = true;
// scene.add(directionLight);
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000);
document.body.appendChild( renderer.domElement );

 const loader = new THREE.OBJLoader();
 //loader.setPath('scrCom/sketch/');
 var mtlloader// = new THREE.MTLLoader();
 //mtlloader.setPath('scrCom/sketch/');

 loader.load('scrCom/sketch/vvt.obj',(object)=>{
    mtlloader = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
     			var cube = new THREE.Mesh( object, mtlloader );
    scene.add(cube);
}, undefined, function ( error ) { console.error( error ); });


renderer.render( scene, camera );




// new Promise((resolve)=>{
//     //loader.load('vvt.obj'), (obj)=>{
//         mtlloader = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//         resolve(mtlloader);
//     }).then((materials)=>{
        
//         loader.setMaterial(materials);
//         loader.load('scrCom/sketch/vvt.obj',(object)=>{
//             scene.add(object);
//         }, undefined, function ( error ) { console.error( error ); })
//     })

// var loader = new THREE.GLTF();
// //loader.setTranscoderPath('scrCom/sketch/');
// //loader.detectSupport(render);
// loader.load('scrCom/sketch/vvt2.dae', function(apart){
//     // var material = new THREE.MeshFaceMaterial(null);
//     // apartModel = new THREE.Mesh(geometry, material);
//     // apart.scale.set(0.5,0.5,0.5);
//     // apart.position.y +=0.5;
//     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//     scene.add(apart.Scene);
// });
