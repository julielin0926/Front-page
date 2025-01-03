gdjs._20171_320571Code = {};
gdjs._20171_320571Code.GDNewSpriteObjects1= [];
gdjs._20171_320571Code.GDNewSpriteObjects2= [];
gdjs._20171_320571Code.GDa1Objects1= [];
gdjs._20171_320571Code.GDa1Objects2= [];
gdjs._20171_320571Code.GDa2Objects1= [];
gdjs._20171_320571Code.GDa2Objects2= [];
gdjs._20171_320571Code.GDstoneObjects1= [];
gdjs._20171_320571Code.GDstoneObjects2= [];
gdjs._20171_320571Code.GDwoodObjects1= [];
gdjs._20171_320571Code.GDwoodObjects2= [];
gdjs._20171_320571Code.GDb1Objects1= [];
gdjs._20171_320571Code.GDb1Objects2= [];
gdjs._20171_320571Code.GDb2Objects1= [];
gdjs._20171_320571Code.GDb2Objects2= [];
gdjs._20171_320571Code.GDc1Objects1= [];
gdjs._20171_320571Code.GDc1Objects2= [];
gdjs._20171_320571Code.GDvegetableObjects1= [];
gdjs._20171_320571Code.GDvegetableObjects2= [];
gdjs._20171_320571Code.GDflowerObjects1= [];
gdjs._20171_320571Code.GDflowerObjects2= [];
gdjs._20171_320571Code.GDgarlic2Objects1= [];
gdjs._20171_320571Code.GDgarlic2Objects2= [];
gdjs._20171_320571Code.GDPlayerObjects1= [];
gdjs._20171_320571Code.GDPlayerObjects2= [];
gdjs._20171_320571Code.GDc2Objects1= [];
gdjs._20171_320571Code.GDc2Objects2= [];
gdjs._20171_320571Code.GDaaaObjects1= [];
gdjs._20171_320571Code.GDaaaObjects2= [];
gdjs._20171_320571Code.GDfloweraObjects1= [];
gdjs._20171_320571Code.GDfloweraObjects2= [];
gdjs._20171_320571Code.GDgarlicObjects1= [];
gdjs._20171_320571Code.GDgarlicObjects2= [];
gdjs._20171_320571Code.GDc3Objects1= [];
gdjs._20171_320571Code.GDc3Objects2= [];
gdjs._20171_320571Code.GDc4Objects1= [];
gdjs._20171_320571Code.GDc4Objects2= [];


gdjs._20171_320571Code.asyncCallback14989012 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "介紹3", false);
}}
gdjs._20171_320571Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._20171_320571Code.asyncCallback14989012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20171_320571Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "PLayer", 0);
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
gdjs._20171_320571Code.eventsList0(runtimeScene);} //End of subevents
}

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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "介紹2", false);
}}

}


};

gdjs._20171_320571Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20171_320571Code.GDNewSpriteObjects1.length = 0;
gdjs._20171_320571Code.GDNewSpriteObjects2.length = 0;
gdjs._20171_320571Code.GDa1Objects1.length = 0;
gdjs._20171_320571Code.GDa1Objects2.length = 0;
gdjs._20171_320571Code.GDa2Objects1.length = 0;
gdjs._20171_320571Code.GDa2Objects2.length = 0;
gdjs._20171_320571Code.GDstoneObjects1.length = 0;
gdjs._20171_320571Code.GDstoneObjects2.length = 0;
gdjs._20171_320571Code.GDwoodObjects1.length = 0;
gdjs._20171_320571Code.GDwoodObjects2.length = 0;
gdjs._20171_320571Code.GDb1Objects1.length = 0;
gdjs._20171_320571Code.GDb1Objects2.length = 0;
gdjs._20171_320571Code.GDb2Objects1.length = 0;
gdjs._20171_320571Code.GDb2Objects2.length = 0;
gdjs._20171_320571Code.GDc1Objects1.length = 0;
gdjs._20171_320571Code.GDc1Objects2.length = 0;
gdjs._20171_320571Code.GDvegetableObjects1.length = 0;
gdjs._20171_320571Code.GDvegetableObjects2.length = 0;
gdjs._20171_320571Code.GDflowerObjects1.length = 0;
gdjs._20171_320571Code.GDflowerObjects2.length = 0;
gdjs._20171_320571Code.GDgarlic2Objects1.length = 0;
gdjs._20171_320571Code.GDgarlic2Objects2.length = 0;
gdjs._20171_320571Code.GDPlayerObjects1.length = 0;
gdjs._20171_320571Code.GDPlayerObjects2.length = 0;
gdjs._20171_320571Code.GDc2Objects1.length = 0;
gdjs._20171_320571Code.GDc2Objects2.length = 0;
gdjs._20171_320571Code.GDaaaObjects1.length = 0;
gdjs._20171_320571Code.GDaaaObjects2.length = 0;
gdjs._20171_320571Code.GDfloweraObjects1.length = 0;
gdjs._20171_320571Code.GDfloweraObjects2.length = 0;
gdjs._20171_320571Code.GDgarlicObjects1.length = 0;
gdjs._20171_320571Code.GDgarlicObjects2.length = 0;
gdjs._20171_320571Code.GDc3Objects1.length = 0;
gdjs._20171_320571Code.GDc3Objects2.length = 0;
gdjs._20171_320571Code.GDc4Objects1.length = 0;
gdjs._20171_320571Code.GDc4Objects2.length = 0;

gdjs._20171_320571Code.eventsList1(runtimeScene);

return;

}

gdjs['_20171_320571Code'] = gdjs._20171_320571Code;
