let scene, camera, renderer;
let apart,gltfL;

function init() {
scene= new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
camera = new THREE.PerspectiveCamera(40,(window.innerWidth>window.innerHeight)? window.innerWidth/window.innerHeight: window.innerHeight/window.innerWidth, 1, 5000);
camera.position.set(35,10,-30);

camera.rotation.set(0,0,540/180*Math.PI)
 //camera.rotation.z =  10/180*Math.PI;
hlight = new THREE.AmbientLight( 0xcccccc, 0.4);
scene.add(hlight);

drLight = new THREE.DirectionalLight(0xffffff,0.8);
drLight.position.set(35,10,-30).normalize();
drLight.castShadow = true;
scene.add(drLight);

renderer = new THREE.WebGLRenderer({antialias:true,canvas: apartCan});
renderer.setClearColor(0xEEEEEE);
if (window.innerWidth<560) {
    renderer.setSize(window.innerWidth*10/15, window.innerHeight*36/150);
} else if(window.innerWidth<window.innerHeight){
    renderer.setSize(window.innerWidth*48/150, window.innerHeight*36/150);
}else{
    renderer.setSize(window.innerWidth*36/150, window.innerHeight*48/150);
}

document.querySelector('#dCan').appendChild(renderer.domElement);



let loader = new THREE.ColladaLoader();
loader.load('scrCom/sketch/vvt.dae',function(colla){

    gltfL = colla;
    apart = colla.scene;
    //apart.scale.set(4,4,4);
    apart.castShadow = true;
    scene.add(apart);

    apart.rotation.x = -0.5 * Math.PI;
    
    camera.lookAt( 0, 3, 0 );
    renderer.render(scene, camera);
}, undefined , function ( error ) { console.error( error );})
};
function onResize() {
    camera.aspect = (window.innerWidth>window.innerHeight)? window.innerWidth/window.innerHeight: window.innerHeight/window.innerWidth;
    camera.updateProjectionMatrix();
    if (window.innerWidth<560) {
        renderer.setSize(window.innerWidth*10/15, window.innerHeight*36/150);
    } else if(window.innerWidth<window.innerHeight){
        renderer.setSize(window.innerWidth*48/150, window.innerHeight*36/150);
    }else{
        renderer.setSize(window.innerWidth*36/150, window.innerHeight*48/150);
    }
    renderer.render(scene, camera);
}
init();
window.addEventListener('resize', onResize, false)

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate= true;
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.0;
controls.panSpeed = 1.0;
controls.maxDistance=60;
controls.minDistance=5;
controls.target.set(15,0,0);
var clock = new THREE.Clock();
function animate() {
var delta = clock.getDelta();
controls.update(delta);
requestAnimationFrame(animate);
renderer.render(scene, camera);
}
controls.addEventListener('start', function(){
    clearTimeout(autorotateTimeout);
    controls.autoRotate = false;
  });
  let autorotateTimeout;
  // restart autorotate after the last interaction & an idle time has passed
  this.controls.addEventListener('end', function(){
    autorotateTimeout = setTimeout(function(){
      controls.autoRotate = true;
    }, 1500);
  });
//controls.addEventListener('change',render);
animate()

// const int x = f() ? 10 : 2;

// X::X() : n_(n > 0 ? 2 * n : 0) { }