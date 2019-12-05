let scene, camera, renderer;
let apart,gltfL;

function init() {
scene= new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
camera.position.set(35,10,-30);

camera.rotation.set(0,0,540/180*Math.PI)
 //camera.rotation.z =  10/180*Math.PI;
hlight = new THREE.AmbientLight( 0xcccccc, 0.4);
scene.add(hlight);

drLight = new THREE.DirectionalLight(0xffffff,0.8);
drLight.position.set(35,10,-30).normalize();
drLight.castShadow = true;
scene.add(drLight);

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor(0xEEEEEE);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


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
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render(scene, camera);
}

init();
window.addEventListener('resize', onResize, false)
