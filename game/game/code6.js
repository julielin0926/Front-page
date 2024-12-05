gdjs.LOSECode = {};
gdjs.LOSECode.GDBackgroundObjects1= [];
gdjs.LOSECode.GDBackgroundObjects2= [];
gdjs.LOSECode.GDPlayerObjects1= [];
gdjs.LOSECode.GDPlayerObjects2= [];
gdjs.LOSECode.GDEnemyObjects1= [];
gdjs.LOSECode.GDEnemyObjects2= [];
gdjs.LOSECode.GDNewSpriteObjects1= [];
gdjs.LOSECode.GDNewSpriteObjects2= [];
gdjs.LOSECode.GDNewSprite2Objects1= [];
gdjs.LOSECode.GDNewSprite2Objects2= [];
gdjs.LOSECode.GDNewTextObjects1= [];
gdjs.LOSECode.GDNewTextObjects2= [];
gdjs.LOSECode.GDNewButton2Objects1= [];
gdjs.LOSECode.GDNewButton2Objects2= [];


gdjs.LOSECode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sound\\lose.mp3", 1, true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton2"), gdjs.LOSECode.GDNewButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LOSECode.GDNewButton2Objects1.length;i<l;++i) {
    if ( gdjs.LOSECode.GDNewButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LOSECode.GDNewButton2Objects1[k] = gdjs.LOSECode.GDNewButton2Objects1[i];
        ++k;
    }
}
gdjs.LOSECode.GDNewButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.LOSECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOSECode.GDBackgroundObjects1.length = 0;
gdjs.LOSECode.GDBackgroundObjects2.length = 0;
gdjs.LOSECode.GDPlayerObjects1.length = 0;
gdjs.LOSECode.GDPlayerObjects2.length = 0;
gdjs.LOSECode.GDEnemyObjects1.length = 0;
gdjs.LOSECode.GDEnemyObjects2.length = 0;
gdjs.LOSECode.GDNewSpriteObjects1.length = 0;
gdjs.LOSECode.GDNewSpriteObjects2.length = 0;
gdjs.LOSECode.GDNewSprite2Objects1.length = 0;
gdjs.LOSECode.GDNewSprite2Objects2.length = 0;
gdjs.LOSECode.GDNewTextObjects1.length = 0;
gdjs.LOSECode.GDNewTextObjects2.length = 0;
gdjs.LOSECode.GDNewButton2Objects1.length = 0;
gdjs.LOSECode.GDNewButton2Objects2.length = 0;

gdjs.LOSECode.eventsList0(runtimeScene);

return;

}

gdjs['LOSECode'] = gdjs.LOSECode;
