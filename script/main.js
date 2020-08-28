alert(1);
let type = "WebGL";
alert(2);
try {
if(!PIXI.utils.isWebGLSupported()){
alert(3);
type = "canvas";
alert(4);
}
} catch (e) {
alert(e)
}
alert(5);
PIXI.utils.sayHello(type);
alert(6);
