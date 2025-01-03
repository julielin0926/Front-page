gdjs._20171_320573Code = {};
gdjs._20171_320573Code.GDNewTiledSpriteObjects1= [];
gdjs._20171_320573Code.GDNewTiledSpriteObjects2= [];
gdjs._20171_320573Code.GDa1Objects1= [];
gdjs._20171_320573Code.GDa1Objects2= [];
gdjs._20171_320573Code.GDNewSpriteObjects1= [];
gdjs._20171_320573Code.GDNewSpriteObjects2= [];
gdjs._20171_320573Code.GDNewSprite2Objects1= [];
gdjs._20171_320573Code.GDNewSprite2Objects2= [];
gdjs._20171_320573Code.GDNewTextObjects1= [];
gdjs._20171_320573Code.GDNewTextObjects2= [];
gdjs._20171_320573Code.GDNewText2Objects1= [];
gdjs._20171_320573Code.GDNewText2Objects2= [];
gdjs._20171_320573Code.GDa2Objects1= [];
gdjs._20171_320573Code.GDa2Objects2= [];
gdjs._20171_320573Code.GDa3Objects1= [];
gdjs._20171_320573Code.GDa3Objects2= [];


gdjs._20171_320573Code.asyncCallback15060556 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "介紹1", false);
}}
gdjs._20171_320573Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._20171_320573Code.asyncCallback15060556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20171_320573Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sound\\start.mp3", 1, true, 25, 1);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._20171_320573Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._20171_320573Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20171_320573Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._20171_320573Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._20171_320573Code.GDa1Objects1.length = 0;
gdjs._20171_320573Code.GDa1Objects2.length = 0;
gdjs._20171_320573Code.GDNewSpriteObjects1.length = 0;
gdjs._20171_320573Code.GDNewSpriteObjects2.length = 0;
gdjs._20171_320573Code.GDNewSprite2Objects1.length = 0;
gdjs._20171_320573Code.GDNewSprite2Objects2.length = 0;
gdjs._20171_320573Code.GDNewTextObjects1.length = 0;
gdjs._20171_320573Code.GDNewTextObjects2.length = 0;
gdjs._20171_320573Code.GDNewText2Objects1.length = 0;
gdjs._20171_320573Code.GDNewText2Objects2.length = 0;
gdjs._20171_320573Code.GDa2Objects1.length = 0;
gdjs._20171_320573Code.GDa2Objects2.length = 0;
gdjs._20171_320573Code.GDa3Objects1.length = 0;
gdjs._20171_320573Code.GDa3Objects2.length = 0;

gdjs._20171_320573Code.eventsList1(runtimeScene);

return;

}

gdjs['_20171_320573Code'] = gdjs._20171_320573Code;
