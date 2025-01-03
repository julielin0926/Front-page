gdjs.WINCode = {};
gdjs.WINCode.GDPlayerObjects1= [];
gdjs.WINCode.GDPlayerObjects2= [];
gdjs.WINCode.GDPlayerObjects3= [];
gdjs.WINCode.GDEnemyObjects1= [];
gdjs.WINCode.GDEnemyObjects2= [];
gdjs.WINCode.GDEnemyObjects3= [];
gdjs.WINCode.GDBackgroundObjects1= [];
gdjs.WINCode.GDBackgroundObjects2= [];
gdjs.WINCode.GDBackgroundObjects3= [];
gdjs.WINCode.GDNewSpriteObjects1= [];
gdjs.WINCode.GDNewSpriteObjects2= [];
gdjs.WINCode.GDNewSpriteObjects3= [];
gdjs.WINCode.GDNewSprite2Objects1= [];
gdjs.WINCode.GDNewSprite2Objects2= [];
gdjs.WINCode.GDNewSprite2Objects3= [];
gdjs.WINCode.GDNewTextObjects1= [];
gdjs.WINCode.GDNewTextObjects2= [];
gdjs.WINCode.GDNewTextObjects3= [];
gdjs.WINCode.GDstar2Objects1= [];
gdjs.WINCode.GDstar2Objects2= [];
gdjs.WINCode.GDstar2Objects3= [];
gdjs.WINCode.GDdoorObjects1= [];
gdjs.WINCode.GDdoorObjects2= [];
gdjs.WINCode.GDdoorObjects3= [];
gdjs.WINCode.GDNewButton2Objects1= [];
gdjs.WINCode.GDNewButton2Objects2= [];
gdjs.WINCode.GDNewButton2Objects3= [];


gdjs.WINCode.asyncCallback15087708 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "2");
}}
gdjs.WINCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WINCode.asyncCallback15087708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WINCode.asyncCallback15090172 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "3");
}}
gdjs.WINCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WINCode.asyncCallback15090172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WINCode.asyncCallback15089388 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "2");
}
{ //Subevents
gdjs.WINCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.WINCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WINCode.asyncCallback15089388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WINCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "3");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sound\\sucess.mp3", 1, true, 50, 1);
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

gdjs.copyArray(runtimeScene.getObjects("NewButton2"), gdjs.WINCode.GDNewButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINCode.GDNewButton2Objects1.length;i<l;++i) {
    if ( gdjs.WINCode.GDNewButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WINCode.GDNewButton2Objects1[k] = gdjs.WINCode.GDNewButton2Objects1[i];
        ++k;
    }
}
gdjs.WINCode.GDNewButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.WINCode.GDstar2Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\star.mp3", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.WINCode.GDstar2Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDstar2Objects1[i].rotate(100, runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.WINCode.GDstar2Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\star.mp3", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.WINCode.GDstar2Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDstar2Objects1[i].rotate(100, runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "1");
}
{ //Subevents
gdjs.WINCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.WINCode.GDstar2Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\star.mp3", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.WINCode.GDstar2Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDstar2Objects1[i].rotate(100, runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "1");
}
{ //Subevents
gdjs.WINCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINCode.GDPlayerObjects1.length = 0;
gdjs.WINCode.GDPlayerObjects2.length = 0;
gdjs.WINCode.GDPlayerObjects3.length = 0;
gdjs.WINCode.GDEnemyObjects1.length = 0;
gdjs.WINCode.GDEnemyObjects2.length = 0;
gdjs.WINCode.GDEnemyObjects3.length = 0;
gdjs.WINCode.GDBackgroundObjects1.length = 0;
gdjs.WINCode.GDBackgroundObjects2.length = 0;
gdjs.WINCode.GDBackgroundObjects3.length = 0;
gdjs.WINCode.GDNewSpriteObjects1.length = 0;
gdjs.WINCode.GDNewSpriteObjects2.length = 0;
gdjs.WINCode.GDNewSpriteObjects3.length = 0;
gdjs.WINCode.GDNewSprite2Objects1.length = 0;
gdjs.WINCode.GDNewSprite2Objects2.length = 0;
gdjs.WINCode.GDNewSprite2Objects3.length = 0;
gdjs.WINCode.GDNewTextObjects1.length = 0;
gdjs.WINCode.GDNewTextObjects2.length = 0;
gdjs.WINCode.GDNewTextObjects3.length = 0;
gdjs.WINCode.GDstar2Objects1.length = 0;
gdjs.WINCode.GDstar2Objects2.length = 0;
gdjs.WINCode.GDstar2Objects3.length = 0;
gdjs.WINCode.GDdoorObjects1.length = 0;
gdjs.WINCode.GDdoorObjects2.length = 0;
gdjs.WINCode.GDdoorObjects3.length = 0;
gdjs.WINCode.GDNewButton2Objects1.length = 0;
gdjs.WINCode.GDNewButton2Objects2.length = 0;
gdjs.WINCode.GDNewButton2Objects3.length = 0;

gdjs.WINCode.eventsList3(runtimeScene);

return;

}

gdjs['WINCode'] = gdjs.WINCode;
