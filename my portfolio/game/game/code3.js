gdjs._20171_320572Code = {};
gdjs._20171_320572Code.GDNewSpriteObjects1= [];
gdjs._20171_320572Code.GDNewSpriteObjects2= [];
gdjs._20171_320572Code.GDNextObjects1= [];
gdjs._20171_320572Code.GDNextObjects2= [];
gdjs._20171_320572Code.GDa1Objects1= [];
gdjs._20171_320572Code.GDa1Objects2= [];
gdjs._20171_320572Code.GDa2Objects1= [];
gdjs._20171_320572Code.GDa2Objects2= [];
gdjs._20171_320572Code.GDa3Objects1= [];
gdjs._20171_320572Code.GDa3Objects2= [];
gdjs._20171_320572Code.GDa4Objects1= [];
gdjs._20171_320572Code.GDa4Objects2= [];
gdjs._20171_320572Code.GDa5Objects1= [];
gdjs._20171_320572Code.GDa5Objects2= [];


gdjs._20171_320572Code.asyncCallback15037908 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "介紹1", false);
}}
gdjs._20171_320572Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._20171_320572Code.asyncCallback15037908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20171_320572Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0, "Player", 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sound\\start.mp3", 1, true, 25, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._20171_320572Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._20171_320572Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20171_320572Code.GDNewSpriteObjects1.length = 0;
gdjs._20171_320572Code.GDNewSpriteObjects2.length = 0;
gdjs._20171_320572Code.GDNextObjects1.length = 0;
gdjs._20171_320572Code.GDNextObjects2.length = 0;
gdjs._20171_320572Code.GDa1Objects1.length = 0;
gdjs._20171_320572Code.GDa1Objects2.length = 0;
gdjs._20171_320572Code.GDa2Objects1.length = 0;
gdjs._20171_320572Code.GDa2Objects2.length = 0;
gdjs._20171_320572Code.GDa3Objects1.length = 0;
gdjs._20171_320572Code.GDa3Objects2.length = 0;
gdjs._20171_320572Code.GDa4Objects1.length = 0;
gdjs._20171_320572Code.GDa4Objects2.length = 0;
gdjs._20171_320572Code.GDa5Objects1.length = 0;
gdjs._20171_320572Code.GDa5Objects2.length = 0;

gdjs._20171_320572Code.eventsList1(runtimeScene);

return;

}

gdjs['_20171_320572Code'] = gdjs._20171_320572Code;
