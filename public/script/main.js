let type = "WebGL";
try {
if(!PIXI.utils.isWebGLSupported()){
type = "canvas";
}
} catch (e) {
alert(e)
}
PIXI.utils.sayHello(type);
