gdjs.StartCode = {};
gdjs.StartCode.GDPlayerObjects1= [];
gdjs.StartCode.GDPlayerObjects2= [];
gdjs.StartCode.GDNewSprite3Objects1= [];
gdjs.StartCode.GDNewSprite3Objects2= [];
gdjs.StartCode.GDNewTiledSprite2Objects1= [];
gdjs.StartCode.GDNewTiledSprite2Objects2= [];
gdjs.StartCode.GDUnnamedObjects1= [];
gdjs.StartCode.GDUnnamedObjects2= [];
gdjs.StartCode.GDNewSprite5Objects1= [];
gdjs.StartCode.GDNewSprite5Objects2= [];
gdjs.StartCode.GDNewTiledSpriteObjects1= [];
gdjs.StartCode.GDNewTiledSpriteObjects2= [];
gdjs.StartCode.GDUnnamed2Objects1= [];
gdjs.StartCode.GDUnnamed2Objects2= [];
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewButtonObjects1= [];
gdjs.StartCode.GDNewButtonObjects2= [];
gdjs.StartCode.GDNewButton2Objects1= [];
gdjs.StartCode.GDNewButton2Objects2= [];
gdjs.StartCode.GDNewButton3Objects1= [];
gdjs.StartCode.GDNewButton3Objects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0, "player", 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sound\\start.mp3", 1, true, 25, 1);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.StartCode.GDPlayerObjects1.length !== 0 ? gdjs.StartCode.GDPlayerObjects1[0] : null), true, "player", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "介紹2", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton2"), gdjs.StartCode.GDNewButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewButton2Objects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewButton2Objects1[k] = gdjs.StartCode.GDNewButton2Objects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton3"), gdjs.StartCode.GDNewButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewButton3Objects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewButton3Objects1[k] = gdjs.StartCode.GDNewButton3Objects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "介紹2", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.StartCode.GDUnnamedObjects1.length = 0;
gdjs.StartCode.GDUnnamedObjects2.length = 0;
gdjs.StartCode.GDNewSprite5Objects1.length = 0;
gdjs.StartCode.GDNewSprite5Objects2.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDUnnamed2Objects1.length = 0;
gdjs.StartCode.GDUnnamed2Objects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewButtonObjects1.length = 0;
gdjs.StartCode.GDNewButtonObjects2.length = 0;
gdjs.StartCode.GDNewButton2Objects1.length = 0;
gdjs.StartCode.GDNewButton2Objects2.length = 0;
gdjs.StartCode.GDNewButton3Objects1.length = 0;
gdjs.StartCode.GDNewButton3Objects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
